// services/cartService.js
const cartRepository = require('../repositories/cartRepository')
const cartItemRepository = require('../repositories/cartRepository')

const createCart = async (data) => {
  return await cartRepository.create(data);
};

const getCartById = async (id) => {
  const cart = await cartRepository.getCartById(id);
  if (!cart) {
    throw new Error('Giỏ hàng không tồn tại');
  }
  return cart;
};

const updateCart = async (id, updates) => {
  const cart = await getCartById(id);
  if (!cart) {
      throw new Error('Cart không tồn tại');
    }
  return await cartRepository.updateCart(id, updates);
};

const deleteCart = async (id) => {
  const cart = await getCartById(id)

  return await cartRepository.deleteCart(cart);
};

const getAllCarts = async () => {
  return await cartRepository.getAllCarts();
};


const createCartWithCartItem = async (cartData, cartItemsData)  => {
  const cart = await cartRepository.createCart(cartData);
  for (const item of cartItemsData){
    await cartItemRepository.create({ 
      ...item, 
      cart_id: cart.cart_id 
    });
  }
}

module.exports = {
  createCart,
  getCartById,
  updateCart,
  deleteCart,
  getAllCarts,
  createCartWithCartItem
};