const UserModel = require('../models/RegistrationModel');
import bcrypt from 'bcrypt';

exports.registerNewSystem = function(req,res){
        res.send({
            secret: 'is potato',
        })
};


