const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DB,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  },
});

module.exports = sequelize;
