import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.scss";

const ProductPage = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "マルゲリータ",
    price: [730, 980, 1230],
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ut dolores mollitia numquam, totam debitis repellat praesentium atque pariatur ab.",
  };

  return (
    <div className={styles.container}>
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
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>{pizza.price[size]}円</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>サイズをお選びください</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" alt="size-s" layout="fill" />
            <span className={styles.numberS} onClick={() => setSize(0)}>
              Small
            </span>
            {/* 選択されているサイズの文字色を変更、押されたら変わる */}
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" alt="size-m" layout="fill" />
            <span className={styles.numberM} onClick={() => setSize(1)}>
              Medium
            </span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" alt="size-l" layout="fill" />
            <span className={styles.numberL} onClick={() => setSize(2)}>
              Large
            </span>
          </div>
        </div>
        <div className={styles.chooseWrapper}>
          <h3 className={styles.choose}>トッピングをお選びください</h3>
          <div className={styles.ingredients}>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="double"
                name="double"
                className={styles.checkbox}
              />
              <label htmlFor="double">ミックス</label>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="cheese"
                name="cheese"
                className={styles.checkbox}
              />
              <label htmlFor="cheese">チーズ</label>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="spicy"
                name="spicy"
                className={styles.checkbox}
              />
              <label htmlFor="spicy">スパイシー</label>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="garlic"
                name="garlic"
                className={styles.checkbox}
              />
              <label htmlFor="garlic">ガーリック</label>
            </div>
          </div>
          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity} />
            <button className={styles.button}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
