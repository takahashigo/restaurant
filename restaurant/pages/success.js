import Link from "next/link";
import HeadContent from "../components/Head";
import styles from "../styles/Success.module.scss";

const SuccessScreen = () => {
  return (
    <div className={styles.container}>
      <HeadContent title="お問い合わせ"/>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          お問い合わせいただきありがとうございます。
        </h1>
        <p className={styles.desc}>
          確認メールをお送り致しましたので、送信元を確認していただけると幸いです。
          <br />
          また、対応ができ次第、お客様にメールさせていただきます。
        </p>
        <div className={styles.home}>
          引き続き、お買い物を楽しんでください。ホームには
          <Link href="/" className={styles.link}>
            こちら
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
