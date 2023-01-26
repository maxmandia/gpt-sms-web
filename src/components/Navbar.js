import React from "react";
import Logo from "../assets/logo.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import styles from "../styles/Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navContainer}>
      <Logo />
      <HamburgerMenuIcon height={30} width={30} />
    </div>
  );
}

export default Navbar;
