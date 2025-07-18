// controllers/cartItemController.js
const cartItemService = require("../services/cartItemService"); // Import the new service

const createCartItem = async (req, res) => {
  try {
    const cartItem = await cartItemService.createCartItem(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCartItem = async (req, res) => {
  const { id } = req.params;
  const cartItem = await cartItemService.getCartItemById(id);
  if (!cartItem) return res.status(404).json({ message: "Cart item not found" });
  res.json(cartItem);
};

const updateCartItem = async (req, res) => {
  const { id } = req.params;
  const updatedCartItem = await cartItemService.updateCartItem(id, req.body);
  res.json(updatedCartItem);
};

const deleteCartItem = async (req, res) => {
  const { id } = req.params;
  await cartItemService.deleteCartItem(id);
  res.status(204).send();
};

const getAllCartItems = async (req, res) => {
  const cartItems = await cartItemService.getAllCartItems();
  res.json(cartItems);
};

module.exports = {
  createCartItem,
  getCartItem,
  updateCartItem,
  deleteCartItem,
  getAllCartItems,
};