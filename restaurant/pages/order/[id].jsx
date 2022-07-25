import Image from "next/image";
import styles from "../../styles/Order.module.scss";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.trTitle}>
                <th>注文番号</th>
                <th>お客様（氏名）</th>
                <th>お届け先住所</th>
                <th>ご注文金額</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <span className={styles.id}>198282478947</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.name}>高橋悟生</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.address}>東京都</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.total}>1460円</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="pay" width={30} height={30} />
            <span>お支払い</span>
            <div className={styles.checkedIcon}>
              <Image  className={styles.checkedIcon} src="/img/checked.png" alt="pay" width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="prepare" width={30} height={30} />
            <span>準備</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="pay" width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="bike" width={30} height={30} />
            <span>配達</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="pay" width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" alt="deliver" width={30} height={30} />
            <span>お届け</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="pay" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>注文の合計金額</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>小計：</b>1460円
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>割引：</b>０円
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>合計：</b>1460円
          </div>
          <button disabled className={styles.button}>
            支払う
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
