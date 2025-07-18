const { Product } = require('../../models');

const createProduct = async (data) => {
  return await Product.create(data);
};

const getProductById = async (id) => {
  return await Product.findByPk(id);
};

const updateProduct = async (id, updates) => {
  await Product.update(updates, { where: { id } });
  return getProductById(id);
};

const deleteProduct = async (id) => {
  return await Product.destroy({ where: { id } });
};

const getAllProducts = async () => {
  return await Product.findAll();
};

module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProducts,
};