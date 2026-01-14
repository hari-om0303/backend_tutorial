const express = require('express');

const userController = require('../controller/users');

const router = express.Router();

// // through router , now these routers are independent to each other
router
    .post('/', userController.createproduct)
    .get('/', userController.getAllproducts)
    .get('/:id', userController.getsingleprod)
    .put('/:id', userController.updateprod)
    .patch('/:id', userController.updateprod2)
    .delete('/:id', userController.deleteprod)


exports.router = router;    