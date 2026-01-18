const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const fs = require('fs');
const privateKey = fs.readFileSync('D:\\ASM\\nodejs_expressjs_mongodb_coderdost\\ch-11-Auth-using-JWT\\private.key', 'utf8');    

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

const app = express();

const auth = ((req,res, next)=>{
  const token  = req.get('Authorization').split('Bearer ')[1];
  console.log({token});
// var decoded =  jwt.verify(token , process.env.SECRET_KEY) // normal method of secrete key
 var decoded =  jwt.verify(token , privateKey, {algorithms: ['RS256']}) // using private key
 console.log(decoded);
 if(decoded){
    next();
 }else{
    res.status(401).json({message:"Unauthorized"})
 }
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb+srv://coderdost:en23cs301399@ecommercecluster.b8b0ozm.mongodb.net/?appName=EcommerceCluster')
  .then(() => console.log('DB connected'));


app.use('/auth', authRoutes.router);
app.use('/products', auth, productRoutes);
app.use('/users', auth, userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
   