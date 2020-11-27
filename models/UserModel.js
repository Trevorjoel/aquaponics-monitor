const sqlAquaponics = require('.//DbConnect');
/*
* Modeled data relating to the USERS!
* */

// creates objects with data from the request
let UserModel = function (req){
    this.User = {
        registration: req.body.registration,
        userName: req.body.userName,
        password:req.body.password

    }


}

UserModel.register_user = (req, res) =>{
    console.log(`User Model register user ${this.registration}`)

}
module.exports = UserModel;




