require("dotenv").config();
const mysql2 = require("mysql2");

const connection = mysql2.createConnection(process.env.CONNECTION_STRING);

connection.connect(err => {
    if (err) throw err;
    console.log("Banco de dados conectado com sucesso!");
});

module.exports = connection;