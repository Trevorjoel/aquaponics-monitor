import keys from "../config/keys";
const mysql = require('mysql');

let createConnection = mysql.createConnection({
    host: keys.DB.HOST,
    user: keys.DB.USER,
    password: keys.DB.PASSWORD,
    database: keys.DB.DATABASE,
    port: keys.DB.PORT
});

createConnection.connect((err) => {
        console.log(`Connected to DB: "${keys.DB.DATABASE}" on PORT: "${keys.DB.PORT}".`)
        if (err) throw err;
});


module.exports = createConnection;