const orderService = require("../services/orderService"); // Import the new service

const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrder = async (req, res) => {
  const { id } = req.params;
  const order = await orderService.getOrderById(id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const updatedOrder = await orderService.updateOrder(id, req.body);
  res.json(updatedOrder);
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  await orderService.deleteOrder(id);
  res.status(204).send();
};

const getAllOrders = async (req, res) => {
  const orders = await orderService.getAllOrders();
  res.json(orders);
};

module.exports = {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
};