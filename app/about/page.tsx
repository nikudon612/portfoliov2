import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import Link from "next/link";

function about() {
  return (
    <div className={styles.about}>
      <div className={styles.center}>
        <Image
          src="/NickPolaroid-1.jpeg"
          alt="Fujifilm 100c"
          width={750}
          height={550}
          className={styles.polaroid}
        />
        <div className={styles.text}>
          I'm a full-stack software engineer specializing in Next.js and
          TypeScript. Collaborating with designers to bring their visions to
          life excites me, I thrive on building scalable, fluid, and performant
          front-end UIs. With a love for technology and continuous learning, I
          stay at the forefront of web development best practices. My dedication
          to crafting exceptional user experiences drives me to deliver
          innovative and visually appealing web applications.
        </div>
        <div className={styles.text}>More info about my background</div>
        <div className={styles.text}>
          Outside of work, I like to spend as much time as I can away from my
          laptop, traveling and getting outside with my camera. I most enjoy
          shooting on one of many older film cameras such as the Canon A1 or
          Mamiya RZ67. Most of the 2010s I spent as a freelance photographer
          shooting editorials, fashion, interiors and real-estate. If you feel
          inclined to see my photo-work, you can do so on{" "}
          <Link
            href="https://instagram.com/wavvyboi?igshid=OGQ5ZDc2ODk2ZA=="
            target="__blank"
            rel="noreferrer"
            className={styles.link}
          >
            instagram
          </Link>
          .
        </div>
        <div className={styles.text}>
          In my freetime, I enjoy a Matcha latte, taking photos on one of my
          many old film cameras, or if there's a swell, surfing at Rockaway
          Beach
        </div>
        <div className={styles.text}>...yes, NYC actually has decent surf!</div>
      </div>
    </div>
  );
}

export default about;
