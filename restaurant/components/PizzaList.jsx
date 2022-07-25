import styles from "../styles/PizzaList.module.scss";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>おすすめピザ一覧</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        quam, ea exercitationem molestiae deserunt maiores ex, reiciendis
        blanditiis deleniti quas, excepturi consequatur recusandae doloremque
        assumenda! Delectus veritatis fuga quos nostrum.
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
