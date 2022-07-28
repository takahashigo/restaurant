import styles from "../styles/PizzaList.module.scss";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>おすすめピザ一覧</h1>
      <p className={styles.desc}>
        当店は、幅広い層の方に食べていただけるよう、海鮮や肉、チーズ、野菜など様々なバリエーションに加え、さらにお手頃な価格に設定させていただきました。
        今後の展開としては、種類の増量、割引クーポンの発行(2枚買うと30%OFFなど)、学生限定イベントの開催などを考えております。
        正社員もしくはアルバイトの方も募集していますので、気になった方はぜひお問い合わせフォームからご連絡いただけると幸いです。
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
