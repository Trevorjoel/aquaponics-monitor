import React, { Component } from 'react';
import Aux from '../../HigherOrder/Aux';
import Toolbar from '../Navigation/ToolBar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state ={
        showSideDrawer: false
    };
    sideDrawerClosedHandler = () =>{
        this.setState({
            showSideDrawer: false
        })
    };
    sideDrawerToggleHandler = () =>{
        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer}})
        // Clean way of setting the state when it depends on the old state

    };
    render(props) {
        return(
            <Aux>
            <Toolbar
                isAuth={true}
                drawerToggleClicked={this.sideDrawerToggleHandler}
            />
                <SideDrawer
                    isAuth={true}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main>
                    {this.props.children}
                </main>
            </Aux>
                )
    }
}
export default Layout;