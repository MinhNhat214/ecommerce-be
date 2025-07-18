const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); 
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/', productController.getAllProducts); 

router.get('/:id', productController.getProduct); 

router.post('/', authMiddleware, productController.createProduct); 

router.put('/:id', productController.updateProduct); 

router.delete('/:id', productController.deleteProduct); 

module.exports = router;