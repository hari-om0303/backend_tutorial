const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const fs = require('fs');
const privateKey = fs.readFileSync('D:\\ASM\\nodejs_expressjs_mongodb_coderdost\\ch-11-Auth-using-JWT\\private.key', 'utf8');    


exports.createUser = async (req,res)=>{
    try{
        const user = new User(req.body);
        // const token = jwt.sign({email:req.body.email}, 'shhhh', {algorithm : 'RS256'}); // normal method of secrete key 
        const token = jwt.sign({email:req.body.email}, privateKey, {algorithm : 'RS256'}); //using private key
        user.token = token;
        
        const doc = await user.save();
        res.status(201).json(doc);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}