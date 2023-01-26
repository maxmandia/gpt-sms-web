import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.heroText}>
        Artificial intelligence you can <span>text.</span>
      </h2>
      <button className={styles.startedButton}>Get Started</button>
      <div className={styles.profileCircle}>
        <p>🤖</p>
      </div>
      <div className={styles.iMessageContainer}>
        <p className={styles.iMessageName}>AI</p>
        <div className={styles.iMessageRight}>
          <p className={styles.iMessageText}>
            What are some good gift ideas for Father’s Day?
          </p>
        </div>
        <div className={styles.iMessageLeft}>
          <p className={styles.iMessageText}>
            Some good gift ideas for Father's Day include: a stylish wallet a
            tool set for his hobbies, a custom-made gift such as a photo album
            or a scrapbook, tickets to a sports event or concert, a new grill or
            outdoor cooking equipment
          </p>
        </div>
        <div className={styles.iMessageRight}>
          <p className={styles.iMessageText}>Great ideas! ✨🕺🙏</p>
        </div>
        <div className={styles.iMessageRight}></div>
        <div className={styles.iMessageLeft}></div>
      </div>
    </div>
  );
}
