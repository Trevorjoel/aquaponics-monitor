import React, {Component} from 'react';
import Login from '../User/Login';
import {NavLink} from 'react-router-dom';
class Home extends Component{
    state = {

        authenticated: false
    }
    render() {
        const path = !this.state.authenticated ? 'set-up' : 'settings';
        return(
            <div>
                <h1>Home</h1>
                {!this.state.authenticated ? <div><Login/><p>Or</p>
                   <button link="set-up"><NavLink to={path}>Set up</NavLink></button></div>: <h2>Viewing the front page</h2>}

            </div>
        )
    }
}
export default Home;