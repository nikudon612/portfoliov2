"use client";

import React from "react";
import styles from "./resume.module.scss";
import Image from "next/image";
import { Metadata } from "next";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Nick Bechtel - Resume",
//   description: "Nick Bechtel - Software Engineer - Portfolio - Resume",
// };

function page() {
  return (
    <div className={styles.resume}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.5,
          },
        }}
      >
        <Image src="/resume.png" alt="resume" width={800} height={1100} className={styles.image} />
      </motion.div>
    </div>
  );
}

export default page;
