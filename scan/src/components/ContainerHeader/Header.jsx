import styles from "./Header.module.css"

import React from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../../store/auth-reducer";
import {NavLink} from "react-router-dom";

import { Logo } from "@components/Logo";
import InfoContainer  from "@components/Info";
import logoImage from "@assets/images/Logo-image.svg";
import { Menu } from "@components/Menu";
import { Loader } from "@components/Loader";
import { Login } from "@components/Login";
import AccountContainer from "@components/Account";
import { MobileMenu } from "@components/MobileMenu";

const Header = (props) => {


    return (
        <header className={styles.header}>
          <div className={styles.header_container}>
            <Logo src={logoImage} alt="logoImage"/>
            <Menu />
            {props.isAuth ? <InfoContainer /> : <Loader />}
            <MobileMenu /> 
            {props.isAuth ? <AccountContainer /> : <Login />}

  
            </div>
        </header>
    )
}

export default Header;