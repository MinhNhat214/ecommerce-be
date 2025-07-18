const cartRepo = require('../repositories/cartRepository');

const createCart = async (data) => {
  return await cartRepo.create(data);
};

const getCartById = async (id) => {
  return await cartRepo.findById(id);
};

const updateCart = async (id, updates) => {
  return await cartRepo.updateById(id, updates);
};

const deleteCart = async (id) => {
  return await cartRepo.deleteById(id);
};

const getAllCarts = async () => {
  return await cartRepo.findAll();
};

module.exports = {
  createCart,
  getCartById,
  updateCart,
  deleteCart,
  getAllCarts,
};
