import React from "react";
import {NavLink} from "react-router-dom";
import css from './Login.module.css'

const Login = () => {

    return (
        <div className={css.login}>
            <NavLink className={css.register} to="/login/register">
                Зарегистрироваться
            </NavLink>
            <div className={css.sep}></div>
            <NavLink to="/login" className={css.signin}>
                Войти
            </NavLink>
        </div>
    )
}

export { Login }