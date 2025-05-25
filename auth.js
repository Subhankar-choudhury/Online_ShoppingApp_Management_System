const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
require('dotenv').config({ path: './db.env' });

const router = express.Router();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Registration endpoint
router.post('/api/register', async (req, res) => {
  const { name, email, password, address, mobile, usertype } = req.body;
  console.log('Register attempt:', { name, email, password, address, mobile, usertype });
  if (!name || !email || !password || !usertype) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    // Check if user already exists
    const [rows] = await db.query('SELECT * FROM customer WHERE email = ?', [email]);
    if (rows.length > 0) {
      return res.status(409).json({ message: 'User already exists' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert user
    await db
      .query(
        'INSERT INTO customer (first_name, last_name, email, password, address, phone_number, usertype) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, '', email, hashedPassword, address, mobile, usertype]
      );
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Login endpoint
router.post('/api/login', async (req, res) => {
  const { email, password, userType } = req.body;
  if (!email || !password || !userType) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const [rows] = await db.query('SELECT * FROM customer WHERE email = ? AND usertype = ?', [email, userType]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ email: user.email, name: user.first_name, usertype: user.usertype });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;