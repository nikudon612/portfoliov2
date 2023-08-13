"use client";

import React, { useState } from "react"; 
import styles from "./navbar.module.scss";
import Link from "next/link";

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  

  return (
    <div className={styles.navbar}>
    <Link href="/" className={styles.logo}>
      NB
    </Link>
    <div
  className={`${styles.links} ${isMenuOpen ? `${styles.active} ${styles.fadein}` : ""}`}
  id="navLinks"
    >
      {/* Your navigation links here */}
      <Link href="/about" className={styles.link} >
        about
      </Link>
      <Link href="/work" className={styles.link} >
        work
      </Link>
      {/* <Link href="/resume" className={styles.link}>
        resume
      </Link> */}
    </div>
    <div
      className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
      onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu open/close
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  </div>
  );
}

export default page;
