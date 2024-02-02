import React from "react";
import styles from "./ImageLogoFooter.module.css";
import logoScan from "@assets/images/logo-scan.svg";

function ImageLogoFooter() {
  return (

    <imagelogofooter className={styles.imglogofooter}>
      <div className={styles.imglogofooter_container}>
        <img  className={styles.imglogofooter_container_img} src={logoScan} alt="logoScan"></img>
      </div>
    </imagelogofooter>

  );
}

export { ImageLogoFooter };
