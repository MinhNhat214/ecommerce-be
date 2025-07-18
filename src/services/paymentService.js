// services/paymentService.js
const { Payment } = require('../../models');

const createPayment = async (data) => {
  return await Payment.create(data);
};

const getPaymentById = async (id) => {
  return await Payment.findByPk(id);
};

const updatePayment = async (id, updates) => {
  await Payment.update(updates, { where: { id } });
  return getPaymentById(id);
};

const deletePayment = async (id) => {
  return await Payment.destroy({ where: { id } });
};

const getAllPayments = async () => {
  return await Payment.findAll();
};

module.exports = {
  createPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
  getAllPayments,
};