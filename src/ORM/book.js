const Sequelize = require("sequelize");
const database = require("./conexao");

const Book = database.define("books", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
});

module.exports = Book;
