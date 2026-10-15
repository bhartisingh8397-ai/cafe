package com.sudhacafe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Sudha Cafe - Main Spring Boot Application
 * BCA 5th Semester Minor Project
 * 
 * Provides RESTful APIs for Menu browsing, category filtering,
 * search, and customer contact message handling with JPA and MySQL.
 */
@SpringBootApplication
public class SudhaCafeApplication {

    public static void main(String[] args) {
        SpringApplication.run(SudhaCafeApplication.class, args);
        System.out.println("==================================================");
        System.out.println("  ☕ Sudha Cafe Backend Server is Running!        ");
        System.out.println("  Access REST API at: http://localhost:8080/api   ");
        System.out.println("  Menu endpoint:      http://localhost:8080/api/menu");
        System.out.println("==================================================");
    }
}
