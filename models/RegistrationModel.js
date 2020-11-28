const sqlAquaponics = require('.//DbConnect');
/*
* Modeled data relating to the Registration!
*/

// creates objects with data from the request
let RegistrationModel = function (req){
    this.User = {
        registrationKey: req.body.registrationKey,
        userName: req.body.userName,
        password:req.body.password,
        email:req.body.email,
        waterCapacity:req.body.waterCapacity,

    }
}

RegistrationModel.register_user = (req, res) =>{
    console.log(`User Model register user ${this.User.registrationKey}`)

}
module.exports = RegistrationModel;




