// services/cartItemService.js
const { CartItem } = require('../../models');

const createCartItem = async (data) => {
  return await CartItem.create(data);
};

const getCartItemById = async (id) => {
  return await CartItem.findByPk(id);
};

const updateCartItem = async (id, updates) => {
  await CartItem.update(updates, { where: { id } });
  return getCartItemById(id);
};

const deleteCartItem = async (id) => {
  return await CartItem.destroy({ where: { id } });
};

const getAllCartItems = async () => {
  return await CartItem.findAll();
};

module.exports = {
  createCartItem,
  getCartItemById,
  updateCartItem,
  deleteCartItem,
  getAllCartItems,
};