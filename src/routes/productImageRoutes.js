// routes/productImageRoutes.js
const express = require('express');
const router = express.Router();
const productImageController = require('../controllers/productImageController'); // Import the new controller

// Define routes for product images
router.get('/', productImageController.getAllProductImages);

router.get('/:id', productImageController.getProductImage);

router.post('/', productImageController.createProductImage);

router.put('/:id', productImageController.updateProductImage);

router.delete('/:id', productImageController.deleteProductImage);

module.exports = router;