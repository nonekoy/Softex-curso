const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("empresa","root","root",{
  host: "localhost",
  dialect: "mysql",
  port: "3306",
  user:"root",
  password:"root"
})

try {
    sequelize.authenticate();
    console.log("Banco de dados conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
  module.exports = sequelize;
