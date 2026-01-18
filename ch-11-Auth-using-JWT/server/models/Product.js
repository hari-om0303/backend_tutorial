const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: String,
  brand: String,
  thumbnail: String,
  discountPercentage: Number,
  rating: Number,
  stock: Number
});

module.exports = mongoose.model('Product', productSchema);
