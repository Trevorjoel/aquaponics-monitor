const sqlAquaponics = require('.//DbConnect');

sqlAquaponics.query(`SELECT date_time, id FROM readings ORDER BY id DESC LIMIT 0 , 1 `,
    (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });