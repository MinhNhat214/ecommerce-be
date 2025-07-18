const { User } = require("../../models");

const createUser = async (data) => {
  return await User.create(data);
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const updateUser = async (id, updates) => {
  await User.update(updates, { where: { id } });
  return getUserById(id);
};

const deleteUser = async (id) => {
  return await User.destroy({ where: { id } });
};

const getAllUsers = async () => {
  return await User.findAll();
};

const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  findUserByEmail,
};
