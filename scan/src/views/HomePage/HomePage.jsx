
import styles from "./HomePage.module.css"
import React from "react";

import { Service } from "@components/ContainerMain/Service";
import { Carusel } from "@components/ContainerMain/Carusel";
import { Section3 } from "@components/ContainerMain/Section3";
import { Section4 } from "@components/ContainerMain/Section4";


const Main = (props) => {
    
    return (
        <main className={styles.main}>
          <div className={styles.main_container}>
            <Service isAuth={props.isAuth} />
            {/* <Section2 />
            <Section3 />
            <Section4 isAuth={props.isAuth} /> */}
          </div>
           
        </main>
    )
}

export  default Main; 