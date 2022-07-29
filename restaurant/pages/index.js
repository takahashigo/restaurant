import axios from "axios";
import { parseCookies } from "nookies";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import HeadContent from "../components/Head";
import PizzaList from "../components/PizzaList";
// import { initialize } from "../redux/cartSlice";
import styles from "../styles/Home.module.scss";

//本番環境設定
const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : process.env.NEXT_PUBLIC_API_URL;

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  // const dispatch = useDispatch();

  // これを発火しなくてもlocalStorageの内容がstoreに反映される（リロード対策）
  // useEffect(() => {
  //   const products =
  //     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).products) ||
  //     [];
  //   const quantity =
  //     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).quantity) ||
  //     0;
  //   const total =
  //     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).total) || 0;
  //   dispatch(initialize({products,quantity,total}));
  // }, [dispatch]);

  return (
    <div className={styles.container}>
      <HeadContent title="ホーム" />
      <Featured />
      {admin && <AddButton close={close} setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

// SSRの場合
export const getServerSideProps = async (context) => {
  const myCookie = parseCookies(context) || "";
  let admin = false;

  if (myCookie.token === process.env.NEXT_PUBLIC_TOKEN) {
    admin = true;
  }

  const res = await axios.get(`${API_URL}/products/`);

  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
