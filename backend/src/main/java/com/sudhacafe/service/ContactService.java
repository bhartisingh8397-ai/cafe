package com.sudhacafe.service;

import com.sudhacafe.dto.ContactRequest;
import com.sudhacafe.model.ContactMessage;
import com.sudhacafe.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service class handling customer contact inquiries.
 */
@Service
@Transactional
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;

    @Autowired
    public ContactService(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    /**
     * Validate and save a customer contact enquiry into the database.
     */
    public ContactMessage saveMessage(ContactRequest request) {
        ContactMessage message = new ContactMessage(
                request.getName().trim(),
                request.getEmail().trim().toLowerCase(),
                request.getSubject().trim(),
                request.getMessage().trim()
        );
        return contactMessageRepository.save(message);
    }

    /**
     * Retrieve all customer messages (for administrative review).
     */
    @Transactional(readOnly = true)
    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAllByOrderByCreatedAtDesc();
    }
}
