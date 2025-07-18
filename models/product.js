"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: "category_id",
        onDelete: "SET NULL",
      });
      Product.hasMany(models.ProductImage, {
        foreignKey: "image_id",
      });
      Product.hasMany(models.OrderItem, {
        foreignKey: "order_id",
      });
      Product.hasMany(models.CartItem, {
        foreignKey: "cart_item_id",
      });
    }
  }
  Product.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.DECIMAL,
      stock_quantity: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Product",
      underscored: true,
      timestamps: false,
    }
  );
  return Product;
};
