const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.users;


exports.createproduct = (req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(req.body);
}

exports.getAllproducts =  (req, res)=>{
    res.json(users);
}

exports.getsingleprod = (req,res)=>{
    const id = +req.params.id;
    const product = users.find(p=>p.id === id)
    console.log(product);
    res.json(product);
}

exports.updateprod = (req,res)=>{
    const id = req.params.id;
    const productIndex = users.findIndex(p=>p.id === +id);
    users.splice(productIndex,1, req.body);
    res.status(201).json(req.body);
}

exports.updateprod2 = (req, res)=>{
    const id = req.params.id;
    const productIndex = users.findIndex(p=>p.id === +id);
    const product = users[productIndex];
    users.splice(productIndex, 1, {...product, ...req.body})
    res.status(201).json();
} 

exports.deleteprod = (req,res)=>{
    const id = req.params.id;
    const productIndex = users.findIndex(p=>p.id === +id);
    const product = users[productIndex];
    users.splice(productIndex);
    res.status(201).json(product);
}