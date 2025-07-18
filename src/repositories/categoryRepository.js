const { Category } = require('../../models');

const createCategory = async (data) => {
  return await Category.create(data);
};

const getCategoryById = async (id) => {
  return await Category.findByPk(id);
};

const updateCategory = async (id, updates) => {
  await Category.update(updates, { where: { id } });
  return getCategoryById(id);
};

const deleteCategory = async (id) => {
  return await Category.destroy({ where: { id } });
};

const getAllCategories = async () => {
  return await Category.findAll();
};

module.exports = {
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getAllCategories,
};
