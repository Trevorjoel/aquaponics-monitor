import React from "react";
import classes from './Logo.module.scss';
import toolBarLogo from '../../assets/images/logos/logo-01-01.png';
import {NavLink} from "react-router-dom";
const logo = (props) =>(
   <div className={
        classes.Logo}
         style={{height: props.height}}>
       <NavLink to="/">  <img alt="logo" src={toolBarLogo}/>
       </NavLink>
    </div>
);
export default logo;