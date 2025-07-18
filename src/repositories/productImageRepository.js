const { ProductImage } = require('../../models');

const create = (data) => ProductImage.create(data);

const findById = (id) => ProductImage.findByPk(id);

const updateById = async (id, updates) => {
  await ProductImage.update(updates, { where: { id } });
  return findById(id);
};

const deleteById = (id) => ProductImage.destroy({ where: { id } });

const findAll = () => ProductImage.findAll();

module.exports = {
  create,
  findById,
  updateById,
  deleteById,
  findAll,
};
