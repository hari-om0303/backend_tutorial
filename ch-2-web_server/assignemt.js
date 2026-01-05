// Assignment 2 : In the chapter we developed a server with only URL switch, but you have to make that more efficient by making it check both METHOD (GET,POST) + URL path
// So output of a request with GET /demo will be different from POST /demo 

const express = require('express');

const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

// Get method

server.get('/' , (req, res)=>{
    res.send('Hello World from Express Server');
})

server.get('/student/:id', (req, res)=>{
    res.send(`Student ID is ${req.params.id}`);
    console.log(req.params.id);
    console.log(req.params);

})


// put method
server.put('/item/:id', (req, res)=>{
      const itemid = req.params.id;
      const itemdata = req.body;
    res.json({message: `Item with ID ${itemid} updated successfully`, data: itemdata});
      console.log(`Item ID to be updated: ${itemid} and data:`, itemdata);
})
 


const port = 3000;
server.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})



// Assignment 3 [Challenge] : Try and run 2 different server using the same code you have index.js. You will need to use 2 different ports. But can you do it using the same file and changing PORTS dynamically somehow ?

// server 2 

const app = express();

app.use(express.json());

app.get('/' , (req, res)=>{
    res.send('Hello World from Express Server , it is second server');
})

app.listen(4000 , ()=>{
    console.log('Server running on port 4000');
});