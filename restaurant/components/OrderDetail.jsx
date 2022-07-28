import { useState } from "react";
import styles from "../styles/OrderDetail.module.scss";

const OrderDetail = ({ total, createOrder, setCash }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({
      customer,
      address,
      total,
      method:0
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          配達完了時、{total}円お支払いいただきます。
        </h1>
        <div className={styles.item}>
          <label className={styles.label}>ご氏名</label>
          <input
            placeholder="高橋悟生"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>電話番号</label>
          <input
            placeholder="000-0000-0000"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>お届け先住所</label>
          <input
            placeholder="東京都"
            type="text"
            className={styles.input}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.buttonBack} onClick={() => setCash(false)}>
            戻る
          </button>
          <button className={styles.button} onClick={handleClick}>
            注文する
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
