const errorHandler = (err, req, res, next) => {
    // in lỗi để debug
    console.error('Lỗi:', err.message);
    // 400: lỗi hệ thống
    res.status(400).json({
        status: 'error',
        message: err.message || 'Đã xảy ra lỗi không xác định.'
    });
};

module.exports = errorHandler;
