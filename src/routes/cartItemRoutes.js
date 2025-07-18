const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController'); // Import the new controller

router.get('/', cartItemController.getAllCartItems);

router.get('/:id', cartItemController.getCartItem);

router.post('/', cartItemController.createCartItem);

router.put('/:id', cartItemController.updateCartItem);

router.delete('/:id', cartItemController.deleteCartItem);

module.exports = router;