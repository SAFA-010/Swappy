// backend/product.js
const express = require('express');
const Product = require('../models/product'); // Import the Product model from the models folder
const router = express.Router();

// Add product
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Find match
router.get('/match/:item', async (req, res) => {
  const { item } = req.params;
  const matches = await Product.find({ desiredSwap: item });
  res.json(matches);
});

module.exports = router;
