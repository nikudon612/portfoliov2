import React from "react";
import styles from "./resume.module.scss";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nick Bechtel - Resume",
  description: "Nick Bechtel - Software Engineer - Portfolio - Resume",
};

function page() {
  return (
    <div className={styles.resume}>
      <Image src="/resume.png" alt="resume" width={800} height={1100} />
    </div>
  );
}

export default page;
