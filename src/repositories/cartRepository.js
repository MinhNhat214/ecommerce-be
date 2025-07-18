// services/cartService.js
const { Cart} = require('../../models');

const createCart = async (data) => {
  return await Cart.create(data);
};

const getCartById = async (id) => {
  return await Cart.findByPk(id);
};

const updateCart = async (id, updates) => {
  await Cart.update(updates, { where: { id } });
  return getCartById(id);
};

const deleteCart = async (id) => {
  return await Cart.destroy({ where: { id } });
};

const getAllCarts = async () => {
  return await Cart.findAll();
};

module.exports = {
  createCart,
  getCartById,
  updateCart,
  deleteCart,
  getAllCarts,
};