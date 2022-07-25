import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="telephone"
            width={32}
            height={32}
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>今すぐ連絡！！</div>
          <div className={styles.text}>000 000 000</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>ホーム</li>
          <li className={styles.listItem}>商品</li>
          <li className={styles.listItem}>メニュー</li>
          <span className={styles.logo}>Pizzala</span>
          <li className={styles.listItem}>イベント</li>
          <li className={styles.listItem}>ブログ一覧</li>
          <li className={styles.listItem}>お問い合わせ</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="cart" width={30} height={30} />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
