// controllers/paymentController.js
const paymentService = require("../services/paymentService"); // Import the new service

const createPayment = async (req, res) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPayment = async (req, res) => {
  const { id } = req.params;
  const payment = await paymentService.getPaymentById(id);
  if (!payment) return res.status(404).json({ message: "Payment not found" });
  res.json(payment);
};

const updatePayment = async (req, res) => {
  const { id } = req.params;
  const updatedPayment = await paymentService.updatePayment(id, req.body);
  res.json(updatedPayment);
};

const deletePayment = async (req, res) => {
  const { id } = req.params;
  await paymentService.deletePayment(id);
  res.status(204).send();
};

const getAllPayments = async (req, res) => {
  const payments = await paymentService.getAllPayments();
  res.json(payments);
};

module.exports = {
  createPayment,
  getPayment,
  updatePayment,
  deletePayment,
  getAllPayments,
};