"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      Order.hasMany(models.Product, {
        foreignKey: "product_id",
      });
      Order.hasMany(models.Payment, {
        foreignKey: "payment_id",
      });
      Order.hasMany(models.OrderItem, {
        foreignKey: "order_item_id",
      });
    }
  }
  Order.init(
    {
      order_id: { type: DataTypes.INTEGER, primaryKey: true },
      user_id: DataTypes.INTEGER,
      total_amount: DataTypes.DECIMAL,
      status: DataTypes.STRING,
      shipping_address: DataTypes.TEXT,
      payment_method: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Order",
      underscored: true,
      timestamps: false,
    }
  );
  return Order;
};
