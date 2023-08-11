"use client";
import React from "react";
import styles from "../app/work/work.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function projects() {
  const projects = [
    {
      name: "Forerunner Ventures",
      desc: "UI Redesign, Frontend Development and Backend API integration",
      img: "/forerunner.png",
      link: "https://www.forerunnerventures.com/",
      key: 1,
    },
    {
      name: "The Dinner Party",
      desc: "Frontend UI & Backend API integration",
      img: "/dinnerparty.png",
      link: "https://thedinnerparty.forerunnerventures.com/",
      key: 2,
    },
    {
      name: "Dept. of Music",
      desc: "UI/UX design, Frontend Development and Backend API integration",
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
            variants={images}
            // initial="hidden"
            // animate="show"
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
                  fill={true}
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
