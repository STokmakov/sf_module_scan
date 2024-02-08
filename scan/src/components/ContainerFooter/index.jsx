import React from "react";

import styles from "./Footer.module.css";

import { ImageLogo } from "@components/ImageLogo";
import { Address } from "@components/Address";
import logoScan from "@assets/images/logo-scan.svg";

function Footer() {
  return (

    <footer className={styles.footer}>
      <div className={styles.footer_container}>
      <ImageLogo src={logoScan} alt="logoScan" />
      <Address />
      </div>
    </footer>

  );
}

export { Footer };
