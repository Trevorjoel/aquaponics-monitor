import React, {Component} from 'react';
import Login from '../User/Login';
import Button from '../../Components/UI/Button/Button'
import {NavLink} from 'react-router-dom';
import Aux from '../../HigherOrder/Aux';
import Profile from "../../Components/Profile/Profile";
import Status from '../../Components/Status/Status';
class Home extends Component {

    state = {
        // State for the SystemProfile component
        authenticated: true,
        fishType: 'Trout',
        optimalTemp: [12, 18],
        optimalPh: [6.5, 8],
        optimalNh3: [0.0, 0.6],
        waterCapacity: 5000,

        // State for the SystemStatus component
        currentParams: {
            temp: 13,
            ph: 7,
            nh3: 0.002
        },
        alertTriggers:{
            temp: [3, 10, 18, 23],
            ph: [6, 7.5, 8.5, 9],
            nh3:[0.5, 1.0]
        }
    }


    render() {
        const path = !this.state.authenticated ? 'set-up' : 'settings';

        const notAuthenticated = ( <div>
            {!this.state.authenticated ?
                <div>
                    <Login/>
                    <p>Or</p>
                    <Button btnType="Success" link="set-up">
                        <NavLink to={path}>Register New System</NavLink>
                    </Button>
                </div> : null}

        </div>);

        const systemProfile = (this.state.authenticated ?
            <div>
                <Profile />
            </div>: null);

        const systemStatus = (this.state.authenticated ?
            <div><br /><br />
                    <Status />
            </div>: null);



        return(
            <Aux>
                {notAuthenticated}
                {systemProfile}
                {systemStatus}
            </Aux>

        )
    }
}
export default Home;