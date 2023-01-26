import React from "react";
import Logo from "../assets/logo.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import styles from "../styles/Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.innerNav}>
        <Logo />
        <HamburgerMenuIcon color="white" height={30} width={30} />
      </div>
    </div>
  );
}

export default Navbar;
