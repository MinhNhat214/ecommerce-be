const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const checkUserExists = require('../middlewares/checkUserExists'); // Middleware kiểm tra user tồn tại
const { authenticate } = require("../middlewares/authMiddleware")

// GET all users
router.get('/', userController.getAllUsers);

// GET user by id
router.get('/:id', userController.getUser);

// POST create user
router.post('/', userController.createUser);

// PUT update user
router.put('/:id', checkUserExists, userController.updateUser);

// DELETE user
router.delete('/:id', checkUserExists, userController.deleteUser);


// POST auth/register
router.post('/auth/register', userController.register);
// Ví dụ: chỉ user đã đăng nhập mới truy cập được
// router.get("/me", authenticate, (req, res) => {
//   res.json({ message: "Thông tin người dùng", user: req.user });
// });
router.post('/auth/login', userController.login);

module.exports = router;
