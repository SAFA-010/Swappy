// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  desiredSwap: { type: String, required: true }, // The item this product is looking for in exchange
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
