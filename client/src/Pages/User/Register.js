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
                        // or select settings from fish tables (best datatype to store this??)
    }
render(){
    return(
        <div>
            <h2>Set up your system</h2>
            <form >
                <label htmlFor="registration-id">Registration Id:</label><br/>
                <input type="text" id="registration-id" name="registration-id" /><br/>
                <label htmlFor="user-name">User name:</label><br/>
                <input type="text" id="fname" name="user-name" /><br/>
                <label htmlFor="password">Password:</label><br/>
                <input type="password" id="password" name="password"  /><br/><br/>
                <label htmlFor="email">email:</label><br/>
                <input type="email" id="email" name="email"  /><br/><br/>
                <br/><hr/><br/>
                <label htmlFor="water-capacity">Water capacity:</label><br/>
                <input type="number" id="water-capacity" name="water-capacity"  /><br/><br/>
                <label htmlFor="fish">Determine your alerts:</label><br/><br/>
                <select id="fish" name="fish">
                    <option value="trout">Trout</option>
                    <option value="silver-perch">Siver Perch</option>
                    <option value="barramundi">Barramundi</option>
                </select> or <button>Custom alert settings</button><br/><br/>
                <button type="submit" value="Submit">Register your system</button> <br/>
            </form>
            <br/><br/>
        </div>
    )
}

}
export default Register;