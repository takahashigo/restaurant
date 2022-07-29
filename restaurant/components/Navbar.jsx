import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);

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
          <div className={styles.text}>0120 111 2222</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>ホーム</li>
          </Link>
          <li className={styles.listItem}>
            <a href="#product">商品</a>
          </li>
          <Link href="/" passHref>
            <span className={styles.logo}>Pizzall</span>
          </Link>
          <li className={styles.listItem}>
            <a href="#info">店舗情報</a>
          </li>
          <li className={styles.listItem}>
            <a href="#contact">お問い合わせ</a>
          </li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="cart" width={30} height={30} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
