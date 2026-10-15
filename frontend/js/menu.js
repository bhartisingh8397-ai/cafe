/**
 * Sudha Cafe - Interactive Menu Script
 * Connects to Spring Boot REST API: http://localhost:8080/api/menu
 * Features: Live search, category filtering, INR pricing, loading states,
 * and robust offline fallback sample items.
 */

const API_BASE_URL = 'http://localhost:8080/api/menu';

// Sample demonstration dataset if Java backend is offline or starting
const SAMPLE_MENU_ITEMS = [
    {
        id: 1,
        name: "Signature Espresso",
        description: "Rich and intense double shot extracted from premium single-origin Arabica beans.",
        price: 149.00,
        category: "Coffee",
        imageUrl: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 2,
        name: "Velvet Cappuccino",
        description: "Classic espresso topped with silky, velvety steamed milk and a dusting of Dutch cocoa.",
        price: 189.00,
        category: "Coffee",
        imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 3,
        name: "Caramel Macchiato",
        description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and drizzled with caramel.",
        price: 219.00,
        category: "Coffee",
        imageUrl: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 4,
        name: "Artisan Cafe Latte",
        description: "Smooth and comforting balance of full-bodied espresso and gentle textured milk.",
        price: 199.00,
        category: "Coffee",
        imageUrl: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 5,
        name: "Masala Chai Royale",
        description: "Traditional slow-brewed Assam CTC black tea infused with cardamom, ginger, cinnamon, and whole milk.",
        price: 99.00,
        category: "Tea",
        imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 6,
        name: "Himalayan Green Tea",
        description: "Handpicked organic green tea leaves scented with delicate jasmine and lemongrass.",
        price: 129.00,
        category: "Tea",
        imageUrl: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 7,
        name: "Earl Grey Lavender",
        description: "Noble black tea scented with oil of bergamot and infused with organic French lavender buds.",
        price: 149.00,
        category: "Tea",
        imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 8,
        name: "Classic Iced Cold Brew",
        description: "Steeped for 18 hours in cold filtered water for an ultra-smooth, naturally sweet coffee punch.",
        price: 209.00,
        category: "Cold Beverages",
        imageUrl: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 9,
        name: "Belgian Mocha Frappe",
        description: "Espresso blended with dark Belgian chocolate sauce, milk, and crushed ice, crowned with whipped cream.",
        price: 239.00,
        category: "Cold Beverages",
        imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 10,
        name: "Berry Hibiscus Cooler",
        description: "Sparkling brew of tart hibiscus and wild forest berries with crushed mint leaves and lime.",
        price: 179.00,
        category: "Cold Beverages",
        imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 11,
        name: "Truffle Parmesan Herb Fries",
        description: "Crisp golden skin-on fries tossed in white truffle oil, grated parmesan, and garden parsley.",
        price: 169.00,
        category: "Snacks",
        imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 12,
        name: "Cheesy Jalapeno Poppers",
        description: "Crispy breaded bites stuffed with gooey cheddar, mozzarella, and spicy pickled jalapenos.",
        price: 189.00,
        category: "Snacks",
        imageUrl: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 13,
        name: "Classic Butter Croissant",
        description: "Flaky, golden French pastry baked fresh daily with pure cultured Normandy butter.",
        price: 139.00,
        category: "Snacks",
        imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 14,
        name: "Gourmet Paneer Tikka Panini",
        description: "Char-grilled cottage cheese cubes with tandoori spices, bell peppers, mint chutney, and molten cheese.",
        price: 229.00,
        category: "Sandwiches",
        imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 15,
        name: "Smoked Chicken & Pesto Panini",
        description: "Tender smoked chicken breast, sun-dried tomatoes, house basil pesto, and fresh mozzarella on focaccia.",
        price: 269.00,
        category: "Sandwiches",
        imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 16,
        name: "Garden Fresh Avocado & Feta Toast",
        description: "Hass avocado mash on toasted artisan sourdough topped with crumbled Danish feta and chili flakes.",
        price: 249.00,
        category: "Sandwiches",
        imageUrl: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 17,
        name: "Belgian Dark Chocolate Lava Cake",
        description: "Decadent warm chocolate cake with a molten truffle center, dusted with icing sugar.",
        price: 199.00,
        category: "Desserts",
        imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 18,
        name: "New York Baked Cheesecake",
        description: "Velvety cream cheese filling on a crumbly graham cracker crust with berry coulis drizzle.",
        price: 229.00,
        category: "Desserts",
        imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        available: true
    },
    {
        id: 19,
        name: "Classic Italian Tiramisu",
        description: "Espresso-soaked ladyfinger biscuits layered with rich mascarpone zabaglione and cocoa powder.",
        price: 249.00,
        category: "Desserts",
        imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
        available: true
    }
];

let allMenuItems = [];
let currentCategory = 'all';
let currentSearchTerm = '';

document.addEventListener('DOMContentLoaded', () => {
    initMenu();
});

async function initMenu() {
    const gridContainer = document.getElementById('menu-grid');
    const statusContainer = document.getElementById('backend-status');
    const searchInput = document.getElementById('menu-search');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Show initial loading state
    if (gridContainer) {
        gridContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0;">
                <div class="spinner" style="width: 38px; height: 38px; border-width: 3px; border-color: var(--color-border); border-top-color: var(--color-caramel); margin-bottom: 16px;"></div>
                <p style="color: var(--color-text-muted); font-weight: 500;">Loading fresh cafe menu...</p>
            </div>
        `;
    }

    try {
        // Attempt to fetch from Spring Boot REST API with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const response = await fetch(API_BASE_URL, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const json = await response.json();
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            allMenuItems = json.data;
        } else {
            throw new Error('Empty dataset from API');
        }
    } catch (error) {
        console.warn('Backend API connection notice:', error.message);
        // Seamless fallback to rich sample dataset
        allMenuItems = SAMPLE_MENU_ITEMS;
    }

    renderMenu();
    setupFilters(filterButtons);
    setupSearch(searchInput);
}

function updateStatusIndicator(element, isOnline, message) {
    if (!element) return;
    element.className = `backend-status-indicator ${isOnline ? 'status-online' : 'status-offline'}`;
    element.innerHTML = `
        <span class="status-dot"></span>
        <span>${message}</span>
    `;
}

function setupFilters(buttons) {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category').toLowerCase();
            renderMenu();
        });
    });
}

function setupSearch(input) {
    if (!input) return;

    let debounceTimer;
    input.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            currentSearchTerm = e.target.value.trim().toLowerCase();
            renderMenu();
        }, 200);
    });
}

function renderMenu() {
    const gridContainer = document.getElementById('menu-grid');
    if (!gridContainer) return;

    const filtered = allMenuItems.filter(item => {
        // Category match
        const matchesCategory = (currentCategory === 'all') || 
            (item.category && item.category.toLowerCase() === currentCategory);

        // Search match
        const matchesSearch = !currentSearchTerm || 
            item.name.toLowerCase().includes(currentSearchTerm) ||
            item.description.toLowerCase().includes(currentSearchTerm) ||
            item.category.toLowerCase().includes(currentSearchTerm);

        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        gridContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fa-solid fa-mug-hot"></i></div>
                <h3 class="empty-state-title">No Menu Items Found</h3>
                <p class="empty-state-desc">We couldn't find any items matching "<strong>${escapeHtml(currentSearchTerm)}</strong>" in this category.</p>
                <button class="btn btn-primary" onclick="resetMenuFilters()">Clear Search & Filters</button>
            </div>
        `;
        return;
    }

    const fallbackImg = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80';

    gridContainer.innerHTML = filtered.map(item => `
        <article class="menu-card" data-category="${escapeHtml(item.category)}">
            <div class="menu-card-img-wrapper">
                <img 
                    src="${escapeHtml(item.imageUrl || fallbackImg)}" 
                    alt="${escapeHtml(item.name)}" 
                    class="menu-card-img" 
                    loading="lazy"
                    onerror="this.src='${fallbackImg}'"
                >
                <span class="menu-card-category">${escapeHtml(item.category)}</span>
                <span class="menu-card-price-badge">₹${Number(item.price).toFixed(2)}</span>
            </div>
            <div class="menu-card-body">
                <h3 class="menu-card-title">${escapeHtml(item.name)}</h3>
                <p class="menu-card-desc">${escapeHtml(item.description)}</p>
                <div class="menu-card-footer">
                    <span class="badge-available">${item.available ? 'Available Today' : 'Sold Out'}</span>
                    <button class="btn btn-light" style="padding: 7px 18px; font-size: 0.85rem;" onclick="orderNotice('${escapeHtml(item.name)}')">
                        Order in Cafe
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

function resetMenuFilters() {
    const searchInput = document.getElementById('menu-search');
    if (searchInput) searchInput.value = '';
    currentSearchTerm = '';
    currentCategory = 'all';

    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-category').toLowerCase() === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderMenu();
}

function orderNotice(itemName) {
    alert(`${itemName} is freshly prepared to order! Please order at the counter or request our service staff.`);
}

function escapeHtml(text) {
    if (!text) return '';
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.toString().replace(/[&<>"']/g, m => map[m]);
}
