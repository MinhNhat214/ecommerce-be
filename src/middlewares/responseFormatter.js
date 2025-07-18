const responseFormatter = (req, res, next) => {
    // lấy res
    if (res.locals.response) {
        res.status(200).json(res.locals.response);
    } else {
        //Nếu không có -> chuyển cho handle lỗi
        next(); // Nếu không có response, chuyển tiếp
    }
};

module.exports = responseFormatter;
