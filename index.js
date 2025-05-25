const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './db.env' });

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

const authRoutes = require('./auth');
const productRoutes = require('./products');

app.use(authRoutes);
app.use(productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
