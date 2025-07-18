const sql = require("mssql");
require("dotenv").config();

// Cấu hình MSSQL
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER || "localhost",
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // vì máy local
    enableArithAbort: true,
  },
};

// Kết nối và chạy SELECT
async function testConnection() {
  try {
    console.log("🔄 Đang kết nối tới MSSQL...");
    let pool = await sql.connect(config);
    console.log("✅ Kết nối MSSQL thành công!");

    const result = await pool.request().query("SELECT * FROM med_Items");
    console.log("📋 Dữ liệu lấy được từ bảng med_Items:", result.recordset);

    sql.close();
  } catch (err) {
    console.error("❌ Lỗi:", err);
    sql.close();
  }
}

testConnection();
