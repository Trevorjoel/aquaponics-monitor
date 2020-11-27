const UserModel = require('../models/UserModel');
import bcrypt from 'bcrypt';

exports.test = function(req, res) {
    res.send({
        express: 'Do it',
    });
}


exports.registerNewSystem = function(req,res){
        res.send({
            express: 'From the set_up',
        })
};


