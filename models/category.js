"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, {
        foreignKey: "category_id"
      })
    }
  }
  Category.init(
    {
      category_id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      parent_category_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Category",
      underscored: true,
      timestamps: false,
    }
  );
  return Category;
};
