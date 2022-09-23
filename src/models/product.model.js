import db from "../cfg/database.js";
import { DataTypes } from "sequelize";

const Product = db.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    url_image: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    discount: { type: DataTypes.INTEGER },
    category: { type: DataTypes.INTEGER },
  },
  { tableName: "product", timestamps: false }
);

export default Product;
