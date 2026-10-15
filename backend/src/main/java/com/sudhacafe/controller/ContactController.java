package com.sudhacafe.controller;

import com.sudhacafe.dto.ApiResponse;
import com.sudhacafe.dto.ContactRequest;
import com.sudhacafe.model.ContactMessage;
import com.sudhacafe.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for Customer Contact and Enquiry operations.
 * Base URL: /api/contact
 */
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    /**
     * POST /api/contact
     * Validate and store a customer contact enquiry.
     */
    @PostMapping
    public ResponseEntity<ApiResponse<ContactMessage>> submitContactMessage(
            @Valid @RequestBody ContactRequest request) {
        ContactMessage saved = contactService.saveMessage(request);
        return new ResponseEntity<>(
                ApiResponse.success("Thank you! Your message has been received. Our team will contact you soon.", saved),
                HttpStatus.CREATED
        );
    }

    /**
     * GET /api/contact
     * Retrieve all submitted customer enquiries (useful for testing and viva presentation).
     */
    @GetMapping
    public ResponseEntity<ApiResponse<List<ContactMessage>>> getAllMessages() {
        List<ContactMessage> messages = contactService.getAllMessages();
        return ResponseEntity.ok(ApiResponse.success("Contact enquiries retrieved", messages));
    }
}
