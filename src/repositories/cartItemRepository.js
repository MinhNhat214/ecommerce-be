const { CartItem } = require('../../models');

const create = (data) => CartItem.create(data);

const findById = (id) => CartItem.findByPk(id);

const updateById = async (id, updates) => {
  await CartItem.update(updates, { where: { id } });
  return findById(id);
};

const deleteById = (id) => CartItem.destroy({ where: { id } });

const findAll = () => CartItem.findAll();

module.exports = {
  create,
  findById,
  updateById,
  deleteById,
  findAll,
};
