const orderRepo = require('../repositories/orderRepository');

const createOrder = async (data) => {
  return await orderRepo.create(data);
};

const getOrderById = async (id) => {
  return await orderRepo.findById(id);
};

const updateOrder = async (id, updates) => {
  return await orderRepo.updateById(id, updates);
};

const deleteOrder = async (id) => {
  return await orderRepo.deleteById(id);
};

const getAllOrders = async () => {
  return await orderRepo.findAll();
};

module.exports = {
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
  getAllOrders,
};
