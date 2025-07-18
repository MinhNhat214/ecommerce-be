const paymentRepo = require('../repositories/paymentRepository');

const createPayment = async (data) => {
  return await paymentRepo.create(data);
};

const getPaymentById = async (id) => {
  return await paymentRepo.findById(id);
};

const updatePayment = async (id, updates) => {
  return await paymentRepo.updateById(id, updates);
};

const deletePayment = async (id) => {
  return await paymentRepo.deleteById(id);
};

const getAllPayments = async () => {
  return await paymentRepo.findAll();
};

module.exports = {
  createPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
  getAllPayments,
};
