const { Payment } = require('../../models');

const create = (data) => Payment.create(data);

const findById = (id) => Payment.findByPk(id);

const updateById = async (id, updates) => {
  await Payment.update(updates, { where: { id } });
  return findById(id);
};

const deleteById = (id) => Payment.destroy({ where: { id } });

const findAll = () => Payment.findAll();

module.exports = {
  create,
  findById,
  updateById,
  deleteById,
  findAll,
};
