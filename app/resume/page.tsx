import React from "react";
import styles from "./resume.module.scss";
import Image from "next/image";

function page() {
  return (
    <div className={styles.resume}>
      <Image src="/resume.png" alt="resume" width={800} height={1100} />
    </div>
  );
}

export default page;
