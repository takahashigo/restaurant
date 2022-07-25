import Image from "next/image";
import styles from "../styles/Cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.trTitle}>
              <th>商品</th>
              <th>商品名</th>
              <th>トッピング</th>
              <th>料金</th>
              <th>数量</th>
              <th>合計</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgWrapper}>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      layout="fill"
                      objectFit="cover"
                      alt="pizza"
                    />
                  </div>
                </div>
              </td>
              <td className={styles.td}>
                <span className={styles.name}>マルゲリータ</span>
              </td>
              <td className={styles.td}>
                <span className={styles.extras}>ミックス、スパイシー</span>
              </td>
              <td className={styles.td}>
                <span className={styles.price}>730円</span>
              </td>
              <td className={styles.td}>
                <span className={styles.quantity}>2</span>
              </td>
              <td className={styles.td}>
                <span className={styles.total}>1460円</span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgWrapper}>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      layout="fill"
                      objectFit="cover"
                      alt="pizza"
                    />
                  </div>
                </div>
              </td>
              <td className={styles.td}>
                <span className={styles.name}>マルゲリータ</span>
              </td>
              <td className={styles.td}>
                <span className={styles.extras}>ミックス、スパイシー</span>
              </td>
              <td className={styles.td}>
                <span className={styles.price}>730円</span>
              </td>
              <td className={styles.td}>
                <span className={styles.quantity}>2</span>
              </td>
              <td className={styles.td}>
                <span className={styles.total}>1460円</span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgWrapper}>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      layout="fill"
                      objectFit="cover"
                      alt="pizza"
                    />
                  </div>
                </div>
              </td>
              <td className={styles.td}>
                <span className={styles.name}>マルゲリータ</span>
              </td>
              <td className={styles.td}>
                <span className={styles.extras}>ミックス、スパイシー</span>
              </td>
              <td className={styles.td}>
                <span className={styles.price}>730円</span>
              </td>
              <td className={styles.td}>
                <span className={styles.quantity}>2</span>
              </td>
              <td className={styles.td}>
                <span className={styles.total}>1460円</span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgWrapper}>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      layout="fill"
                      objectFit="cover"
                      alt="pizza"
                    />
                  </div>
                </div>
              </td>
              <td className={styles.td}>
                <span className={styles.name}>マルゲリータ</span>
              </td>
              <td className={styles.td}>
                <span className={styles.extras}>ミックス、スパイシー</span>
              </td>
              <td className={styles.td}>
                <span className={styles.price}>730円</span>
              </td>
              <td className={styles.td}>
                <span className={styles.quantity}>2</span>
              </td>
              <td className={styles.td}>
                <span className={styles.total}>1460円</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>カートの合計金額</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>小計：</b>1460円
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>割引：</b>０円
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>合計：</b>1460円
          </div>
          <button className={styles.button}>お支払いに進む</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
