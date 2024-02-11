
import styles from "./HomePage.module.css"
import React from "react";

import { Section1 } from "@components/ContainerMain/Section1";
import { Section2 } from "@components/ContainerMain/Section2";
import { Section3 } from "@components/ContainerMain/Section3";
import { Section4 } from "@components/ContainerMain/Section4";


const Main = (props) => {
    
    console.log(props)

    return (
        <main className={styles.main}>
          <div className={styles.main_container}>
            <Section1 isAuth={props.isAuth} />
            <Section2 />
            <Section3 />
            <Section4 isAuth={props.isAuth} />
          </div>
           
        </main>
    )
}

export  default Main; 