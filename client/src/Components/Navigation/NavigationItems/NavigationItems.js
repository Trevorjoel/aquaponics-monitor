import React from "react";
import classes from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>

        {/*When Authenticated*/}
        {props.isAuthenticated ?
            <NavigationItem exact link="/settings" >Settings</NavigationItem>
            : null}
        {props.isAuthenticated ?
            <NavigationItem exact link="/history" >History</NavigationItem>
            : null}
        {props.isAuthenticated ?
            <NavigationItem exact link="/advice" >Advice</NavigationItem>
            : null}

       {/*When Not*/}
        {!props.isAuthenticated ?
            <NavigationItem exact link="/" >Log In</NavigationItem> :
            <NavigationItem exact link="/logout" >Log Out</NavigationItem>
        }
        {!props.isAuthenticated ?
            <NavigationItem exact link="/set-up" >Register System</NavigationItem>
            : null}
    </ul>
);
export default navigationItems;