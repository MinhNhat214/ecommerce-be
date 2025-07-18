require('dotenv').config(); // load biến môi trường từ .env

module.exports =
{
  // "development": {
  //   "username": "postgres",
  //   "password": "Chuoi70214",
  //   "database": "my-ecommerce",
  //   "host": "127.0.0.1",
  //   "dialect": "postgres"
  // },
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
