# 🛒 SuperMarket Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Java](https://img.shields.io/badge/Language-Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Database](https://img.shields.io/badge/Database-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)

A standalone Java desktop application designed to streamline daily retail store workflows, cashier transactions, billing generation, and inventory tracking.

---

## ✨ Key Features

- 📦 **Inventory Management:** Add, update, view, and remove product stock records in real time.
- 🧾 **Point of Sale & Billing:** Calculate subtotal, taxes, and net totals while generating clear customer receipts.
- 👥 **Role & Cashier Access:** Support dedicated views for store managers and retail clerks.
- 📊 **Transaction Logging:** Persist customer purchases and stock adjustments via a relational database.

---

## 🛠️ Tech Stack

- **Core:** Java (SE)
- **GUI:** Java Swing / AWT
- **Database Connectivity:** JDBC
- **Database:** MySQL

---

## 🚀 Getting Started

### Prerequisites
- Java Development Kit (JDK 8 or higher)
- MySQL Server (or XAMPP/WAMP)

### 1. Clone the Repository
```bash
git clone https://github.com/PuneetShivaay/SuperMarket-Management-System.git
cd SuperMarket-Management-System
```

### 2. Configure the Database
1. Launch MySQL and create a database:
   ```sql
   CREATE DATABASE supermarket_db;
   ```
2. Import the provided schema/tables (if available in the repo).
3. Verify the database credentials (URL, username, and password) in your database connection configuration file.

### 3. Compile and Run
Using standard javac:
```bash
javac -d bin src/*.java
java -cp bin Main
```
*(Or open the folder directly in IntelliJ IDEA, Eclipse, or NetBeans and run the primary application class).*

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
