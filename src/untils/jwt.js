const jwt = require("jsonwebtoken");
require('dotenv').config(); // load biến môi trường từ .env

const JWT_SECRET = process.env.JWT_SECRET ;
const JWT_EXPIRES_IN  = process.env.JWT_EXPIRES_IN ; //token sống trong 7 ngày


const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN  });
};

// Xác thực token (thường dùng trong middleware bảo vệ route)
const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    generateToken,
    verifyToken
}


// jwt: gồm 3 phần
// Header.Payload.Signature

// Header: Kiểu thuật toán dùng để ký token (ví dụ: HS256).
// Payload: Dữ liệu (claims) – ví dụ: userId, email, role, v.v.
// Signature: Phần xác minh tính toàn vẹn của token, được tạo bằng secret key.

// JWT lưu trữ trên client khác với session lưu trữ trên server
// dễ mở rộng ra nhiều server khác, chỉ cần chia sẻ secret


