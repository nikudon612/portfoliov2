"use client";

import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Instagram, GitHub, Linkedin } from "react-feather";

function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close
  const router = useRouter();

  // Close the menu and navigate after a short delay
  const closeMenuAndNavigate = (url: string) => {
    setIsMenuOpen(false);
    console.log("closeMenuAndNavigate");
    setTimeout(() => {
      router.push(url); // Navigate to the new page
    }, 200); // Adjust the delay as needed
  };

  const handleLinkClick = (url: any) => (event: any) => {
    event.stopPropagation(); // Prevent event propagation
    closeMenuAndNavigate(url);
  };

  const handleDesktopNavbarClick = () => {
    if (window.innerWidth > 768) {
      return; // Do nothing for desktop screens
    }
    setIsMenuOpen(!isMenuOpen); // Toggle menu for mobile screens
  };

  //close menu on resize
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
        <Image src="/favicon.ico" alt="logo" width="25" height="25" />
      </Link>
      <div
        className={`${styles.links} ${isMenuOpen ? `${styles.active}` : ""}`}
        id="navLinks"
        onClick={handleDesktopNavbarClick} // Use the modified click handler
      >
        {/* Your navigation links here */}
        <div className={styles.mobile}>
          {isMenuOpen && (
            <Link
              href="/"
              className={styles.link}
              onClick={handleLinkClick("/")}
            >
              Home
            </Link>
          )}
          <Link
            href="/about"
            className={styles.link}
            onClick={() => closeMenuAndNavigate("/about")}
          >
            About
          </Link>
          <Link
            href="/work"
            className={styles.link}
            onClick={() => closeMenuAndNavigate("/work")}
          >
            Work
          </Link>
        </div>
        {isMenuOpen && (
          <div className={styles.mobileNavSocials}>
            <Link
              href="https://instagram.com/wavvyboi?igshid=OGQ5ZDc2ODk2ZA=="
              target="__blank"
              rel="noreferrer"
            >
              <Instagram color="#333333" size={32} style={{ margin: "5px" }} />
            </Link>
            <Link
              href="https://github.com/nikudon612"
              target="__blank"
              rel="noreferrer"
            >
              <GitHub color="#333333" size={32} style={{ margin: "5px" }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nicholasbechtel/"
              target="__blank"
              rel="noreferrer"
            >
              <Linkedin color="#333333" size={32} style={{ margin: "5px" }} />
            </Link>
          </div>
        )}
        {/* <Link href="/resume" className={styles.link}>
        resume
      </Link> */}
      </div>
      <div
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""} ${
          styles.desktopHidden
        }`}
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
