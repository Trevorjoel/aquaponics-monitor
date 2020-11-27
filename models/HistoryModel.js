const sqlAquaponics = require('.//DbConnect');
/*
* Modeled data relating to the Historic readings!
* */
sqlAquaponics.query(`SELECT date_time, id FROM readings ORDER BY id DESC LIMIT 0 , 1 `,
    (err, res) => {
        if (err) {
            console.log(err, null);
        } else {
            console.log(null, res);
        }

    });