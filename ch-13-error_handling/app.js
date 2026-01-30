const express = require('express');
const ExpressError = require('./ExpressError');
const app = express();

const checkToken = (req , res ,next)=>{
    let {token} = req.query;
    if(token === 'giveaccess'){
       next();
    }
    throw new ExpressError(401 , "Access Denied");
}

app.get('/', (req , res)=>{
    res.send('Hello World');
})

app.get('/err', (req ,res)=>{
    abcd = abcd;
})

app.get('/admin' , (req,res,next)=>{
       throw new ExpressError(403 , "access to admin is forbidden");
})

app.get('/api' , checkToken , (req , res)=>{
    res.send('Welcome to the API');
});

// // error as object
// app.use((err ,req,res ,next)=>{
//     let {status = 404 , message = 'Not Found'} = err || {};
//     res.status(status).json({message});
// })

// as custom error class
app.use((err ,req,res ,next)=>{
    let {status , message} = err;
    res.status(status).send({message});
})
    
app.listen(3000 , ()=>{
    console.log('Server is running on port 3000');
})