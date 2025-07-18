const { User } = require('../../models');

const checkUserExists = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  next();
};

module.exports = checkUserExists;
