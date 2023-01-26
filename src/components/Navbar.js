import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import styles from "../styles/Navbar.module.css";
function Navbar() {
  const [width, setWidth] = useState();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className={styles.navContainer}>
      {width <= 500 ? (
        <div className={styles.innerNav}>
          <p className={styles.emojis}>🤖 🫀 ✨</p>
          <HamburgerMenuIcon color="white" height={30} width={30} />
        </div>
      ) : (
        <div className={styles.innerNav}>
          <p className={styles.emojis}>🤖 🫀 ✨</p>
          <p className={styles.dashText}>Dashboard</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
