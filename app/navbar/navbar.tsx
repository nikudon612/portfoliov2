
import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

function page() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        NB
      </Link>
      <div className={styles.links}>
        <Link href="/about" className={styles.link}>
          about
        </Link>

        <Link href="/work" className={styles.link}>
          work
        </Link>
        <Link href="/resume" className={styles.link}>
          resume
        </Link>
      </div>
    </div>
  );
}

export default page;
