const { Cart } = require('../../models');

const create = (data) => Cart.create(data);

const findById = (id) => Cart.findByPk(id);

const updateById = async (id, updates) => {
  await Cart.update(updates, { where: { id } });
  return findById(id);
};

const deleteById = (id) => Cart.destroy({ where: { id } });

const findAll = () => Cart.findAll();

module.exports = {
  create,
  findById,
  updateById,
  deleteById,
  findAll,
};
