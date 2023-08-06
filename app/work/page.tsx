import React from "react";
import styles from "./work.module.scss";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "The Dinner Party",
    desc: "Frontend UI & Backend API integrations",
    img: "/dinnerparty.png",
  },
  // {
  //   name: "Project 2",
  //   description: "This is a description of project 2",
  //   img: "/Nick.png",
  // },
  // {
  //   name: "Project 3",
  //   description: "This is a description of project 3",
  //   img: "/Nick.png",
  // },
];

function page() {
  return (
    <div className={styles.work}>
      <div className={styles.work_container}>
        {projects.map((item) => (
          <Link href="/">
            <div className={styles.project}>
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
