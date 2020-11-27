import React, {Component} from 'react';

class Register extends Component{
    /*
    * All the state we need to register a new system/user
    * */
    state = {
        registrationKey: null, // connect the database to the hardware with key
        // User
        userName: null,
        password: null,
        email: null,

        // System parameters
        waterCapacity: null,
        settings: {
            ph:[],
            temp:[],
            nh3:[],
        }, // enter and select custom settings from/to the user table
                        // or select settings from fish tables
    }
render(){
    return(
        <form>
            <h2>Set up your system</h2>
            <form >
                <label htmlFor="registration-id">Registration Id:</label><br/>
                <input type="text" id="registration-id" name="registration-id" /><br/>
                <label htmlFor="user-name">User name:</label><br/>
                <input type="text" id="fname" name="user-name" /><br/>
                <label htmlFor="password">Password:</label><br/>
                <input type="password" id="password" name="password"  /><br/><br/>
                <button type="submit" value="Submit">Login</button> <br/>
            </form>
        </form>
    )
}

}
export default Register;