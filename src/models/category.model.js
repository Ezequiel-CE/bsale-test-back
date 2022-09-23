import db from "../cfg/database.js";
import { DataTypes } from "sequelize";

const Category = db.define(
  "category ",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
  },
  { tableName: "category", timestamps: false }
);

export default Category;
