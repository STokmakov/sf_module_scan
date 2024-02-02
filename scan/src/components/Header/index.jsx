import styles from "./Header.module.css"

import React from "react";
import {useNavigate} from "react-router-dom";

import { ImageLogoHeader } from "@components/ImageLogoHeader";
import { Menu } from "@components/Menu";
// import { Info } from "@components/Info";
// import { Login } from "@components/Header/Login/Login";
// import MobileMenu from "@components/Header/MobileMenu/MobileMenu";
// import Info from "@components/Header/AccountInfo/Info/Info";

// import {useToken} from '@store/tokenSlice'



const Header = () => {
    // const navigate = useNavigate()
    // const token = useToken()

    // const logoClick = () => {
    //     navigate("/")
    // }

    return (
        <header className={styles.header}>
            <ImageLogoHeader />
            <Menu />
            {/* <Info /> */}
           {/*} <MobileMenu token={token} />
            {token ? <Account token={token}/> : <Login />}
            {token ? <Info token={token}/> : ""} */}
        </header>
    )
}

export { Header }