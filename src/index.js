import * as dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { sequelize } from "./database/database.js";

//import './models/Product.js'
async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.PORT);
    console.log("server run on port " + process.env.PORT);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
