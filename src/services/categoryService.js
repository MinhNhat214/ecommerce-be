// const { Category } = require('../../models');

// const createCategory = async (data) => {
//   return await Category.create(data);
// };

// const getCategoryById = async (id) => {
//   return await Category.findByPk(id);
// };

// const updateCategory = async (id, updates) => {
//   await Category.update(updates, { where: { id } });
//   return getCategoryById(id);
// };

// const deleteCategory = async (id) => {
//   return await Category.destroy({ where: { id } });
// };

// const getAllCategories = async () => {
//   return await Category.findAll();
// };

// module.exports = {
//   createCategory,
//   getCategoryById,
//   updateCategory,
//   deleteCategory,
//   getAllCategories,
// };


const categoryRepository = require('../repositories/categoryRepository');

  const getAllCategories = async () => {
    return await categoryRepository.getAllCategories();
  }

  const getCategoryById = async (id) => {
    const category = await categoryRepository.getCategoryById(id);
    if (!category) {
      throw new Error('Danh mục không tồn tại');
    }
    return category;
  }

  const createCategory = async (data) => {
    return await categoryRepository.createCategory(data);
  }

  const updateCategory = async (id, updates) => {
    const category = await categoryRepository.getCategoryById(id);
    if (!category) {
      throw new Error('Danh mục không tồn tại');
    }
    return await categoryRepository.updateCategory(id, updates);
  }

  const deleteCategory = async (id) => {
    const category = await categoryRepository.getCategoryById(id);
    if (!category) {
      throw new Error('Danh mục không tồn tại');
    }
    return await categoryRepository.deleteCategory(id);
  }

module.exports = {
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getAllCategories,
};