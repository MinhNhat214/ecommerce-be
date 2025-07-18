const { ProductImage } = require('../../models');

const createProductImage = async (data) => {
  return await ProductImage.create(data);
};

const getProductImageById = async (id) => {
  return await ProductImage.findByPk(id);
};

const updateProductImage = async (id, updates) => {
  await ProductImage.update(updates, { where: { id } });
  return getProductImageById(id);
};

const deleteProductImage = async (id) => {
  return await ProductImage.destroy({ where: { id } });
};

const getAllProductImages = async () => {
  return await ProductImage.findAll();
};

module.exports = {
  createProductImage,
  getProductImageById,
    updateProductImage,
  deleteProductImage,
  getAllProductImages,
};