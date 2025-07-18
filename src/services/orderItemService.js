// services/orderItemService.js
const { OrderItem } = require('../../models');

const createOrderItem = async (data) => {
  return await OrderItem.create(data);
};

const getOrderItemById = async (id) => {
  return await OrderItem.findByPk(id);
};

const updateOrderItem = async (id, updates) => {
  await OrderItem.update(updates, { where: { id } });
  return getOrderItemById(id);
};

const deleteOrderItem = async (id) => {
  return await OrderItem.destroy({ where: { id } });
};

const getAllOrderItems = async () => {
  return await OrderItem.findAll();
};

module.exports = {
  createOrderItem,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
  getAllOrderItems,
};