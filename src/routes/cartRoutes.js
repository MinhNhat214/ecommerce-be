// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController'); // Import the new controller

// Define routes for carts
router.get('/', cartController.getAllCarts);

router.get('/:id', cartController.getCart);

router.post('/', cartController.createCart);

router.put('/:id', cartController.updateCart);

router.delete('/:id', cartController.deleteCart);

// router.post('/', cartController.createCart);

module.exports = router;