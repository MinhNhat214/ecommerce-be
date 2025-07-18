const userService = require("../services/userService");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await userService.updateUser(id, req.body);
  res.json(updatedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  res.status(204).send();
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

const register = async (req, res) => {
  // try {
  //   const { email, password } = req.body;

  //   // if (!email || !password) {
  //   //   return res.status(400).json({ message: "Thiếu email hoặc password" });
  //   // }

  //   // const exitingUser = await User.findOne({})

  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const user = await userService.createUser({
  //     email,
  //     password: hashedPassword,
  //   });
  //   console.log("user register - controller", user);
  //   req.session.userId = user.user_id;
  //   res.status(201).json({ message: "Đăng ký thành công người dùng: ", email });
  // } catch (error) {
  //   console.error(err);
  //   res.status(500).json({ message: "Lỗi server" });
  // }

  try {
    const { user, token } = await userService.register(req.body);

    res.status(201).json({
      message: "Đăng ký thành công!",
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message || "Lỗi đăng ký." });
  }

};
const login = async (req, res) => {
  try {
    // console.log("req", req.body)
    const data = req.body;
    const {user, token} = await userService.login(data);
    
    res.status(201).json({
      message: "Đăng nhập thành công",
      user,
      token
    })
  } catch (error) {
    res.status(400).json({ message: error.message || "Lỗi đăng ký." });
  }
};


const logout = async (req, res) => {
  
  try {
    const token = req.body;
    const user = await userService.logout(token);
    res.status(401).json({
      message: "đăng xuất thành công"
    })
  } catch (error) {
    res.status(400).json({ message: error.message || "Lỗi đăng xuất." });
  }
}
module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
  register,
  login,
  logout
};
