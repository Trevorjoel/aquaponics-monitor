import React, {Component} from 'react';
import logo from './assets/images/logos/logo-03.png';
import './App.scss';
import { Route, Switch} from 'react-router-dom';
import SignUp from './containers/User/Register'
import Home from './containers/Home/Home';
import Settings from './containers/Settings/Settings'
import History from './containers/History/History';
import Advice from './containers/Advice/Advice';
import Layout from "./Components/Layout/Layout";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Layout>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/set-up" exact component={SignUp}/>
                        <Route path="/settings" exact component={Settings}/>
                        <Route path="/history" exact component={History}/>
                        <Route path="/advice" exact component={Advice}/>
                    </Switch>
                </Layout>
            </div>
        )
    }

}
export default App;
