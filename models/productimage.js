"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductImage.belongsTo(models.Product,{
        foreignKey: "product_id"
      });
    }
  }
  ProductImage.init(
    {
      image_id: { type: DataTypes.INTEGER, primaryKey: true },
      product_id: DataTypes.INTEGER,
      image_url: DataTypes.STRING,
      is_primary: DataTypes.BOOLEAN,
      created_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ProductImage",
      underscored: true,
      timestamps: false
    }
  );
  return ProductImage;
};
