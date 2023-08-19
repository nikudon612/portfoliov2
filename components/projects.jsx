"use client";
import React from "react";
import styles from "../app/work/work.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function projects() {
  const projects = [
    {
      name: "Forerunner Ventures",
      desc: "UX/UI Redesign, Frontend Development and Backend API integration",
      img: "/forerunner.png",
      link: "https://www.forerunnerventures.com/",
      key: 1,
    },
    {
      name: "The Dinner Party",
      desc: "Frontend UI & Backend API integration",
      img: "/dinnerparty.png",
      link: "https://www.forerunnerventures.com/thedinnerparty",
      key: 2,
    },
    {
      name: "Dept. of Music",
      desc: "UX/UXI design, Frontend Development and Backend API integration",
      img: "/dom.png",
      link: "https://www.deptofmusic.com/",
      key: 3,
    },
  ];

  return (
    <div className={styles.project_container}>
      <AnimatePresence>
        {projects.map((item) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: item.key * 0.33,
              },
            }}
            className={styles.project}
          >
            <Link
              href={item.link}
              target="__blank"
              rel="nonferrer"
              className={styles.link}
            >
              <div className={styles.img_container}>
                <Image
                  src={item.img}
                  alt="proj img"
                  className={styles.img}
                  // fill={true}
                  height={500}
                  width={300}
                  layout="responsive" // Set the layout to responsive
                />
              </div>
              <div className={styles.title}>{item.name}</div>
              <div className={styles.text}>{item.desc}</div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default projects;
