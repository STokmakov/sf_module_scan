import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./Menu.module.css";



const Menu = () => {
    return (
        <div>
          <nav className={styles.nav}>
            <NavLink to="/" className={styles.link}>
              Главная
            </NavLink>
            <NavLink className={styles.link}>Тарифы</NavLink>
            <NavLink className={styles.link}>FAQ</NavLink>
          </nav>
          </div>
    )
}

export { Menu }
