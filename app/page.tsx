import Image from "next/image";
import styles from "./page.module.css";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.text}>
          <div>
            Hi, my name is <span className={styles.name}>Nick</span>.
          </div>
          <div>I'm a software engineer based in New York City</div>
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
