import React, {Component} from 'react';
import logo from './logo-01-01.png';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import SignUp from './Pages/User/Register'
import Home from './Pages/Home/Home';
import Settings from './Pages/Settings/Settings'

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/set-up" exact component={SignUp}/>
                        <Route path="/settings" exact component={Settings}/>
                    </Switch>

            </div>
        )
    }

}
export default App;
