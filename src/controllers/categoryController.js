const categoryService = require("../services/categoryService");

const createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await categoryService.getcategoryById(id);
  if (!category) return res.status(404).json({ message: "category not found" });
  res.json(category);
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const updatedCategory = await categoryService.updateCategory(id, req.body);
  res.json(updatedCategory);
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  await categoryService.deleteCategory(id);
  res.status(204).send();
};

const getAllCategories = async (req, res) => {
  const category = await categoryService.getAllCategories();
  res.json(category);
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
};
