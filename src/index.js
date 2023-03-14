import app from "./app.js";
import { sequelize } from "./database/database.js";

//import './models/Product.js'
async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3000);
    console.log("server run on port 3000");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
