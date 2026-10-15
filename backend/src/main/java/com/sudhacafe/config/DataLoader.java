package com.sudhacafe.config;

import com.sudhacafe.model.MenuItem;
import com.sudhacafe.repository.MenuItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

/**
 * Initializes sample cafe menu data if the database is empty.
 * Ensures the website is fully functional out of the box for testing and viva presentation.
 */
@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(MenuItemRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                System.out.println("⚡ Database is empty. Seeding initial menu items for Sudha Cafe...");

                List<MenuItem> sampleItems = Arrays.asList(
                    // Coffee
                    new MenuItem(
                        "Signature Espresso",
                        "Rich and intense double shot extracted from premium single-origin Arabica beans.",
                        new BigDecimal("149.00"),
                        "Coffee",
                        "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Velvet Cappuccino",
                        "Classic espresso topped with silky, velvety steamed milk and a dusting of Dutch cocoa.",
                        new BigDecimal("189.00"),
                        "Coffee",
                        "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Caramel Macchiato",
                        "Freshly steamed milk with vanilla-flavored syrup marked with espresso and drizzled with caramel.",
                        new BigDecimal("219.00"),
                        "Coffee",
                        "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Artisan Cafe Latte",
                        "Smooth and comforting balance of full-bodied espresso and gentle textured milk.",
                        new BigDecimal("199.00"),
                        "Coffee",
                        "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80",
                        true
                    ),

                    // Tea
                    new MenuItem(
                        "Masala Chai Royale",
                        "Traditional slow-brewed Assam CTC black tea infused with cardamom, ginger, cinnamon, and whole milk.",
                        new BigDecimal("99.00"),
                        "Tea",
                        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Himalayan Green Tea",
                        "Handpicked organic green tea leaves scented with delicate jasmine and lemongrass.",
                        new BigDecimal("129.00"),
                        "Tea",
                        "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Earl Grey Lavender",
                        "Noble black tea scented with oil of bergamot and infused with organic French lavender buds.",
                        new BigDecimal("149.00"),
                        "Tea",
                        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80",
                        true
                    ),

                    // Cold Beverages
                    new MenuItem(
                        "Classic Iced Cold Brew",
                        "Steeped for 18 hours in cold filtered water for an ultra-smooth, naturally sweet coffee punch.",
                        new BigDecimal("209.00"),
                        "Cold Beverages",
                        "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Belgian Mocha Frappe",
                        "Espresso blended with dark Belgian chocolate sauce, milk, and crushed ice, crowned with whipped cream.",
                        new BigDecimal("239.00"),
                        "Cold Beverages",
                        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Berry Hibiscus Cooler",
                        "Sparkling brew of tart hibiscus and wild forest berries with crushed mint leaves and lime.",
                        new BigDecimal("179.00"),
                        "Cold Beverages",
                        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
                        true
                    ),

                    // Snacks
                    new MenuItem(
                        "Truffle Parmesan Herb Fries",
                        "Crisp golden skin-on fries tossed in white truffle oil, grated parmesan, and garden parsley.",
                        new BigDecimal("169.00"),
                        "Snacks",
                        "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Cheesy Jalapeno Poppers",
                        "Crispy breaded bites stuffed with gooey cheddar, mozzarella, and spicy pickled jalapenos.",
                        new BigDecimal("189.00"),
                        "Snacks",
                        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Classic Butter Croissant",
                        "Flaky, golden French pastry baked fresh daily with pure cultured Normandy butter.",
                        new BigDecimal("139.00"),
                        "Snacks",
                        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
                        true
                    ),

                    // Sandwiches
                    new MenuItem(
                        "Gourmet Paneer Tikka Panini",
                        "Char-grilled cottage cheese cubes with tandoori spices, bell peppers, mint chutney, and molten cheese.",
                        new BigDecimal("229.00"),
                        "Sandwiches",
                        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Smoked Chicken & Pesto Panini",
                        "Tender smoked chicken breast, sun-dried tomatoes, house basil pesto, and fresh mozzarella on focaccia.",
                        new BigDecimal("269.00"),
                        "Sandwiches",
                        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Garden Fresh Avocado & Feta Toast",
                        "Hass avocado mash on toasted artisan sourdough topped with crumbled Danish feta and chili flakes.",
                        new BigDecimal("249.00"),
                        "Sandwiches",
                        "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80",
                        true
                    ),

                    // Desserts
                    new MenuItem(
                        "Belgian Dark Chocolate Lava Cake",
                        "Decadent warm chocolate cake with a molten truffle center, dusted with icing sugar.",
                        new BigDecimal("199.00"),
                        "Desserts",
                        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "New York Baked Cheesecake",
                        "Velvety cream cheese filling on a crumbly graham cracker crust with berry coulis drizzle.",
                        new BigDecimal("229.00"),
                        "Desserts",
                        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
                        true
                    ),
                    new MenuItem(
                        "Classic Italian Tiramisu",
                        "Espresso-soaked ladyfinger biscuits layered with rich mascarpone zabaglione and cocoa powder.",
                        new BigDecimal("249.00"),
                        "Desserts",
                        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
                        true
                    )
                );

                repository.saveAll(sampleItems);
                System.out.println("✅ Successfully populated " + sampleItems.size() + " menu items into the database!");
            }
        };
    }
}
