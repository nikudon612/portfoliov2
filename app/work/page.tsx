import React from "react";
import styles from "./work.module.scss";
import Image from "next/image";
import Link from "next/link";

function page() {
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
    <div className={styles.work}>
      <div className={styles.work_container}>
        {projects.map((item) => (
          <div className={styles.project}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
