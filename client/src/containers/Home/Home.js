import React, {Component} from 'react';
import Login from '../User/Login';
import Button from '../../Components/UI/Button/Button'
import {NavLink} from 'react-router-dom';
import Aux from '../../HigherOrder/Aux';
import SystemOverview from "../../Components/SystemOverview/SystemOverview";
class Home extends Component {
    state = {

        authenticated: true,
        fishType: 'Trout',
        optimalTemp: [12, 18],
        optimalPh: [6.5, 8],
        optimalNh3: [0.0, 0.6],
        waterCapacity: 5000,
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
                <h2>Your System</h2>

                <SystemOverview />
            </div>: null);

        const systemStatus = (this.state.authenticated ?
            <div>
                <h4>System Status</h4>
                <SystemOverview />
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