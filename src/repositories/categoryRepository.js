const { Category } = require('../../models');

const create = (data) => Category.create(data);

const findById = (id) => Category.findByPk(id);

const updateById = async (id, updates) => {
  await Category.update(updates, { where: { id } });
  return findById(id);
};

const deleteById = (id) => Category.destroy({ where: { id } });

const findAll = () => Category.findAll();

module.exports = {
  create,
  findById,
  updateById,
  deleteById,
  findAll,
};
