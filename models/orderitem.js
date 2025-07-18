'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderItem.belongsTo(models.Order,{
        foreignKey: "order_id",
      }),
      OrderItem.belongsTo(models.Product,{
        foreignKey: "product_id",
      })
    }
  }
  OrderItem.init({
    order_item_id: {type: DataTypes.INTEGER, primaryKey: true},
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'OrderItem',
    underscored: true,
    timestamps: false
  });
  return OrderItem;
};