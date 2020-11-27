import React from 'react';

const logIn = () =>{

    return(
        <div>
            <h2>Login</h2>

    <form >
        <label htmlFor="user-name">User name:</label><br/>
        <input type="text" id="fname" name="user-name" /><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" id="password" name="password"  /><br/><br/>
        <button type="submit" value="Submit">Login</button> <br/>
    </form>
        </div>

)
}
export default logIn;