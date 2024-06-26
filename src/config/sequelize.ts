import { Sequelize } from "sequelize";
import ENV from "../consts/env";

const sequelize = new Sequelize({
  host: "database",
  database: ENV.DATABASE,
  username: ENV.DATABASE_USER,
  password: ENV.DATABASE_PASSWORD,
  dialect: "postgres",
});

export default sequelize;
