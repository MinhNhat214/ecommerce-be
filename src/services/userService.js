const { User } = require("../../models");
const { generateToken } = require("../untils/jwt");
const bcrypt = require("bcrypt");
const userRepository = require("../repositories/userRepository");
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

const register = async (userData) => {
  
  const { email, password, ...rest } = userData;
  // console.log("userData - Service: ", userData);
  const exitingUser = await userRepository.findUserByEmail(email);
  if (exitingUser) {
    throw new Error("Email đã được sử dụng");
  }
  if (!email || !password) {
    throw new Error("Email và mật khẩu là bắt buộc.");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  //Tạo user mới
  const newUser = await userRepository.createUser({
    email,
    password: hashedPassword,
    ...rest,
  });

  // Tạo JWT token từ id hoặc thông tin tùy chọn
  const token = generateToken({ id: newUser.id, email: newUser.email });

  return {
    user: {
      id: newUser.id,
      email: newUser.email,
    },
    token,
  };
};

const login = async (data) => {
  const {email, password} = data;

  const user = await userRepository.findUserByEmail(email);

  if(!user){
    throw new Error("email chưa được đăng ký");
  }

  const isPasswordInvalid = await bcrypt.compare(password, user.password);
  if(!isPasswordInvalid){
    throw new Error("mat khau khong chinh xac");
  }

  const token = generateToken({id: user.email, email: user.email})

  return {
    user: {
      id: user.id,
      email: user.email
    },
    token
  }
}

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  register,
  login
};
