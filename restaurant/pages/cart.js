import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { deleteProduct, reset } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";
import HeadContent from "../components/Head";
import Link from "next/link";

//本番環境設定
const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : process.env.NEXT_PUBLIC_API_URL;
const KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cash, setCash] = useState(false);

  // stripe
  const [stripeToken, setStripeToken] = useState(null);
  const router = useRouter();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const createOrder = async (data) => {
    const res2 = await axios.post(`${API_URL}/orders/`, data);
    res2.status === 201 && router.push("/order/" + res2.data._id);
    dispatch(reset());
  };

  const handleDelete = (product) => {
    dispatch(deleteProduct(product));
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(`${API_URL}/checkout`, {
          tokenId: stripeToken.id,
          amount: cart.total,
        });
        // console.log(res.data);
        // console.log(res.status);
        const { amount } = res.data;
        const { name } = res.data.billing_details;
        const { city, line1 } = res.data.billing_details.address;
        const address = city + line1;
        const orderData = {
          customer: name,
          address,
          total: amount,
          method: 1,
        };
        createOrder(orderData);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, router, cart.total, dispatch]);

  return (
    <div className={styles.container}>
      <HeadContent title="カート" />
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
              <th></th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <Link href={`/product/${product._id}`}>
                    <div className={styles.imgWrapper}>
                      <div className={styles.imgContainer}>
                        <Image
                          src={product.img}
                          layout="fill"
                          objectFit="contain"
                          alt="pizza"
                        />
                      </div>
                    </div>
                  </Link>
                </td>
                <td className={styles.td}>
                  <Link href={`/product/${product._id}`}>
                    <span className={styles.name}>{product.title}</span>
                  </Link>
                </td>
                <td className={styles.td}>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text},</span>
                    ))}
                  </span>
                </td>
                <td className={styles.td}>
                  <span className={styles.price}>{product.price}円</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td className={styles.td}>
                  <span className={styles.total}>
                    {product.price * product.quantity}円
                  </span>
                </td>
                <td className={styles.td}>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(product)}
                  >
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>カートの合計金額</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>小計：</b>
            {cart.total}円
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>割引：</b>０円
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>合計：</b>
            {cart.total}円
          </div>
          <div className={styles.paymentMethods}>
            <button className={styles.payButton} onClick={() => setCash(!cash)}>
              代金引換
            </button>
            <StripeCheckout
              name="Pizzall"
              image="/img/pizza.png"
              billingAddress
              shippingAddress
              description={`お支払い金額は ${cart.total}円です。`}
              amount={cart.total}
              token={onToken}
              stripeKey={KEY}
              currency="JPY"
              locale="ja"
            >
              <button className={styles.payButton}>クレジット支払い</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      {cash && (
        <OrderDetail
          total={cart.total}
          createOrder={createOrder}
          setCash={setCash}
        />
      )}
    </div>
  );
};

export default Cart;
