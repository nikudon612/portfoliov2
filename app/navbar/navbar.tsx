import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

function page() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>logo</div>
      <div className={styles.links}>
        <Link href="/about">about</Link>
        <Link href="/work">work</Link>
        <Link href="/resume">resume</Link>
      </div>
    </div>
  );
}

export default page;
