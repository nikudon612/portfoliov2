import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";

function footer() {
  return (
    <div className={styles.footer}>
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
          className={styles.links}
        >
          LinkedIn
        </Link>
        <Link href="https://github.com/nikudon612" className={styles.links}>
          GitHub
        </Link>
      </div>
    </div>
  );
}

export default footer;
