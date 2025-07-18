// controllers/orderItemController.js
const orderItemService = require("../services/orderItemService"); // Import the new service

const createOrderItem = async (req, res) => {
  try {
    const orderItem = await orderItemService.createOrderItem(req.body);
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrderItem = async (req, res) => {
  const { id } = req.params;
  const orderItem = await orderItemService.getOrderItemById(id);
  if (!orderItem) return res.status(404).json({ message: "Order item not found" });
  res.json(orderItem);
};

const updateOrderItem = async (req, res) => {
  const { id } = req.params;
  const updatedOrderItem = await orderItemService.updateOrderItem(id, req.body);
  res.json(updatedOrderItem);
};

const deleteOrderItem = async (req, res) => {
  const { id } = req.params;
  await orderItemService.deleteOrderItem(id);
  res.status(204).send();
};

const getAllOrderItems = async (req, res) => {
  const orderItems = await orderItemService.getAllOrderItems();
  res.json(orderItems);
};

module.exports = {
  createOrderItem,
  getOrderItem,
  updateOrderItem,
  deleteOrderItem,
  getAllOrderItems,
};