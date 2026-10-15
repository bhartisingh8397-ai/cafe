# ☕ Sudha Cafe Website — BCA 5th Semester Minor Project

> **A Complete, Modern, Full-Stack Cafe Web Application**  
> Built with HTML5, CSS3, JavaScript, Java 17, Spring Boot 3, Spring Data JPA, and MySQL.

---

## 📋 Table of Contents
1. [Project Overview](#-project-overview)
2. [Technology Stack](#-technology-stack)
3. [System Architecture & Folder Structure](#-system-architecture--folder-structure)
4. [Prerequisites & Software Required](#-prerequisites--software-required)
5. [Database Setup (MySQL)](#-database-setup-mysql)
6. [Backend Setup & Running Instructions](#-backend-setup--running-instructions)
7. [Frontend Setup & Launching Instructions](#-frontend-setup--launching-instructions)
8. [REST API Documentation](#-rest-api-documentation)
9. [Key Features Implemented](#-key-features-implemented)
10. [Troubleshooting & Common Errors](#-troubleshooting--common-errors)
11. [College Viva Voce Q&A Reference](#-college-viva-voce-qa-reference)

---

## 🌟 Project Overview

**Sudha Cafe** is a commercial-grade, full-stack web application designed for an artisan specialty coffee shop. It features an interactive single-page and multi-page experience where users can:
- Explore handcrafted coffees, teas, beverages, snacks, paninis, and desserts with real-time category filtering and live text search.
- View Indian Rupee (₹) pricing and live availability badges.
- Discover cafe heritage, roasting philosophy, and hospitality services.
- Submit real customer inquiries and table reservations, which are strictly validated client-side and server-side, and stored in a MySQL relational database.
- Experience a warm, cozy cafe aesthetic with cream and beige backgrounds, espresso and roasted caramel accents, elegant serif typography, smooth animations, and full mobile responsiveness.

---

## 💻 Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | HTML5 (Semantic), CSS3 (Custom Design System, Flexbox/Grid, Responsive Media Queries), Modern Vanilla JavaScript (ES6+ Fetch API, DOM manipulation) |
| **Backend** | Java 17+, Spring Boot 3.2+, Spring Web (REST Controllers), Spring Data JPA (Hibernate ORM), Jakarta Bean Validation (`@Valid`, `@NotBlank`, etc.) |
| **Database** | MySQL 8.0+ (InnoDB Engine, utf8mb4 charset) with in-memory H2 profile fallback for zero-friction offline viva demo |
| **Build Tool** | Apache Maven 3.9+ / Maven Wrapper |

---

## 📁 System Architecture & Folder Structure

```text
Sudhaa/
├── backend/
│   ├── pom.xml                               # Maven project dependencies and build configuration
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/sudhacafe/
│   │   │   │   ├── SudhaCafeApplication.java # Spring Boot entry point
│   │   │   │   ├── config/
│   │   │   │   │   ├── CorsConfig.java       # Cross-Origin Resource Sharing (CORS) setup
│   │   │   │   │   └── DataLoader.java       # Automatic DB seeder (19+ items if DB is empty)
│   │   │   │   ├── controller/
│   │   │   │   │   ├── MenuController.java   # REST Controller for /api/menu
│   │   │   │   │   └── ContactController.java# REST Controller for /api/contact
│   │   │   │   ├── dto/
│   │   │   │   │   ├── ApiResponse.java      # Standard JSON response envelope
│   │   │   │   │   └── ContactRequest.java   # DTO with Jakarta Bean Validation
│   │   │   │   ├── exception/
│   │   │   │   │   ├── GlobalExceptionHandler.java # Centralized @RestControllerAdvice
│   │   │   │   │   └── ResourceNotFoundException.java
│   │   │   │   ├── model/
│   │   │   │   │   ├── MenuItem.java         # JPA Entity -> menu_items table
│   │   │   │   │   └── ContactMessage.java   # JPA Entity -> contact_messages table
│   │   │   │   ├── repository/
│   │   │   │   │   ├── MenuItemRepository.java # JPA Repository with custom search queries
│   │   │   │   │   └── ContactMessageRepository.java
│   │   │   │   └── service/
│   │   │   │       ├── MenuService.java      # Business logic & transactions
│   │   │   │       └── ContactService.java   # Contact persistence logic
│   │   │   └── resources/
│   │   │       ├── application.properties    # MySQL configuration with environment variable support
│   │   │       ├── application-h2.properties # Offline fallback profile for viva demo
│   │   │       ├── schema.sql                # MySQL DDL table creation script
│   │   │       └── data.sql                  # Initial menu seed INSERT script
├── frontend/
│   ├── index.html                            # Home page (Hero, Featured, Why Us, Offers, Testimonials, CTA)
│   ├── about.html                            # About Us page (Story, Mission, Vision, Pillars)
│   ├── menu.html                             # Interactive Menu (Category filters, live search, API fetch)
│   ├── services.html                         # Services page (Dine-in, Takeaway, Beverages, Gatherings)
│   ├── contact.html                          # Contact page (Validated Form, Info Cards, Google Map embed)
│   ├── 404.html                              # Custom 404 Not Found page
│   ├── css/
│   │   ├── style.css                         # Design system, color tokens, cards, typography, animations
│   │   └── responsive.css                    # Responsive layouts for desktop, tablet, and mobile
│   └── js/
│       ├── main.js                           # Sticky navbar, mobile hamburger drawer, image fallbacks
│       ├── menu.js                           # Live menu API fetching, category filtering, search logic
│       └── contact.js                        # Form validation, POST request handling, feedback banners
├── .gitignore
└── README.md
```

---

## 🛠️ Prerequisites & Software Required

To run and demonstrate this project on any system, ensure the following are installed:
1. **Java Development Kit (JDK 17 or higher)**
   - Check with: `java -version`
2. **MySQL Server 8.0+**
   - Check with: `mysql --version`
3. **Apache Maven 3.9+** (Installed at `C:\Users\bharti\apache-maven-3.9.16\bin\mvn.cmd` or available via Maven Wrapper)
4. **Any Modern Web Browser** (Google Chrome, Microsoft Edge, Firefox)
5. **VS Code or IntelliJ IDEA** (Recommended for demonstration)

---

## 🗄️ Database Setup (MySQL)

### Method 1: Using MySQL Command Line or MySQL Workbench
Open MySQL Command Line Client or Workbench, connect as `root`, and execute:

```sql
CREATE DATABASE IF NOT EXISTS sudha_cafe
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE sudha_cafe;
```

Run the provided [`backend/src/main/resources/schema.sql`](file:///c:/Users/bharti/Desktop/Sudhaa/backend/src/main/resources/schema.sql) and [`backend/src/main/resources/data.sql`](file:///c:/Users/bharti/Desktop/Sudhaa/backend/src/main/resources/data.sql) scripts, or execute:

```bash
mysql -u root -p sudha_cafe < backend/src/main/resources/schema.sql
mysql -u root -p sudha_cafe < backend/src/main/resources/data.sql
```

*(Note: Spring Boot's JPA will also automatically create or update the required tables and the built-in `DataLoader.java` seeds all 19+ menu items automatically on initial startup if the database is blank).*

### Database Connection Configuration
Database credentials can be passed securely using environment variables without modifying code:
- `DB_HOST`: Database host (default: `localhost`)
- `DB_PORT`: Port (default: `3306`)
- `DB_NAME`: Database name (default: `sudha_cafe`)
- `DB_USERNAME`: Database user (default: `root`)
- `DB_PASSWORD`: Your MySQL root password (e.g. `set DB_PASSWORD=your_password`)

Alternatively, update your password directly in [`backend/src/main/resources/application.properties`](file:///c:/Users/bharti/Desktop/Sudhaa/backend/src/main/resources/application.properties).

---

## 🚀 Backend Setup & Running Instructions

### Option A: Standard Run with MySQL (Production Mode)
1. Open PowerShell / Command Prompt and navigate to the `backend` folder:
   ```powershell
   cd backend
   ```
2. Set your MySQL password (if any) in the environment:
   ```powershell
   $env:DB_PASSWORD="your_password"
   ```
3. Run the Spring Boot application using Maven:
   ```powershell
   & "C:\Users\bharti\apache-maven-3.9.16\bin\mvn.cmd" spring-boot:run
   ```
   *(Or if Maven is on your system PATH: `mvn spring-boot:run`)*

4. The backend server starts up on port **8080**:
   ```text
   ☕ Sudha Cafe Backend Server is Running!
   Access REST API at: http://localhost:8080/api
   Menu endpoint:      http://localhost:8080/api/menu
   ```

### Option B: Instant In-Memory H2 Profile (Zero-Friction Viva Demo)
If MySQL is not installed or configured on the examination computer, you can run the backend seamlessly with zero external configuration using the built-in H2 profile:
```powershell
& "C:\Users\bharti\apache-maven-3.9.16\bin\mvn.cmd" spring-boot:run -Dspring-boot.run.profiles=h2
```
This launches the application instantly with the embedded in-memory database and populates all menu items automatically!

---

## 🌐 Frontend Setup & Launching Instructions

The frontend is built using standard HTML5, CSS3, and JavaScript, meaning **no build steps or npm installations are required**.

### How to Open:
1. Navigate to the `frontend/` directory.
2. Double-click [`index.html`](file:///c:/Users/bharti/Desktop/Sudhaa/frontend/index.html) to open directly in Google Chrome or Microsoft Edge.
3. Or launch using VS Code's **Live Server** extension (right-click `index.html` -> "Open with Live Server" at `http://127.0.0.1:5500/frontend/index.html`).
4. Or launch with Python's built-in local server:
   ```powershell
   cd frontend
   python -m http.server 3000
   ```
   Then open `http://localhost:3000` in your browser.

> **Offline Fallback Grace:** If the backend is not yet started, the frontend will automatically display a friendly banner: *"Live Backend Offline — Showing Demonstration Menu Data"* and continue to render all 19+ menu items, categories, and search without crashing!

---

## 📡 REST API Documentation

Base URL: `http://localhost:8080/api`

| Method | Endpoint | Description | Request Body | Response Status |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/api/menu` | Retrieve all available menu items | None | `200 OK` |
| **GET** | `/api/menu/{id}` | Retrieve specific item by Primary Key ID | None | `200 OK` / `404 Not Found` |
| **GET** | `/api/menu/category/{category}` | Filter items by category (Coffee, Tea, etc.) | None | `200 OK` |
| **GET** | `/api/menu/search?query=latte` | Search items by keyword in name/description | None | `200 OK` |
| **POST** | `/api/contact` | Validate and store customer enquiry in MySQL | JSON: `{ "name", "email", "subject", "message" }` | `201 Created` / `400 Bad Request` |
| **GET** | `/api/contact` | Retrieve all customer enquiries (Admin/Viva) | None | `200 OK` |

### Sample POST `/api/contact` Payload:
```json
{
  "name": "Ananya Sharma",
  "email": "ananya@example.com",
  "subject": "Table Reservation for 4 People",
  "message": "Hello, I would like to reserve a quiet corner table this Saturday at 5 PM for our college project meeting."
}
```

### Sample Response:
```json
{
  "success": true,
  "message": "Thank you! Your message has been received. Our team will contact you soon.",
  "data": {
    "id": 1,
    "customerName": "Ananya Sharma",
    "email": "ananya@example.com",
    "subject": "Table Reservation for 4 People",
    "message": "Hello, I would like to reserve a quiet corner table...",
    "createdAt": "2026-10-14T19:30:00"
  },
  "timestamp": "2026-10-14T19:30:00.123"
}
```

---

## ✨ Key Features Implemented

1. **Warm Cream & Espresso Design System**: Custom HSL-inspired palette, Playfair Display serif headings, Outfit sans-serif body, soft drop shadows, and subtle entrance animations.
2. **Sticky Glassmorphic Navigation Bar**: Stays fixed with backdrop-filter blur, brand logo, responsive mobile drawer, and active page detection.
3. **Interactive Menu Filtering**:
   - Filter pills for All, Coffee, Tea, Cold Beverages, Snacks, Sandwiches, and Desserts.
   - Real-time debounced search bar.
   - Empty state illustration with "Reset Filters" action.
4. **Resilient Data Architecture**:
   - Fetches live records from Spring Boot REST API.
   - Graceful offline fallback if MySQL/Backend is offline.
5. **Customer Enquiry Form**:
   - Dual-tier validation: regex-based client-side checks and Jakarta Bean Validation on the server.
   - Real-time error hints with alert banners and button loading spinner.
   - LocalStorage offline safety net.
6. **Accessibility & SEO**:
   - Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`).
   - Open Graph tags, descriptive alt text, and SVG favicon.

---

## ❓ Troubleshooting & Common Errors

1. **`CommunicationsException: Communications link failure`**
   - **Reason**: MySQL service is stopped or port 3306 is blocked.
   - **Fix**: Open Windows Services (`services.msc`), find `MYSQL80`, and click **Start**. Or run the app using `-Dspring-boot.run.profiles=h2`.

2. **`Access denied for user 'root'@'localhost'`**
   - **Reason**: Incorrect MySQL password in `application.properties`.
   - **Fix**: Update `spring.datasource.password=your_actual_password` or run `set DB_PASSWORD=your_password` in terminal before launching.

3. **`CORS policy: No 'Access-Control-Allow-Origin' header`**
   - **Reason**: Cross-Origin browser security blocking frontend requests.
   - **Fix**: Handled by `CorsConfig.java` in the backend, which permits all HTTP methods and origins for local development.

---

## 🎓 College Viva Voce Q&A Reference

### Q1: What is the architectural pattern used in this project?
> **Answer**: This project follows the **Model-View-Controller (MVC)** and **Layered Architecture** pattern. The backend is separated into:
> - **Entity / Model Layer** (`MenuItem`, `ContactMessage` mapped via Hibernate to MySQL)
> - **Repository Layer** (Spring Data JPA interfaces extending `JpaRepository`)
> - **Service Layer** (Encapsulating business logic and transaction boundaries)
> - **Controller Layer** (`@RestController` exposing REST endpoints returning JSON)
> - **View Layer** (Clean client-side HTML5/CSS3/JavaScript frontend consuming REST APIs)

### Q2: How does Spring Data JPA simplify database operations?
> **Answer**: Spring Data JPA eliminates boilerplate JDBC code (such as `DriverManager`, `PreparedStatement`, `ResultSet`, and manual SQL queries). By extending `JpaRepository<T, ID>`, standard CRUD methods (`save`, `findById`, `findAll`, `delete`) and custom query methods (like `findByCategoryIgnoreCase`) are generated automatically by Spring Data JPA at runtime.

### Q3: Why is DTO (Data Transfer Object) used for Contact Form submissions?
> **Answer**: `ContactRequest` separates the incoming HTTP request payload from the internal database entity (`ContactMessage`). This prevents over-posting attacks, allows strict Jakarta validation (`@NotBlank`, `@Email`, `@Size`), and keeps the database entity clean.

### Q4: How is security handled for database credentials?
> **Answer**: Database credentials are not exposed to the browser. The frontend interacts strictly with REST endpoints over HTTP. Sensitive credentials use environment variables (`${DB_PASSWORD:}`) in `application.properties`, preventing accidental exposure in public repositories.
