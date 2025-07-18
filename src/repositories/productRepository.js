const { Product } = require('../../models');

const create = (data) => Product.create(data);

const findById = (id) => Product.findByPk(id);

const updateById = async (id, updates) => {
  await Product.update(updates, { where: { id } });
  return findById(id);
};

const deleteById = (id) => Product.destroy({ where: { id } });

const findAll = () => Product.findAll();

module.exports = {
  create,
  findById,
  updateById,
  deleteById,
  findAll,
};
