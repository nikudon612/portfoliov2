"use client";

import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import PageWrapper from "@/components/page-wrapper";
import { motion, easeIn } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Nick Bechtel - About",
//   description: "Nick Bechtel - Software Engineer - Portfolio - Resume",
// };

function about() {
  // const easeIn = [0.6, 0.05, -0.01, 0.9];

  return (
    <PageWrapper>
      <div className={styles.about}>
        <div className={styles.center}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            {/* <Image
              src="/polaroid.png"
              alt="Fujifilm 100c"
              width={750}
              height={550}
              className={styles.polaroid}
            /> */}
          </motion.div>

          <motion.div
            className={styles.text}
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
            I'm a full-stack software engineer specializing in Next.js and
            TypeScript. Currently at{" "}
            <Link href="https://www.perpetualny.com/" className={styles.link}>
              Perpetaul
            </Link>
            . Collaborating with designers to bring their visions to life
            excites me, I thrive on building scalable, fluid, and performant
            front-end UIs. With a love for technology and continuous learning, I
            stay at the forefront of web development best practices. My
            dedication to crafting exceptional user experiences drives me to
            deliver innovative and visually appealing web applications.
          </motion.div>
          {/* <motion.div
            className={styles.text}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1,
              },
            }}
          >
            More info about my background~
          </motion.div> */}
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],

                delay: 1,
              },
            }}
          >
            Outside of work, I like to spend as much time as I can away from my
            laptop, traveling and getting outside with my camera. I most enjoy
            shooting with one of many older film cameras, such as my Canon A1 or
            Mamiya RZ67. Most of the 2010s I spent as a freelance photographer
            shooting editorials, fashion, interiors and real-estate. I apply
            that critical and creative mindset from my photography to my work as
            an engineer. If you feel inclined to see my photo-work, you can do
            so on{" "}
            <Link
              href="https://instagram.com/wavvyboi?igshid=OGQ5ZDc2ODk2ZA=="
              target="__blank"
              rel="noreferrer"
              className={styles.link}
            >
              instagram
            </Link>
            .
          </motion.div>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1.25,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            Otherwise, I enjoy a Matcha latte, or if there's a swell, surfing at
            Rockaway Beach. ...yes, NYC actually has decent surf!
          </motion.div>
          {/* <motion.div
            className={styles.text}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1.5,
              },
            }}
          ></motion.div> */}
        </div>
      </div>
    </PageWrapper>
  );
}

export default about;
