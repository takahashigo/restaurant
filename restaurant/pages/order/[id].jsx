import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import HeadContent from "../../components/Head";
import styles from "../../styles/Order.module.scss";

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <HeadContent title="注文履歴" />
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
                  <span className={styles.id}>{order._id}</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.address}>{order.address}</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.total}>{order.total}円</span>
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
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="pay"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="prepare" width={30} height={30} />
            <span>準備</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="pay"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="bike" width={30} height={30} />
            <span>配達</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="pay"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              src="/img/delivered.png"
              alt="deliver"
              width={30}
              height={30}
            />
            <span>お届け</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt="pay"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>注文の合計金額</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>小計：</b>
            {order.total}円
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>割引：</b>０円
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>合計：</b>
            {order.total}円
          </div>
          <button disabled className={styles.button}>
            支払う
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  //本番環境設定
  const API_URL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : process.env.NEXT_PUBLIC_API_URL;

  const res = await axios.get(`${API_URL}/orders/${params.id}`);

  return {
    props: {
      order: res.data,
    },
  };
};

export default Order;
