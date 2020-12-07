import React from 'react';
import Button from '../../Components/UI/Button/Button';

const logIn = () =>{

    return(
        <div>
            <h2>Login</h2>

    <form >
        <label htmlFor="user-name">User name:</label><br/>
        <input type="text" id="fname" name="user-name" /><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" id="password" name="password"  /><br/><br/>
        <Button btnType="Success" >Submit</Button> <br/>
    </form>
        </div>

)
}
export default logIn;