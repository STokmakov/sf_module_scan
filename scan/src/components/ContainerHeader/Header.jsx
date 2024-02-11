import styles from "./Header.module.css"

import React from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../../store/auth-reducer";
import {NavLink} from "react-router-dom";

import { Logo } from "@components/Logo";
import logoImage from "@assets/images/Logo-image.svg";
import { Menu } from "@components/Menu";


const Header = (props) => {

    console.log(props.isAuth)
    return (
        <header className={styles.header}>
          <div className={styles.header_container}>
            <Logo src={logoImage} alt="logoImage"/>
            <Menu />
            {/* <Info /> */}
           {/*} <MobileMenu token={token} />
            {token ? <Account token={token}/> : <Login />}
            {token ? <Info token={token}/> : ""} */}
            
            <div className={styles.header_container_login}>    
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
            </div> 
            </div>
        </header>
    )
}

export default Header;