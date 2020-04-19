const mysql = require("mysql");
const keys = require("./keys")
require('dotenv').config()

const connection = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.mysql,
        database: "burgers_db"
    }
);

connection.connect(err => {
    if(err) {
        console.log("Error connecting:", err.stack);
        return;
    }
    console.log("Connected as id ", connection.threadId);
});

module.exports = connection;