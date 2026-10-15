package com.sudhacafe.service;

import com.sudhacafe.exception.ResourceNotFoundException;
import com.sudhacafe.model.MenuItem;
import com.sudhacafe.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service class handling business logic for Menu items.
 */
@Service
@Transactional(readOnly = true)
public class MenuService {

    private final MenuItemRepository menuItemRepository;

    @Autowired
    public MenuService(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    /**
     * Retrieve all available menu items.
     */
    public List<MenuItem> getAllMenuItems() {
        return menuItemRepository.findAll();
    }

    /**
     * Retrieve a single menu item by ID.
     */
    public MenuItem getMenuItemById(Long id) {
        return menuItemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Menu item with ID " + id + " not found"));
    }

    /**
     * Retrieve items filtered by category.
     */
    public List<MenuItem> getMenuItemsByCategory(String category) {
        if (category == null || category.trim().isEmpty() || "All".equalsIgnoreCase(category)) {
            return getAllMenuItems();
        }
        return menuItemRepository.findByCategoryIgnoreCase(category.trim());
    }

    /**
     * Search items by keyword matching name, description, or category.
     */
    public List<MenuItem> searchMenuItems(String query) {
        if (query == null || query.trim().isEmpty()) {
            return getAllMenuItems();
        }
        return menuItemRepository.searchMenuItems(query.trim());
    }

    /**
     * Save or update a menu item.
     */
    @Transactional
    public MenuItem saveMenuItem(MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }
}
