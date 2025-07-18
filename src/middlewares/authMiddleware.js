const {verifyToken} = require("../untils/jwt"); //thư viện để giải mã jwt và kiểm tra tính hợp ệ 

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization; //lấy giá trị của header
    //giá trị này có dạng: Authorization: Bearer <token>


    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({message: "Người dùng chưa đăng nhập."});
        // Nghĩa là không có token hoặc token sai định dạng
    }

    const token = authHeader.split(" ")[1];
    // Cắt chuỗi "Bearer <token>" thành mảng ["Bearer", "<token>"] và lấy phần <token>.
    console.log("decoded", token)
    
    try {
        const decoded = verifyToken(token);
        req.user = decoded; //gán thông tin user vào request
        next();
    } catch (error) {
        return res.status(403).json({message: "token không hợp lệ."})
    }
}

module.exports = authenticate;
