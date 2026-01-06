const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express');
const server = express();

// body parser
server.use(express.json());


// API route to get products
// CRUD (create, read, update, delete) operations
// create API 
server.post('/products' , (req,res)=>{
    console.log(req.body);
    products.push(req.body);
    // res.json({type: 'POST'});
    res.json(req.body);
})

// Read API
server.get('/products' , (req, res)=>{
    res.json(products);
})

server.get('/products/:id', (req,res)=>{
    const id = +req.params.id;
    const product = products.find(p=>p.id === id)
    console.log(product);
    res.json(product);
})

// update API  , update is overwrite the existing data
server.put('/products/:id', (req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(p=>p.id === +id);
    products.splice(productIndex,1, req.body);
    res.status(201).json(req.body);
})

// Patch api , is a type of update but it only updates the specified fields
server.patch('/products/:id',(req, res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(p=>p.id === +id);
    const product = products[productIndex];
    products.splice(productIndex, 1, {...product, ...req.body})
    res.status(201).json();
})

// delete api
server.delete('/products/:id', (req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(p=>p.id === +id);
    const product = products[productIndex];
    products.splice(productIndex);
    res.status(201).json(product);
})


server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})