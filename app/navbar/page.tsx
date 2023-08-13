"use client";

import React, { useState, useEffect } from "react"; 
import styles from "./navbar.module.scss";
import Link from "next/link";

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener when component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.navbar}>
    <Link href="/" className={styles.logo}>
      NB
    </Link>
    <div
  className={`${styles.links} ${isMenuOpen ? `${styles.active}` : ""}`}
  id="navLinks"
  onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu open/close
    >
      {/* Your navigation links here */}
      <Link href="/about" className={styles.link} onClick={() => setIsMenuOpen(false)} >
        about
      </Link>
      <Link href="/work" className={styles.link} onClick={() => setIsMenuOpen(false)} >
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
