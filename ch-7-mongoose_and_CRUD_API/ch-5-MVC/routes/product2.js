const express = require('express');

const productController = require('../controller/product');

const router = express.Router();

// // through router , now these routers are independent to each other
router
    .post('/', productController.createproduct)
    .get('/', productController.getAllproducts)
    .get('/:id', productController.getsingleprod)
    .put('/:id', productController.updateprod)
    .patch('/:id', productController.updateprod2)
    .delete('/:id', productController.deleteprod)


exports.router = router;    