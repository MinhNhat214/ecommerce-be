// routes/orderItemRoutes.js
const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController'); // Import the new controller

// Define routes for order items
router.get('/', orderItemController.getAllOrderItems);

router.get('/:id', orderItemController.getOrderItem);

router.post('/', orderItemController.createOrderItem);

router.put('/:id', orderItemController.updateOrderItem);

router.delete('/:id', orderItemController.deleteOrderItem);

module.exports = router;