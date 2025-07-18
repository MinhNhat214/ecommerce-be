// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController'); // Import the new controller

// Define routes for payments
router.get('/', paymentController.getAllPayments);

router.get('/:id', paymentController.getPayment);

router.post('/', paymentController.createPayment);

router.put('/:id', paymentController.updatePayment);

router.delete('/:id', paymentController.deletePayment);

module.exports = router;