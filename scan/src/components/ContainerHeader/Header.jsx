import styles from "./Header.module.css"

import React from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../../store/auth-reducer";
import {NavLink} from "react-router-dom";

import { Logo } from "@components/Logo";
import { Info } from "@components/Info";
import logoImage from "@assets/images/Logo-image.svg";
import { Menu } from "@components/Menu";
import { Login } from "@components/Login";
import Account from "../Account/Account";
import { MobileMenu } from "@components/MobileMenu";

const Header = (props) => {


    return (
        <header className={styles.header}>
          <div className={styles.header_container}>
            <Logo src={logoImage} alt="logoImage"/>
            <Menu />
            {props.isAuth ? <Info /> : <Menu />}
            <MobileMenu /> 
            {props.isAuth ? <Account logout={props.logout}/> : <Login />}

  
            </div>
        </header>
    )
}

export default Header;