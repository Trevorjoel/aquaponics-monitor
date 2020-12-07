import React from "react";
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.scss';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <Logo/>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>

        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={true}/>
        </nav>
    </header>
);
export default toolbar;