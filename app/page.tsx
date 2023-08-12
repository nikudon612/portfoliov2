"use client";

import Image from "next/image";
import styles from "./page.module.css";
import PageWrapper from "@/components/page-wrapper";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageWrapper>
      <div className={styles.main}>
        <div className={styles.center}>
          <div className={styles.text}>
            <motion.div
              className={styles.intro}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              Hi, my name is <span className={styles.name}>Nick</span>
              <span className={styles.period}>.</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              I'm a{" "}
              <motion.span className={styles.title}>
                software engineer
              </motion.span>{" "}
              based in New York City
            </motion.div>
          </div>
          <motion.div
            className={styles.image}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1.5,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <Image
              src="/Nick.png"
              alt="Nick Bechtel - Portrait"
              width={500}
              height={500}
              className={styles.image}
            />
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
