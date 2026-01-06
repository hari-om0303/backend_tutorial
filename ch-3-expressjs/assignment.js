const express = require('express');
const server = express();

// // assignment 1
// server.get('/demo', (req , res)=>{
//     const name = req.query.name;
//     const age = req.query.age;
//     const subject = req.query.subject;
//     console.log(req.query);
//     res.send(req.query);
// })

// assignment 2
server.get('/demo/:name/:age/:subject', (req , res)=>{
    const msg = req.params;
    console.log(msg);
    res.json(msg);
})






server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})

