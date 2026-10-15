/**
 * Sudha Cafe - Core Navigation & Interaction Script
 * BCA 5th Semester Minor Project
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollHeader();
    initImageFallbacks();
    highlightActiveNav();
});

/**
 * Mobile Hamburger Menu Toggle
 */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close mobile drawer when clicking any nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });

        // Close on clicking outside drawer
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    }
}

/**
 * Sticky Header elevation on scroll
 */
function initScrollHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Automatically highlight current page link in navbar
 */
function highlightActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Graceful Image Fallbacks
 * If an external image fails to load, replaces it with a clean cafe-themed fallback
 */
function initImageFallbacks() {
    const fallbackImage = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80';
    
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            if (this.src !== fallbackImage) {
                this.src = fallbackImage;
            }
        });
    });
}
