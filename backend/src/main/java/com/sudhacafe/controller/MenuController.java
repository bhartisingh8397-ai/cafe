package com.sudhacafe.controller;

import com.sudhacafe.dto.ApiResponse;
import com.sudhacafe.model.MenuItem;
import com.sudhacafe.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for Menu endpoints.
 * Base URL: /api/menu
 */
@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "*") // Cross-origin access for frontend client
public class MenuController {

    private final MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    /**
     * GET /api/menu
     * Retrieve all menu items.
     */
    @GetMapping
    public ResponseEntity<ApiResponse<List<MenuItem>>> getAllMenuItems() {
        List<MenuItem> items = menuService.getAllMenuItems();
        return ResponseEntity.ok(ApiResponse.success("Menu items fetched successfully", items));
    }

    /**
     * GET /api/menu/{id}
     * Retrieve a specific menu item by its primary key ID.
     */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<MenuItem>> getMenuItemById(@PathVariable Long id) {
        MenuItem item = menuService.getMenuItemById(id);
        return ResponseEntity.ok(ApiResponse.success("Item found", item));
    }

    /**
     * GET /api/menu/category/{category}
     * Retrieve all items under a given category (Coffee, Tea, Cold Beverages, Snacks, Sandwiches, Desserts).
     */
    @GetMapping("/category/{category}")
    public ResponseEntity<ApiResponse<List<MenuItem>>> getMenuItemsByCategory(@PathVariable String category) {
        List<MenuItem> items = menuService.getMenuItemsByCategory(category);
        return ResponseEntity.ok(ApiResponse.success("Category items fetched successfully", items));
    }

    /**
     * GET /api/menu/search?query=coffee
     * Search menu items matching the query text.
     */
    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<MenuItem>>> searchMenuItems(@RequestParam(name = "query", defaultValue = "") String query) {
        List<MenuItem> items = menuService.searchMenuItems(query);
        return ResponseEntity.ok(ApiResponse.success("Search completed successfully", items));
    }
}
