const { Order } = require('../../models');

const create = (data) => Order.create(data);

const findById = (id) => Order.findByPk(id);

const updateById = async (id, updates) => {
  await Order.update(updates, { where: { id } });
  return findById(id);
};

const deleteById = (id) => Order.destroy({ where: { id } });

const findAll = () => Order.findAll();

module.exports = {
  create,
  findById,
  updateById,
  deleteById,
  findAll,
};
