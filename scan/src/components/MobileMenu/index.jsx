import css from "./MobileMenu.module.css"
import png from "./icon-hm.png"
import React, {useRef} from "react";

import close from "./icon-close.png"
import logo from "./logo.png"
import {NavLink} from "react-router-dom";
// import {Menu} from "../../Menu";

const MobileMenu = (props) => {
    const ref = useRef(null)

    const menuClick = () => {
        ref.current.style.display = 'block'
    }

    const menuClose = () => {
        ref.current.style.display = null
    }

    const panelClick = (event) => {
        if (event.target.tagName === 'A') {
            menuClose()
        }
    }

    return (
        <>
            <div className={css.mobileMenu}>
                <img onClick={menuClick} src={png} alt=""/>
            </div>
            <div className={css.mobileContainer}>
                <div ref={ref} onClick={panelClick} className={css.panel}>
                    <div className={css.head}>
                        <img className={css.logo} src={logo} alt=""/>
                        <img onClick={menuClose} className={css.close} src={close} alt=""/>
                    </div>
                    <nav className={css.menu}>
                        <ul className={css.menuList}>
                            {/* {
                                Menu.map((item, key) =>
                                    <li key={key} className={css.menuItem}>
                                        <NavLink to={item.link} className={({isActive}) => isActive ? css.menuActive : css.menuNormal}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )
                            } */}
                        </ul>
                    </nav>
                    <div className={css.account}>
                        {props.isAuth ?
                            <div className={css.exit}>
                                <NavLink className={css.logoutLink} to="/logout">
                                    Выйти
                                </NavLink>
                            </div>
                            :
                            <div className={css.enter}>
                                <div className={css.register}>
                                    <NavLink className={css.registerLink} to="/login/register">
                                        Зарегистрироваться
                                    </NavLink>
                                </div>
                                <div className={css.login}>
                                    <NavLink className={css.loginLink} to="/login">
                                        Войти
                                    </NavLink>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export { MobileMenu }