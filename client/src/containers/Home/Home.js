import React, {Component} from 'react';
import Login from '../User/Login';
import Button from '../../Components/UI/Button/Button'
import {NavLink} from 'react-router-dom';

class Home extends Component {
    state = {

        authenticated: false
    }
    render() {
        const path = !this.state.authenticated ? 'set-up' : 'settings';
        return(
            <div>
                {!this.state.authenticated ?
                    <div>
                        <Login/>
                    <p>Or</p>
                   <Button btnType="Success" link="set-up">
                       <NavLink to={path}>Register New System</NavLink>
                   </Button>
                </div> : <h2>Viewing the front page</h2>}

            </div>
        )
    }
}
export default Home;