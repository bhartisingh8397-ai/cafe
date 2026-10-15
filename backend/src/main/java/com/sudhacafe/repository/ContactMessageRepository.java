package com.sudhacafe.repository;

import com.sudhacafe.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA Repository for ContactMessage entity.
 */
@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {

    /**
     * Retrieve messages ordered by creation date descending.
     */
    List<ContactMessage> findAllByOrderByCreatedAtDesc();
}
