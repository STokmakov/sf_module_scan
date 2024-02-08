import React from "react";
import styles from "./ImageLogo.module.css";


function ImageLogo(props) {
  return (

    <imagelogo className={styles.imglogo}>
      <div className={styles.imglogo_container}>
        <img  className={styles.imglogo_container_img} src={props.src} alt={props.alt} ></img>
      </div>
    </imagelogo>

  );
}

export { ImageLogo };
