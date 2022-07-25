import Image from "next/image";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            美味いと言えば、ピザーラ。ピザーラと言えば美味い。
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>店舗情報</h1>
          <p className={styles.text}>
            1999 Pizzala #304,
            <br />
            東京都, 111-1111
            <br />
            0120-333-4444
          </p>
          <p className={styles.text}>
            1999 Pizzala #304,
            <br />
            東京都, 111-1111
            <br />
            0120-333-4444
          </p>
          <p className={styles.text}>
            1999 Pizzala #304,
            <br />
            東京都, 111-1111
            <br />
            0120-333-4444
          </p>
          <p className={styles.text}>
            1999 Pizzala #304,
            <br />
            東京都, 111-1111
            <br />
            0120-333-4444
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>営業時間</h1>
          <p className={styles.text}>
            月曜日〜土曜日
            <br />
            10:00 - 22:00
          </p>
          <p className={styles.text}>
            日曜日
            <br />
            11:00 - 23:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
