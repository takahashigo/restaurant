import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title} id="info">店舗情報</h1>
          <p className={styles.text}>
            2022 Pizzall 
            <br />
            東京都, 777-7777
            <br />
            0120-111-2222
          </p>
          <p className={styles.text}>
            2022 Pizzall 
            <br />
            東京都, 222-2222
            <br />
            0120-333-4444
          </p>
          <p className={styles.text}>
            2022 Pizzall
            <br />
            東京都, 333-3333
            <br />
            0120-555-6666
          </p>
          <p className={styles.text}>
            2022 Pizzall
            <br />
            東京都, 444-4444
            <br />
            0120-777-8888
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
      <div className={styles.item}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Footer;
