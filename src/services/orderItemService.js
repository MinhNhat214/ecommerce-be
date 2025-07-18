const orderItemRepo = require('../repositories/orderItemRepository');

const createOrderItem = async (data) => {
  return await orderItemRepo.create(data);
};

const getOrderItemById = async (id) => {
  return await orderItemRepo.findById(id);
};

const updateOrderItem = async (id, updates) => {
  return await orderItemRepo.updateById(id, updates);
};

const deleteOrderItem = async (id) => {
  return await orderItemRepo.deleteById(id);
};

const getAllOrderItems = async () => {
  return await orderItemRepo.findAll();
};

module.exports = {
  createOrderItem,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
  getAllOrderItems,
};
