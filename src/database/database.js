import Sequelize from "sequelize";
export const sequelize = new Sequelize("product", "luis", "asd123", {
  hots: "localhot",
  dialect: "postgres",
});
//el orden aca es databaseName, userName, password
//este export es para importarlo en index.js
