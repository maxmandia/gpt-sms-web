import React from "react";
import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerMain}>
        <div className={styles.footerText}>
          <p className={styles.footerTitle}>Me and GPT</p>
          <p className={styles.footerSubtitle}>© 2023 MeAndGPT</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
