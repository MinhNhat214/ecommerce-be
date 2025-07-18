const { OrderItem } = require('../../models');

const create = (data) => OrderItem.create(data);

const findById = (id) => OrderItem.findByPk(id);

const updateById = async (id, updates) => {
  await OrderItem.update(updates, { where: { id } });
  return findById(id);
};

const deleteById = (id) => OrderItem.destroy({ where: { id } });

const findAll = () => OrderItem.findAll();

module.exports = {
  create,
  findById,
  updateById,
  deleteById,
  findAll,
};
