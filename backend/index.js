const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

/* Sample Data */
let stores = [
  { id: 1, name: "Zudio" },
  { id: 2, name: "Westside" },
  { id: 3, name: "Zara" },
  { id: 4, name: "H&M" }
];

let products = {
  "8901234567890": { name: "Cotton T-Shirt", price: 499 },
  "8901234567891": { name: "Denim Jeans", price: 1299 }
};

/* APIs */

// Get stores
app.get('/api/stores', (req, res) => {
  res.json(stores);
});

// Get product by barcode
app.get('/api/products/:barcode', (req, res) => {
  const product = products[req.params.barcode];
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
});

// Dummy payment
app.post('/api/payment', (req, res) => {
  res.json({ success: true, receiptId: "RECEIPT12345" });
});

// Staff login
app.post('/api/staff/login', (req, res) => {
  res.json({ success: true });
});

// Admin login
app.post('/api/admin/login', (req, res) => {
  res.json({ success: true });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
