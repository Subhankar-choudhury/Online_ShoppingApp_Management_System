const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config({ path: './db.env' });

const router = express.Router();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Get all products
router.get('/api/products', async (req, res) => {
  try {
    const [products] = await db.query(`
      SELECT p.*, c.name as category_name 
      FROM product p 
      LEFT JOIN category c ON p.category_id = c.category_id
    `);
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get single product
router.get('/api/products/:id', async (req, res) => {
  try {
    const [products] = await db.query(`
      SELECT p.*, c.name as category_name 
      FROM product p 
      LEFT JOIN category c ON p.category_id = c.category_id
      WHERE p.product_id = ?
    `, [req.params.id]);
    
    if (products.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(products[0]);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Create new product
router.post('/api/products', async (req, res) => {
  const { name, price, description, image, category, stock, SKU } = req.body;
  
  if (!name || !price || !description || !category || !stock || !SKU) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // First get category_id
    const [categories] = await db.query('SELECT category_id FROM category WHERE name = ?', [category]);
    if (categories.length === 0) {
      return res.status(400).json({ message: 'Invalid category' });
    }
    const category_id = categories[0].category_id;

    // Insert new product
    const [result] = await db.query(
      'INSERT INTO product (SKU, description, price, stock, category_id) VALUES (?, ?, ?, ?, ?)',
      [SKU, description, price, stock, category_id]
    );

    res.status(201).json({
      id: result.insertId,
      message: 'Product created successfully'
    });
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Update product
router.put('/api/products/:id', async (req, res) => {
  const { name, price, description, image, category, stock, SKU } = req.body;
  
  if (!name || !price || !description || !category || !stock || !SKU) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Get category_id
    const [categories] = await db.query('SELECT category_id FROM category WHERE name = ?', [category]);
    if (categories.length === 0) {
      return res.status(400).json({ message: 'Invalid category' });
    }
    const category_id = categories[0].category_id;

    // Update product
    await db.query(
      'UPDATE product SET SKU = ?, description = ?, price = ?, stock = ?, category_id = ? WHERE product_id = ?',
      [SKU, description, price, stock, category_id, req.params.id]
    );

    res.json({ message: 'Product updated successfully' });
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Delete product
router.delete('/api/products/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM product WHERE product_id = ?', [req.params.id]);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router; 