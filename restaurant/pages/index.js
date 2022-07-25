import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.scss";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ピザーラ</title>
        <meta name="description" content="Best piza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/products/");

  return {
    props: {
      pizzaList: res.data,
    },
  };
};
