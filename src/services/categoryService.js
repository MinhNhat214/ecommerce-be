const categoryRepo = require('../repositories/categoryRepository');

const createCategory = async (data) => {
  return await categoryRepo.create(data);
};

const getCategoryById = async (id) => {
  return await categoryRepo.findById(id);
};

const updateCategory = async (id, updates) => {
  return await categoryRepo.updateById(id, updates);
};

const deleteCategory = async (id) => {
  return await categoryRepo.deleteById(id);
};

const getAllCategories = async () => {
  return await categoryRepo.findAll();
};

module.exports = {
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getAllCategories,
};
