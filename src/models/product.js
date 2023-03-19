import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, //todos estas props estan en la doc oficial de sequelize models-basic
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: { type: DataTypes.STRING },
    Price: {
      type: DataTypes.DECIMAL,
    },
    Stock: {
      type: DataTypes.BOOLEAN,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: true }
);
