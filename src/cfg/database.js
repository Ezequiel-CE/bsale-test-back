import { Sequelize } from "sequelize";

//adding connection to database

const db = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  { host: process.env.MYSQL_HOST, dialect: "mysql" }
);

export default db;
