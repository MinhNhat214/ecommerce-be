const productService = require("../services/productService"); // Changed to productService

const createProduct = async (req, res) => {
  try {
    // Corrected to productService.createProduct
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  // Corrected to productService.getProductById
  const product = await productService.getProductById(id);
  // Changed "category not found" to "product not found"
  if (!product) return res.status(404).json({ message: "product not found" });
  res.json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  // Corrected to productService.updateProduct
  const updatedProduct = await productService.updateProduct(id, req.body);
  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  // Corrected to productService.deleteProduct
  await productService.deleteProduct(id);
  res.status(204).send();
};

const getAllProducts = async (req, res) => {
  // Corrected to productService.getAllProducts
  const products = await productService.getAllProducts();
  res.json(products);
};

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
};