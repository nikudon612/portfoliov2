import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.text}>
          {/* <PageWrapper> */}
            <div className={styles.intro}>
              Hi, my name is <span className={styles.name}>Nick</span>
              <span className={styles.period}>.</span>
            </div>
          {/* </PageWrapper> */}
          <div>
            I'm a <span className={styles.title}>software engineer</span> based
            in New York City
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src="/Nick.png"
            alt="Nick Bechtel - Portrait"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
