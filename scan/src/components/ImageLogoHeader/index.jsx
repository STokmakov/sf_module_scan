import React from "react";
import styles from "./ImageLogoHeader.module.css";
import logoImageHeader from "@assets/images/Logo-image.svg";

function ImageLogoHeader() {
  return (

    <imagelogoheader className={styles.imglogoheader}>
      <div className={styles.imglogoheader_container}>
        <img  className={styles.imglogoheader_container_img} src={logoImageHeader} alt="LogoImage"></img>
      </div>
    </imagelogoheader>

  );
}

export { ImageLogoHeader };
