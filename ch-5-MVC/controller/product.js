const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


exports.createproduct = (req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
}

exports.getAllproducts =  (req, res)=>{
    res.json(products);
}

exports.getsingleprod = (req,res)=>{
    const id = +req.params.id;
    const product = products.find(p=>p.id === id)
    console.log(product);
    res.json(product);
}

exports.updateprod = (req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(p=>p.id === +id);
    products.splice(productIndex,1, req.body);
    res.status(201).json(req.body);
}

exports.updateprod2 = (req, res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(p=>p.id === +id);
    const product = products[productIndex];
    products.splice(productIndex, 1, {...product, ...req.body})
    res.status(201).json();
} 

exports.deleteprod = (req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(p=>p.id === +id);
    const product = products[productIndex];
    products.splice(productIndex);
    res.status(201).json(product);
}