import styles from "./Main.module.css"

import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { HomePage } from "@views/HomePage";
import { Login } from "@views/AuthPage";

const Main = (props) => {
    // const isAuth = useSelector(selectIsAuth)
    // const login = useSelector(selectCurrentUserLogin)

    // const dispatch = useDispatch()

    // const logoutCallback = () => {
    //     dispatch(logout())
    // }
    console.log(props)

    return (
        <main className={styles.main}>
          <div className={styles.main_container}>
          sdfsdfsdf
          </div>
           
        </main>
    )
}

export  default Main; 