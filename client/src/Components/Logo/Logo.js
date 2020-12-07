import React from "react";
import classes from './Logo.module.scss';
import toolBarLogo from '../../assets/images/logos/logo-01-01.png';
const logo = (props) =>(
    <div className={
        classes.Logo}
         style={{height: props.height}}>
        <img alt="logo" src={toolBarLogo}/>
    </div>
);
export default logo;