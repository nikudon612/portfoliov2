"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./footer.module.scss";

function footer() {
  const [showFooter, setShowFooter] = useState(false); // Initially show the footer

  useEffect(() => {
    const handleResize = () => {
      setShowFooter(window.innerWidth > 768);
    };

    // Call handleResize initially to set the initial state based on the screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.footer}>
      {showFooter && ( // Render the footer only if showFooter is true    }
        <div className={styles.socials}>
          <Link
            href="https://instagram.com/wavvyboi?igshid=OGQ5ZDc2ODk2ZA=="
            target="__blank"
            rel="noreferrer"
            className={styles.links}
          >
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/in/nicholasbechtel/"
            target="__blank"
            rel="noreferrer"
            className={styles.links}
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/nikudon612"
            target="__blank"
            rel="noreferrer"
            className={styles.links}
          >
            GitHub
          </Link>
        </div>
      )}
    </div>
  );
}

export default footer;
