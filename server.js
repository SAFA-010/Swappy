const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });
//const productRoutes = require('./backend/product');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // Allow frontend requests
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ Debugging: Check if MONGO_URI is being loaded
console.log("🔍 MONGO_URI:", process.env.MONGO_URI);

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Import routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Test API Route
app.get("/", (req, res) => res.send("✅ Product Swapping API is running"));

// Start server
const PORT = process.env.PORT || 5000;
console.log(`🚀 Server running on port ${PORT}`);
