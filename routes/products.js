const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

// ivory.com/products
router.get('/', productController.getAllProducts);


router.get('/product', productController.getProduct);


// ivory.com/products/10
// router.get('/:productId', productController.getProduct);




module.exports = router;