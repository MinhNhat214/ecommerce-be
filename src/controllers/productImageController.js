// controllers/productImageController.js
const productImageService = require("../services/productImageService"); // Import the new service

const createProductImage = async (req, res) => {
  try {
    // Use productImageService to create a product image
    const productImage = await productImageService.createProductImage(req.body);
    res.status(201).json(productImage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductImage = async (req, res) => {
  const { id } = req.params;
  // Use productImageService to get a product image by ID
  const productImage = await productImageService.getProductImageById(id);
  if (!productImage) return res.status(404).json({ message: "Product image not found" });
  res.json(productImage);
};

const updateProductImage = async (req, res) => {
  const { id } = req.params;
  // Use productImageService to update a product image
  const updatedProductImage = await productImageService.updateProductImage(id, req.body);
  res.json(updatedProductImage);
};

const deleteProductImage = async (req, res) => {
  const { id } = req.params;
  // Use productImageService to delete a product image
  await productImageService.deleteProductImage(id);
  res.status(204).send();
};

const getAllProductImages = async (req, res) => {
  // Use productImageService to get all product images
  const productImages = await productImageService.getAllProductImages();
  res.json(productImages);
};

module.exports = {
  createProductImage,
  getProductImage,
  updateProductImage,
  deleteProductImage,
  getAllProductImages,
};