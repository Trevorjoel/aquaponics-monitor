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

        console.log('Aquaponics db connected....')
        if (err) throw err;
            createConnection.query(`SELECT * FROM readings ORDER BY id DESC LIMIT 10 , 10 `,function (err, result, fields) {
                if (err) throw err;
                console.log(result);
            });
});


module.exports = createConnection;