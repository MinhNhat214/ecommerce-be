// # Điểm khởi động server (lắng nghe port, gọi app.js)
require('dotenv').config();
const { sequelize } = require('../models'); // Sequelize instance từ models/index.js
const app = require('./app');

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');

    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
}

startServer();