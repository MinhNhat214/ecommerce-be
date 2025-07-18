const cartItemRepo = require('../repositories/cartItemRepository');

const createCartItem = async (data) => {
  return await cartItemRepo.create(data);
};

const getCartItemById = async (id) => {
  return await cartItemRepo.findById(id);
};

const updateCartItem = async (id, updates) => {
  return await cartItemRepo.updateById(id, updates);
};

const deleteCartItem = async (id) => {
  return await cartItemRepo.deleteById(id);
};

const getAllCartItems = async () => {
  return await cartItemRepo.findAll();
};

module.exports = {
  createCartItem,
  getCartItemById,
  updateCartItem,
  deleteCartItem,
  getAllCartItems,
};
