const productImageRepo = require('../repositories/productImageRepository');

const createProductImage = async (data) => {
  return await productImageRepo.create(data);
};

const getProductImageById = async (id) => {
  return await productImageRepo.findById(id);
};

const updateProductImage = async (id, updates) => {
  return await productImageRepo.updateById(id, updates);
};

const deleteProductImage = async (id) => {
  return await productImageRepo.deleteById(id);
};

const getAllProductImages = async () => {
  return await productImageRepo.findAll();
};

module.exports = {
  createProductImage,
  getProductImageById,
  updateProductImage,
  deleteProductImage,
  getAllProductImages,
};
