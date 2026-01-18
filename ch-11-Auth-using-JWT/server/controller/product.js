const Product = require('../models/Product');
const ejs = require('ejs');
const path = require('path');

// view
exports.getAllProductsSSR = async (req, res) => {
  const products = await Product.find();
  ejs.renderFile(path.resolve(__dirname,'../pages/index.ejs'), {products:products}, function(err, str){
    res.send(str);
 });
};

exports.getAddForm = async (req, res) => {
  ejs.renderFile(path.resolve(__dirname,'../pages/add.ejs'), function(err, str){
    res.send(str);
 });
};



exports.createproduct = async (req, res) => {
  try {
    console.log('Incoming product:', req.body);

    const product = new Product({
      ...req.body,
      price: Number(req.body.price),
      discountPercentage: Number(req.body.discountPercentage)
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);

  } catch (error) {
    console.error('SAVE ERROR:', error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.getAllproducts = async (req, res) => {
  try {
    const products = await Product.find(); // 🔥 REAL DATA
    res.json({
      products,
      total: products.length
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.deleteprod = async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  res.json(deleted);
};
