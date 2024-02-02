import React from "react";

import styles from "./Footer.module.css";

import { ImageLogoFooter } from "@components/ImageLogoFooter";
import { Address } from "@components/Address";

function Footer() {
  return (

    <footer className={styles.footer}>
      <div className={styles.footer_container}>
      <ImageLogoFooter />
      <Address />
      </div>
    </footer>

  );
}

export { Footer };
