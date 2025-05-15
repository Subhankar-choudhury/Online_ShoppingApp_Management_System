-- use onlineshopping;
-- show tables;
-- SELECT * FROM cart;
-- SELECT * FROM category;
-- SELECT * FROM customer;
-- SELECT * FROM order_item;
-- SELECT * FROM order_view;
-- SELECT * FROM orders;
-- SELECT * FROM payment;
-- SELECT * FROM paymentlog;
-- SELECT * FROM product;
-- SELECT * FROM product_supplier;
-- SELECT * FROM shipment;
-- SELECT * FROM shoppingrecords;
-- SELECT * FROM supplier;
-- SELECT * FROM unnormalized_customer;
-- SELECT * FROM wishlist;
-- INSERT INTO cart (cart_id, quantity, customer_id, product_id) VALUES
-- (1, 2, 2, 2),
-- (2, 1, 4, 1),
-- (3, 2, 5, 3);
-- INSERT INTO category (category_id, name) VALUES
-- (1, 'Electronics'),
-- (2, 'Clothing'),
-- (3, 'Books');
-- INSERT INTO customer (customer_id, first_name, last_name, email, password, address, phone_number) VALUES
-- (1, 'Amit', 'Sharma', 'amit.sharma1@example.com', 'password123', 'Delhi, India', '9876543210'),
-- (2, 'Priya', 'Verma', 'priya.verma1@example.com', 'securepass', 'Mumbai, India', '8765432109'),
-- (3, 'Rahul', 'Gupta', 'rahul.gupta1@example.com', 'mypassword', 'Bangalore, India', '7654321098'),
-- (4, 'Neha', 'Rao', 'neha.rao@example.com', 'neha123', 'Chennai, India', '9541236780'),
-- (5, 'Sameer', 'Khan', 'sameer.khan@example.com', 'skhan456', 'Hyderabad, India', '9932165478');
-- INSERT INTO order_item (order_item_id, quantity, price, order_id, product_id) VALUES
-- (1, 1, 15000.0, 1, 1),
-- (2, 1, 3000.0, 4, 4),
-- (3, 1, 1200.0, 5, 5),
-- (4, 1, 1000.0, 5, 2);
-- INSERT INTO order_view (order_id, order_date, total_price) VALUES
-- (2, '2025-03-26 14:30:00', 7500.0),
-- (3, '2025-03-27 10:15:00', 12000.0),
-- (4, '2025-04-01 10:30:00', 18000.0),
-- (5, '2025-04-02 16:00:00', 2200.0),
-- (7, '2025-04-30 22:01:54', 18000.0);
-- INSERT INTO orders (order_id, order_date, total_price, customer_id, shipment_id, Order_Status) VALUES
-- (1, '2025-03-25 12:00:00', 15300.0, 1, 1, NULL),
-- (2, '2025-03-26 14:30:00', 7500.0, 2, 2, NULL),
-- (3, '2025-03-27 10:15:00', 12000.0, 1, 3, NULL),
-- (4, '2025-04-01 10:30:00', 18000.0, 4, 4, NULL),
-- (5, '2025-04-02 16:00:00', 2200.0, 5, 5, NULL),
-- (7, '2025-04-30 22:01:54', 18000.0, 2, 3, NULL);
-- INSERT INTO payment (payment_id, payment_date, payment_method, amount, customer_id, order_id) VALUES
-- (1, '2025-03-25 12:30:00', 'Credit Card', 15300.0, 1, 1),
-- (2, '2025-04-09 00:24:49', 'UPI', 900000.0, 2, NULL),
-- (4, '2025-04-02 16:15:00', 'Credit Card', 2200.0, 5, 5),
-- (6, '2025-04-30 22:01:54', 'Credit Card', 18000.0, 2, 7);
-- INSERT INTO paymentlog (log_id, customer_id, payment_method, amount, log_time) VALUES
-- (1, 2, 'UPI', 900000.00, '2025-04-09 00:24:49');
INSERT INTO product (product_id, SKU, description, price, stock, category_id, image) VALUES
(1, 'ELEC123', 'Smartphone', 15000.0, 10, 1, 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
(2, 'CLO456', 'T-Shirt', 500.0, 20, 2, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
(3, 'BOOK789', 'Fiction Novel', 300.0, 15, 3, 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
(4, 'ELEC999', 'Wireless Earbuds', 3000.0, 25, 1, 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
(5, 'BOOK102', 'Science Textbook', 1200.0, 10, 3, 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
-- INSERT INTO shipment (shipment_id, shipment_date, address, city, state, country, zip_code) VALUES
-- (1, '2025-03-25 10:00:00', 'Sector 21', 'Noida', 'Uttar Pradesh', 'India', 201301),
-- (2, '2025-03-26 09:00:00', 'Sector 25', 'Delhi', 'Delhi', 'India', 110001),
-- (3, '2025-03-27 11:00:00', 'MG Road', 'Bangalore', 'Karnataka', 'India', 560001),
-- (4, '2025-04-01 09:45:00', 'Anna Nagar', 'Chennai', 'Tamil Nadu', 'India', 600040),
-- (5, '2025-04-02 15:30:00', 'Banjara Hills', 'Hyderabad', 'Telangana', 'India', 500034);
-- INSERT INTO shoppingrecords (Record_ID, Order_ID, Customer_Name, Product_Description, Quantity, Payment_Method, Amount) VALUES
-- (1, 1, 'Amit Sharma', 'Smartphone', 1, 'Credit Card', 15300.00),
-- (2, 5, 'Sameer Khan', 'Science Textbook', 1, 'Credit Card', 2200.00),
-- (3, 5, 'Sameer Khan', 'T-Shirt', 1, 'Credit Card', 2200.00),
-- (4, 6, 'Rahul Verma', 'Laptop', 1, 'Net Banking', 48000.00),
-- (5, 7, 'Sneha Patel', 'Running Shoes', 2, 'Debit Card', 3500.00),
-- (6, 8, 'Anjali Mehra', 'Kitchen Set', 1, 'Credit Card', 7200.00),
-- (7, 9, 'Karan Malhotra', 'Bluetooth Speaker', 1, 'UPI', 1800.00),
-- (8, 10, 'Sara Ali', 'Novel - Fiction', 3, 'Credit Card', 1500.00);
-- INSERT INTO wishlist (wishlist_id, customer_id) VALUES
-- (1, 3);
-- INSERT INTO supplier (supplier_id, name, contact_email) VALUES
-- (1, 'Tech Distributors', 'contact@techdistributors.com'),
-- (2, 'Fashion Hub', 'support@fashionhub.com'),
-- (3, 'Book World', 'info@bookworld.com'),
-- (4, 'Gadget Mart', 'sales@gadgetmart.com'),
-- (5, 'Edu Suppliers', 'contact@edusuppliers.com');

-- INSERT INTO product_supplier (product_id, supplier_id) VALUES
-- (1, 1),
-- (2, 2),
-- (3, 3),
-- (4, 4),
-- (5, 5);

-- INSERT INTO unnormalized_customer (customer_id, name, emails, phones) VALUES
-- (1, 'Amit Sharma', 'amit.sharma1@example.com', '9876543210'),
-- (2, 'Priya Verma', 'priya.verma1@example.com', '8765432109'),
-- (3, 'Rahul Gupta', 'rahul.gupta1@example.com', '7654321098'),
-- (4, 'Neha Rao', 'neha.rao@example.com', '9541236780'),
-- (5, 'Sameer Khan', 'sameer.khan@example.com', '9932165478');


-- DESC cart;
-- DESC category;
-- DESC customer;
-- DESC order_item;
-- DESC order_view;
-- DESC orders;
-- DESC payment;
-- DESC paymentlog;
-- DESC product;
-- DESC product_supplier;
-- DESC shipment;
-- DESC shoppingrecords;
-- DESC supplier;
-- DESC unnormalized_customer;
-- DESC wishlist;

-- CREATE TABLE cart (
--     cart_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     quantity INT NOT NULL,
--     customer_id INT,
--     product_id INT,
--     FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
--     FOREIGN KEY (product_id) REFERENCES product(product_id)
-- );

-- DESCRIBE category;
-- -- OR
-- CREATE TABLE category (
--     category_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL
-- );

-- DESCRIBE customer;
-- -- OR
-- CREATE TABLE customer (
--     customer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(100) NOT NULL,
--     last_name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) NOT NULL UNIQUE,
--     password VARCHAR(100) NOT NULL,
--     address VARCHAR(100),
--     phone_number VARCHAR(100)
-- );

-- DESCRIBE order_item;
-- -- OR
-- CREATE TABLE order_item (
--     order_item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     quantity INT NOT NULL,
--     price DECIMAL(10,1) NOT NULL,
--     order_id INT,
--     product_id INT,
--     FOREIGN KEY (order_id) REFERENCES orders(order_id),
--     FOREIGN KEY (product_id) REFERENCES product(product_id)
-- );

-- DESCRIBE order_view;
-- -- OR
-- CREATE TABLE order_view (
--     order_id INT NOT NULL DEFAULT 0,
--     order_date DATETIME NOT NULL,
--     total_price DECIMAL(10,1) NOT NULL
-- );

-- DESCRIBE orders;
-- -- OR
-- CREATE TABLE orders (
--     order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     order_date DATETIME NOT NULL,
--     total_price DECIMAL(10,1) NOT NULL,
--     customer_id INT,
--     shipment_id INT,
--     Order_Status VARCHAR(50),
--     FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
--     FOREIGN KEY (shipment_id) REFERENCES shipment(shipment_id)
-- );

-- DESCRIBE payment;
-- -- OR
-- CREATE TABLE payment (
--     payment_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     payment_date DATETIME NOT NULL,
--     payment_method VARCHAR(100) NOT NULL,
--     amount DECIMAL(10,1) NOT NULL,
--     customer_id INT,
--     order_id INT,
--     FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
--     FOREIGN KEY (order_id) REFERENCES orders(order_id)
-- );

-- DESCRIBE payment_log;
-- -- OR
-- CREATE TABLE payment_log (
--     log_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     customer_id INT,
--     payment_method VARCHAR(50),
--     amount DECIMAL(10,2),
--     log_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- DESCRIBE product;
-- -- OR
-- CREATE TABLE product (
--     product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     SKU VARCHAR(100) NOT NULL UNIQUE,
--     description VARCHAR(100),
--     price DECIMAL(10,1) NOT NULL,
--     stock INT NOT NULL,
--     category_id INT,
--     FOREIGN KEY (category_id) REFERENCES category(category_id)
-- );

-- DESCRIBE product_supplier;
-- -- OR
-- CREATE TABLE product_supplier (
--     product_id INT NOT NULL,
--     supplier_id INT NOT NULL,
--     PRIMARY KEY (product_id, supplier_id),
--     FOREIGN KEY (product_id) REFERENCES product(product_id),
--     FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id)
-- );

-- DESCRIBE shipment;
-- -- OR
-- CREATE TABLE shipment (
--     shipment_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     shipment_date DATETIME NOT NULL,
--     address VARCHAR(100) NOT NULL,
--     city VARCHAR(100) NOT NULL,
--     state VARCHAR(20) NOT NULL,
--     country VARCHAR(50) NOT NULL,
--     zip_code VARCHAR(10) NOT NULL
-- );

-- DESCRIBE shoppingrecords;
-- -- OR
-- CREATE TABLE shoppingrecords (
--     Record_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     Order_ID INT,
--     Customer_Name VARCHAR(100),
--     Product_Description VARCHAR(255),
--     Quantity INT,
--     Payment_Method VARCHAR(50),
--     Amount DECIMAL(10,2)
-- );

-- DESCRIBE supplier;
-- -- OR
-- CREATE TABLE supplier (
--     supplier_id INT NOT NULL PRIMARY KEY,
--     name VARCHAR(100),
--     contact_email VARCHAR(100)
-- );

-- DESCRIBE supplier;
-- -- OR
-- CREATE TABLE supplier (
--     supplier_id INT NOT NULL PRIMARY KEY,
--     name VARCHAR(100),
--     contact_email VARCHAR(100)
-- );

-- DESCRIBE wishlist;
-- -- OR
-- CREATE TABLE wishlist (
--     wishlist_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     customer_id INT,
--     FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
-- );

ALTER TABLE customer ADD COLUMN usertype VARCHAR(20) DEFAULT 'customer';

INSERT INTO product (SKU, description, price, stock, category_id, image) VALUES
('ELEC123', 'Smartphone', 15000.0, 10, 1, 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
('ELEC999', 'Wireless Earbuds', 3000.0, 25, 1, 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
('CLO456', 'T-Shirt', 500.0, 20, 2, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
('CLO789', 'Jeans', 1200.0, 15, 2, 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
('BOOK789', 'Fiction Novel', 300.0, 15, 3, 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'),
('BOOK102', 'Science Textbook', 1200.0, 10, 3, 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');





