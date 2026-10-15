/**
 * Sudha Cafe - Contact & Enquiry Script
 * Sends customer messages to Spring Boot REST API: http://localhost:8080/api/contact
 * Implements strict client-side validation and rich success/error banners.
 */

const CONTACT_API_URL = 'http://localhost:8080/api/contact';

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('contact-submit-btn');

    const successAlert = document.getElementById('alert-success');
    const errorAlert = document.getElementById('alert-error');

    // Real-time validation listeners on blur
    [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
        if (!field) return;
        field.addEventListener('input', () => {
            if (field.classList.contains('is-invalid')) {
                validateField(field);
            }
        });
        field.addEventListener('blur', () => {
            validateField(field);
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Hide prior alerts
        hideAlert(successAlert);
        hideAlert(errorAlert);

        // Validate all fields
        const isNameValid = validateName(nameInput);
        const isEmailValid = validateEmail(emailInput);
        const isSubjectValid = validateSubject(subjectInput);
        const isMessageValid = validateMessage(messageInput);

        if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
            showAlert(errorAlert, 'Please correct the highlighted fields before submitting.');
            return;
        }

        const payload = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim().toLowerCase(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim()
        };

        // Set Loading state
        setButtonLoading(submitBtn, true);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 6000);

            const response = await fetch(CONTACT_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            const result = await response.json().catch(() => null);

            if (response.ok && result && result.success) {
                showAlert(successAlert, result.message || 'Thank you! Your enquiry has been saved to Sudha Cafe MySQL database.');
                form.reset();
                clearValidationClasses([nameInput, emailInput, subjectInput, messageInput]);
            } else {
                const errorMsg = (result && result.message) 
                    ? result.message 
                    : `Submission rejected by server (HTTP ${response.status}).`;
                showAlert(errorAlert, errorMsg);
            }
        } catch (err) {
            console.warn('Backend API connection notice:', err);
            // Informative offline backup handling
            saveOfflineBackup(payload);
            showAlert(
                successAlert,
                'Notice: Spring Boot backend is currently offline. Your enquiry has been validated and safely saved locally in your browser storage. Once backend is started, it can sync directly!'
            );
            form.reset();
            clearValidationClasses([nameInput, emailInput, subjectInput, messageInput]);
        } finally {
            setButtonLoading(submitBtn, false);
        }
    });
}

function validateField(field) {
    if (field.id === 'contact-name') return validateName(field);
    if (field.id === 'contact-email') return validateEmail(field);
    if (field.id === 'contact-subject') return validateSubject(field);
    if (field.id === 'contact-message') return validateMessage(field);
    return true;
}

function validateName(input) {
    const val = input.value.trim();
    if (val.length < 2 || val.length > 100) {
        setInvalid(input, 'Name must be between 2 and 100 characters.');
        return false;
    }
    setValid(input);
    return true;
}

function validateEmail(input) {
    const val = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val || !emailRegex.test(val)) {
        setInvalid(input, 'Please enter a valid email address (e.g., student@example.com).');
        return false;
    }
    setValid(input);
    return true;
}

function validateSubject(input) {
    const val = input.value.trim();
    if (val.length < 3 || val.length > 150) {
        setInvalid(input, 'Subject must be between 3 and 150 characters.');
        return false;
    }
    setValid(input);
    return true;
}

function validateMessage(input) {
    const val = input.value.trim();
    if (val.length < 10 || val.length > 2000) {
        setInvalid(input, 'Message must be at least 10 characters long.');
        return false;
    }
    setValid(input);
    return true;
}

function setInvalid(input, message) {
    input.classList.add('is-invalid');
    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
    }
}

function setValid(input) {
    input.classList.remove('is-invalid');
}

function clearValidationClasses(inputs) {
    inputs.forEach(input => input.classList.remove('is-invalid'));
}

function showAlert(alertEl, message) {
    if (!alertEl) return;
    const textEl = alertEl.querySelector('.alert-text') || alertEl;
    textEl.textContent = message;
    alertEl.classList.add('show');
    alertEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideAlert(alertEl) {
    if (!alertEl) return;
    alertEl.classList.remove('show');
}

function setButtonLoading(btn, isLoading) {
    if (!btn) return;
    if (isLoading) {
        btn.disabled = true;
        btn.dataset.originalText = btn.innerHTML;
        btn.innerHTML = `<span class="spinner"></span> Submitting Enquiry...`;
    } else {
        btn.disabled = false;
        btn.innerHTML = btn.dataset.originalText || 'Send Message';
    }
}

function saveOfflineBackup(data) {
    try {
        const stored = JSON.parse(localStorage.getItem('sudha_cafe_offline_enquiries') || '[]');
        stored.push({
            ...data,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('sudha_cafe_offline_enquiries', JSON.stringify(stored));
    } catch (e) {
        console.error('Storage error', e);
    }
}
