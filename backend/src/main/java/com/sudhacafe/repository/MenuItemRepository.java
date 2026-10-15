package com.sudhacafe.repository;

import com.sudhacafe.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data JPA Repository for MenuItem entity.
 * Provides out-of-the-box CRUD and custom finder queries.
 */
@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {

    /**
     * Retrieve all items belonging to a specific category (case-insensitive).
     * @param category category name (e.g., 'Coffee', 'Desserts')
     * @return List of matching menu items
     */
    List<MenuItem> findByCategoryIgnoreCase(String category);

    /**
     * Search items by keyword in name or description (case-insensitive).
     * @param query search keyword
     * @return List of matching menu items
     */
    @Query("SELECT m FROM MenuItem m WHERE " +
           "LOWER(m.name) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(m.description) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(m.category) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<MenuItem> searchMenuItems(@Param("query") String query);

    /**
     * Retrieve all available items.
     * @return List of currently available items
     */
    List<MenuItem> findByAvailableTrue();
}
