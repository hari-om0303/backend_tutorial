const fs = require('fs');
const model = require('../models/product');
const mongoose = require('mongoose');
const Product = model.product;

// create
exports.createproduct = (req, res) => {
    const newproduct = new Product(req.body);
    // newproduct.title = 'motoroala';
    // newproduct.price = 25000;
    // newproduct.description = "its motoroala mobile",       
    // newproduct.discountPercentage = 199, 
    // newproduct.rating = 4.5,
    // newproduct.stock = 100,
    // newproduct.brand = "Motoroala",
    //newproduct.category = "Electronics"
    // newproduct.thumbnail = "thumbnail.jpg", 
    newproduct.save()
    res.status(201).json(req.body);
}

exports.getAllproducts = async (req, res) => {
    const newproducts = await Product.find(); // you can add query inside find()
    res.json(newproducts);
}

exports.getsingleprod = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    console.log(product);
    res.json(product);
} 

exports.updateprod = async (req, res) => {
    const id = req.params.id;
  try{
    const doc = await Product.findOneAndReplace({_id:id}, req.body , {new : true});
    res.status(201).json(doc);
  }catch(err){
    console.log(err);
    res.status(400).json(err);
  }
}

exports.updateprod2 = async(req, res) => {
   const id = req.params.id;
  try{
    const doc = await Product.findOneAndUpdate({_id:id}, req.body , {new : true});
    res.status(201).json(doc);
  }catch(err){
    console.log(err);
    res.status(400).json(err);
  }
}

exports.deleteprod = async (req, res) => {
    const id = req.params.id;
  try{
    const doc = await Product.findOneAndDelete({_id:id});
    res.status(201).json(doc);
  }catch(err){
    console.log(err);
    res.status(400).json(err);
  }
}