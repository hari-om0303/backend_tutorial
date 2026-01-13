const express = require('express');
const server = express();

// const productRouter = express.Router();
const productRouter = require('./routes/product2');
const userRouter = require('./routes/users2');

// body parser (middle ware)
server.use(express.json());
server.use(express.static('public'));

server.use('/products', productRouter.router);
server.use('/users', userRouter.router);



server.listen(3000, () => {
    console.log('Server is running on port 3000');
})