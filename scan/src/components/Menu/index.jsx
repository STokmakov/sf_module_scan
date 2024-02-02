import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./Menu.module.css";


const mainMenu = [
    {name: 'Главная', link: '/'},
    {name: 'Тарифы', link: '/rates'},
    {name: 'FAQ', link: '/reference'},
]

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menuList}>
                {
                    mainMenu.map((item, key) =>
                        <li key={key} className={styles.menuItem}>
                            <NavLink to={item.link} className={({isActive}) => isActive ? styles.menuActive : styles.menuNormal}>
                                {item.name}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export { Menu }
