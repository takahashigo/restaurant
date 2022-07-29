import axios from "axios";
import { parseCookies } from "nookies";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.scss";
import Update from "../../components/Update";
import HeadContent from "../../components/Head";

//本番環境設定
const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : process.env.NEXT_PUBLIC_API_URL;

const Index = ({ products, orders }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const [close, setClose] = useState(true);
  const status = ["準備中", "配達中", "取引完了"];

  const handleUpdate = async (id) => {};

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/products/${id}`);
      setPizzaList((prev) => prev.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(`${API_URL}/orders/${id}`, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <HeadContent title="管理者画面" />
      <div className={styles.item}>
        <h1 className={styles.title}>商品一覧</h1>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th>商品</th>
              <th>商品ID</th>
              <th>商品名</th>
              <th>値段</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {pizzaList.map((pizza) => (
              <tr className={styles.tr} key={pizza._id}>
                <td>
                  <Image
                    src={pizza.img}
                    alt=""
                    width={50}
                    height={50}
                    objectFit="contain"
                  />
                </td>
                <td>{pizza._id.slice(0, 6)}...</td>
                <td>{pizza.title}</td>
                <td>
                  S:{pizza.prices[0]}円,M:{pizza.prices[1]}円,L:
                  {pizza.prices[2]}円
                </td>
                <td>
                  {/* この編集ボタンでピザを編集できるようにする */}
                  <button
                    className={`${styles.button} ${styles.updateBtn}`}
                    onClick={() => setClose(false)}
                  >
                    編集
                  </button>
                  {!close && <Update setClose={setClose} pizza={pizza} />}
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(pizza._id)}
                  >
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>受注履歴</h1>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th>注文ID</th>
              <th>お客様名</th>
              <th>金額</th>
              <th>お支払い方法</th>
              <th>進捗</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {orderList.map((order) => (
              <tr className={styles.tr} key={order._id}>
                <td>{order._id.slice(0, 6)}...</td>
                <td>{order.customer}</td>
                <td>{order.total}円</td>
                <td>{order.method === 0 ? "代引き" : "クレジット払い"}</td>
                <td>{order.status > 2 ? "配達完了" : status[order.status]}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleStatus(order._id)}
                  >
                    次の段階へ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  //本番環境設定
  const API_URL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : process.env.NEXT_PUBLIC_API_URL;
  const myCookie = parseCookies(context) || "";

  if (myCookie.token !== process.env.NEXT_PUBLIC_TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        pemanent: false,
      },
    };
  }

  const ProductsRes = await axios.get(`${API_URL}/products/`);
  const OrderRes = await axios.get(`${API_URL}/orders/`);

  return {
    props: {
      products: ProductsRes.data,
      orders: OrderRes.data,
    },
  };
};

export default Index;
