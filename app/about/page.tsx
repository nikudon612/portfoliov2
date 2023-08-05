import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";

function about() {
  return (
    <div className={styles.about}>
      <div className={styles.center}>
        <Image src="/NickPolaroid-1.jpeg" alt="Fujifilm 100c" width={700} height={500} className={styles.polaroid}/>
        <div className={styles.text}>
          A little about me I'm a programmer specializing in Next.js and
          TypeScript. Collaborating with designers to bring their visions to
          life excites me, I thrive on building scalable, fluid, and performant
          front-end UIs. With a love for technology and continuous learning, I
          stay at the forefront of web development best practices. My dedication
          to crafting exceptional user experiences drives me to deliver
          innovative and visually appealing web applications.
        </div>
        <div className={styles.text}>
          In my freetime, I enjoy a Matcha latte, taking photos on one of my
          many old film cameras, or if there's a swell, surfing at Rockaway
          Beach
        </div>
        <div className={styles.text}>
          ...yes, NYC actually has decent surf!
        </div>
      </div>
    </div>
  );
}

export default about;
