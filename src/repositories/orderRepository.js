// services/orderService.js
const { Order } = require('../../models');

const createOrder = async (data) => {
  return await Order.create(data);
};

const getOrderById = async (id) => {
  return await Order.findByPk(id);
};

const updateOrder = async (id, updates) => {
  await Order.update(updates, { where: { id } });
  return getOrderById(id);
};

const deleteOrder = async (id) => {
  return await Order.destroy({ where: { id } });
};

const getAllOrders = async () => {
  return await Order.findAll();
};

module.exports = {
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
  getAllOrders,
};