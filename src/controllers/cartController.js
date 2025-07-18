// controllers/cartController.js
const cartService = require("../services/cartService"); // Import the new service

const createCart = async (req, res) => {
  try {
    const cart = await cartService.createCart(req.body);
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCart = async (req, res) => {
  const { id } = req.params;
  const cart = await cartService.getCartById(id);
  if (!cart) return res.status(404).json({ message: "Cart not found" });
  res.json(cart);
};

const updateCart = async (req, res) => {
  const { id } = req.params;
  const updatedCart = await cartService.updateCart(id, req.body);
  res.json(updatedCart);
};

const deleteCart = async (req, res) => {
  const { id } = req.params;
  await cartService.deleteCart(id);
  res.status(204).send();
};

const getAllCarts = async (req, res) => {
  const carts = await cartService.getAllCarts();
  res.json(carts);
};

// const createCartWithCartItem = async (req, res) => {
//   const data = req.body
//   const cartWithItem = await cartService.createCartWithCartItem(,);
//   res.json(cartWithItem); 
// };

module.exports = {
  createCart,
  getCart,
  updateCart,
  deleteCart,
  getAllCarts,
};