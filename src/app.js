// # Tạo app Express, thiết lập middleware, parser JSON, cors, định tuyến
const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const morgan = require('morgan')
//Làm việc trực tiếp với file (đọc/ghi/tạo/xóa...)
const fs = require('fs'); //file system
const path = require('path'); //Ghép và xử lý đường dẫn của file hoặc thư mục
const logEvents = require('./helpers/logEvents')

const responseFormatter = require('./middlewares/responseFormatter');
const errorHandler = require('./middlewares/errorHandler');

const userRoutes = require('./routes/userRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
const productImageRoutes = require('./routes/productImageRoutes')
const cartRoutes = require('./routes/cartRoutes')
const cartItemRoutes = require('./routes/cartItemRoutes')
const orderRoutes = require('./routes/orderRoutes')
const orderItemRoutes = require('./routes/orderItemRoutes')
const paymentRoutes = require('./routes/paymentRoutes')

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON body
app.use(helmet());

// in log access ra console
app.use(morgan('dev'));

// Tạo stream ghi log vào file access.log (nếu file không tồn tại thì tự tạo)
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' } // 'a' = append (ghi tiếp vào file cũ)
)
//ghi access log vào file
app.use(morgan("common", { stream: accessLogStream }));


app.use("/v1/users", userRoutes)
app.use("/v1/categories", categoryRoutes)
app.use("/v1/products", productRoutes)
app.use("/v1/product-images", productImageRoutes)
app.use("/v1/carts", cartRoutes)
app.use("/v1/cart-items", cartItemRoutes)
app.use("/v1/orders", orderRoutes)
app.use("/v1/order-items", orderItemRoutes)
app.use("/v1/payments", paymentRoutes)





//link api không khớp -> lỗi 404
app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        message: "Not found!"
    });
});

//link api khớp, nhưng tham số sai -> lỗi (mặc định là 500) -> có thể code sai
// vì lỗi sai tham số hay trùng khóa không phải là 500
// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//         status: err.status || 500,
//         message: err.message
//     });
// });


// Middleware formatter cho mọi response
app.use(responseFormatter);

// Middleware xử lý lỗi
app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the E-commerce API!" });
// });

module.exports = app;
