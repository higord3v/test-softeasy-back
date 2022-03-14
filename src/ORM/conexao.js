const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bookshop", "postgres", "postgres", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;
