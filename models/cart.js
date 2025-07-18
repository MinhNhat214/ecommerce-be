"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, {
        //1 đến nhiều
        foreignKey: "user_id",
        onDelete: "SET NULL",
      });
      Cart.hasMany(models.CartItem, { //1 đến nhiều
        foreignKey: "cart_id",
      })
    }
  }
  Cart.init(
    {
      cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Cart",
      underscored: true,
      timestamps: false,
    }
  );
  return Cart;
};
