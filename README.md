
# 🛍️ Shopping App Management System (SAMS)

A **complete full-stack e-commerce solution** designed to streamline online shopping experiences, inventory management, vendor operations, and secure transactions using a modern database-driven approach.

---

## 📌 Project Overview

The **Shopping App Management System (SAMS)** enables customers to browse products, manage their cart, and place orders, while tracking order history and payment logs. It supports secure user authentication, product browsing, and real-time order processing.

Built with:
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express  
- **Database**: MySQL 
---

## ✨ Key Features

### 👥 Customer Features
- Register/login securely
- Browse & search products by category
- Add to cart/wishlist
- Place orders with mock payment
- View order history and invoices

### ⚙️ Backend API
- RESTful endpoints for authentication, product & order management
- Password encryption using bcrypt
- SQL views, triggers, constraints, and recovery mechanisms

---

## 🧱 Database Schema

### 🔹 Tables
- `customer`, `product`, `category`, `orders`, `order_item`, `shipment`, `payment`, `wishlist`, `cart`
- `supplier`, `product_supplier`, `payment_log`, `shoppingrecords`, `unnormalized_customer`

### 🔹 Concepts Implemented
- ✅ Normal Forms: 1NF → BCNF  
- ✅ Constraints: PK, FK, UNIQUE, CHECK, NOT NULL  
- ✅ Triggers: Logging, Restriction of Deletion  
- ✅ Views: Simple, Join, Multi-table (e.g., order summary)  
- ✅ Cursors: For row-by-row operations  
- ✅ Transactions: COMMIT, ROLLBACK, SAVEPOINT  
- ✅ ACID Properties: Ensured via isolation levels & logging

---

## 🖥️ Frontend Overview

### `main.html`
- Customer UI  
- Product listing, filtering, and cart management

### `script.js`
- Handles DOM interactions, form validations, cart updates

### `styles.css`
- Responsive layout, product cards, modals

---

## ⚙️ Backend Setup

### 1. Clone Repository
```bash
git clone https://github.com/your-username/shopping-app-management.git
cd shopping-app-management
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Database

- Import `sdat.sql` in MySQL  
- Add your DB credentials in `.env`

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=shoppingdb
```
#### Sample `.gitignore`
```
node_modules/
.env
*.log
```

### 4. Run Server
```bash
node index.js
```

---

## 📂 Folder Structure
```
📦 project-root/
├── index.js               # Backend entry point
├── auth.js                # Authentication logic
├── products.js            # Product routes
├── package.json           # Node dependencies
├── .env                   # Database credentials
├── sdat.sql               # Full database script
├── main.html              # Frontend (Customer)
├── script.js              # JS logic
├── styles.css             # CSS styles
├── .gitignore             # Git ignore rules
```

---

## 🔍 Sample SQL Features

### View (Join Example)
```sql
CREATE VIEW order_summary AS
SELECT o.order_id, c.first_name, p.description, oi.quantity
FROM orders o
JOIN customer c ON o.customer_id = c.customer_id
JOIN order_item oi ON o.order_id = oi.order_id
JOIN product p ON p.product_id = oi.product_id;
```

### Trigger (Log Product Inserts)
```sql
CREATE TRIGGER log_new_product
AFTER INSERT ON product
FOR EACH ROW
INSERT INTO product_log(product_id, SKU, added_by)
VALUES (NEW.product_id, NEW.SKU, 'SYSTEM');
```

### Transaction Example
```sql
START TRANSACTION;
SAVEPOINT sp1;
UPDATE product SET stock = stock - 1 WHERE product_id = 1;
ROLLBACK TO sp1;
COMMIT;
```

---

## 💡 Future Enhancements

- User authentication UI  
- Add product reviews & ratings  
- Integrate payment gateway (e.g., Razorpay, Stripe)  
- Dashboard analytics

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 👨‍💻 Maintainer

**Subhankar Choudhury**  
📧 [subhankarchoudhury12@gmail.com](mailto:subhankarchoudhury12@gmail.com)

---

> Built with ❤️ for e-commerce innovation!
