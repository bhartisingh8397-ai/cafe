-- ===================================================================
-- Sudha Cafe Initial Seed Data
-- ===================================================================

USE sudha_cafe;

INSERT INTO menu_items (name, description, price, category, image_url, available) VALUES
-- Coffee
('Signature Espresso', 'Rich and intense double shot extracted from premium single-origin Arabica beans.', 149.00, 'Coffee', 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=80', TRUE),
('Velvet Cappuccino', 'Classic espresso topped with silky, velvety steamed milk and a dusting of Dutch cocoa.', 189.00, 'Coffee', 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80', TRUE),
('Caramel Macchiato', 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and drizzled with caramel.', 219.00, 'Coffee', 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80', TRUE),
('Artisan Cafe Latte', 'Smooth and comforting balance of full-bodied espresso and gentle textured milk.', 199.00, 'Coffee', 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80', TRUE),

-- Tea
('Masala Chai Royale', 'Traditional slow-brewed Assam CTC black tea infused with cardamom, ginger, cinnamon, and whole milk.', 99.00, 'Tea', 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80', TRUE),
('Himalayan Green Tea', 'Handpicked organic green tea leaves scented with delicate jasmine and lemongrass.', 129.00, 'Tea', 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80', TRUE),
('Earl Grey Lavender', 'Noble black tea scented with oil of bergamot and infused with organic French lavender buds.', 149.00, 'Tea', 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80', TRUE),

-- Cold Beverages
('Classic Iced Cold Brew', 'Steeped for 18 hours in cold filtered water for an ultra-smooth, naturally sweet coffee punch.', 209.00, 'Cold Beverages', 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80', TRUE),
('Belgian Mocha Frappe', 'Espresso blended with dark Belgian chocolate sauce, milk, and crushed ice, crowned with whipped cream.', 239.00, 'Cold Beverages', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80', TRUE),
('Berry Hibiscus Cooler', 'Sparkling brew of tart hibiscus and wild forest berries with crushed mint leaves and lime.', 179.00, 'Cold Beverages', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80', TRUE),

-- Snacks
('Truffle Parmesan Herb Fries', 'Crisp golden skin-on fries tossed in white truffle oil, grated parmesan, and garden parsley.', 169.00, 'Snacks', 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80', TRUE),
('Cheesy Jalapeno Poppers', 'Crispy breaded bites stuffed with gooey cheddar, mozzarella, and spicy pickled jalapenos.', 189.00, 'Snacks', 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80', TRUE),
('Classic Butter Croissant', 'Flaky, golden French pastry baked fresh daily with pure cultured Normandy butter.', 139.00, 'Snacks', 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80', TRUE),

-- Sandwiches
('Gourmet Paneer Tikka Panini', 'Char-grilled cottage cheese cubes with tandoori spices, bell peppers, mint chutney, and molten cheese.', 229.00, 'Sandwiches', 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80', TRUE),
('Smoked Chicken & Pesto Panini', 'Tender smoked chicken breast, sun-dried tomatoes, house basil pesto, and fresh mozzarella on focaccia.', 269.00, 'Sandwiches', 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80', TRUE),
('Garden Fresh Avocado & Feta Toast', 'Hass avocado mash on toasted artisan sourdough topped with crumbled Danish feta and chili flakes.', 249.00, 'Sandwiches', 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80', TRUE),

-- Desserts
('Belgian Dark Chocolate Lava Cake', 'Decadent warm chocolate cake with a molten truffle center, dusted with icing sugar.', 199.00, 'Desserts', 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80', TRUE),
('New York Baked Cheesecake', 'Velvety cream cheese filling on a crumbly graham cracker crust with berry coulis drizzle.', 229.00, 'Desserts', 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80', TRUE),
('Classic Italian Tiramisu', 'Espresso-soaked ladyfinger biscuits layered with rich mascarpone zabaglione and cocoa powder.', 249.00, 'Desserts', 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80', TRUE);
