import css from "./Account.module.css"
import png from "./avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";

const Account = (props) => {
    console.log(props)

    return (
        <div className={css.account}>
            <div className={css.left}>
                <div className={css.name}>
                   { props.name}
                </div>
                <div className={css.exit}>
                    <NavLink className={css.logout} onClick={props.logout} to="/">
                        Выйти {props.logout}
                    </NavLink>
                </div>
            </div>
            <div className={css.right}>
                <img className={css.avatar} src={png} alt="" />
            </div>
        </div>
    )

}

export { Account }