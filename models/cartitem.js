'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartItem.belongsTo(models.Cart,{
        foreignKey: "cart_id",
      });
      CartItem.belongsTo(models.Product,{
        foreignKey: "product_id",
      })
      
    }
  }
  CartItem.init({
    cart_item_id: {type: DataTypes.INTEGER, primaryKey: true},
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    added_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CartItem',
    underscored: true,
    timestamps: false
  });
  return CartItem;
};