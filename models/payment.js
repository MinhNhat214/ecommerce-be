'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.Order, {
        foreignKey: "order_id"
      })
    }
  }
  Payment.init({
    payment_id: {type: DataTypes.INTEGER, primaryKey: true},
    order_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    payment_status: DataTypes.STRING,
    payment_gateway: DataTypes.STRING,
    transaction_id: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Payment',
    underscored: true,
    timestamps: false
  });
  return Payment;
};