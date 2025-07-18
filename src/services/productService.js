const productRepo = require('../repositories/productRepository');

const createProduct = async (data) => {
  return await productRepo.create(data);
};

const getProductById = async (id) => {
  return await productRepo.findById(id);
};

const updateProduct = async (id, updates) => {
  return await productRepo.updateById(id, updates);
};

const deleteProduct = async (id) => {
  return await productRepo.deleteById(id);
};

const getAllProducts = async () => {
  return await productRepo.findAll();
};

module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProducts,
};
