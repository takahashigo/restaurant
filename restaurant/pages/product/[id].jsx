import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import HeadContent from "../../components/Head";
import { addProduct } from "../../redux/cartSlice";
import styles from "../../styles/Product.module.scss";

const ProductPage = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, quantity, price, extras }));
    router.push("/cart");
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    // チェックが入っているかどうか真偽値を返す。
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras([...extras, option]);
    } else {
      changePrice(-option.price);
      setExtras((prev) => prev.filter((opt) => opt._id !== option._id));
    }
  };

  // console.log(extras);

  return (
    <div className={styles.container}>
      <HeadContent title="商品詳細" />
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            alt="pizza"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>{price}円</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>サイズをお選びください</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" alt="size-s" layout="fill" />
            <span className={styles.numberS} onClick={() => handleSize(0)}>
              Small
            </span>
            {/* 選択されているサイズの文字色を変更、押されたら変わる */}
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" alt="size-m" layout="fill" />
            <span className={styles.numberM} onClick={() => handleSize(1)}>
              Medium
            </span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" alt="size-l" layout="fill" />
            <span className={styles.numberL} onClick={() => handleSize(2)}>
              Large
            </span>
          </div>
        </div>
        <div className={styles.chooseWrapper}>
          <h3 className={styles.choose}>トッピングをお選びください</h3>
          <div className={styles.ingredients}>
            {pizza.extraOptions.map((option) => (
              <div className={styles.option} key={option._id}>
                <input
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor={option.text}>{option.text}</label>
              </div>
            ))}
          </div>
          <div className={styles.add}>
            <input
              type="number"
              defaultValue={1}
              className={styles.quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button className={`${styles.button}`} onClick={handleClick}>
              <span className={styles.btn}>カートに入れる</span>
            </button>
          </div>
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

  const res = await axios.get(
    `${API_URL}/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
};

export default ProductPage;

// 商品ページはSSGを採用する場合
// export const getStaticPaths = async () => {
//   const res = await axios.get("http://localhost:3000/api/products/");
//   console.log(res.data);
//   const paths = res.data?.map((pizza) => {
//     return {
//       params: {
//         id: pizza._id,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const { id } = context.params;
//   const res = await axios.get(`http://localhost:3000/api/products/${id}`);
//   console.log(res.data);
//   return {
//     props: {
//       pizza: res.data
//     },
//   };
// };
