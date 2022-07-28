import axios from "axios";
import { useState } from "react";
import styles from "../styles/Add.module.scss";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([null, null, null]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = () => {
    setExtraOptions([...extraOptions, extra]);
  };

  const changePrice = (e, index) => {
    setPrices(
      prices.map((price, i) => (i === index ? Number(e.target.value) : price))
    );
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dzrcidiw7/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };

      await axios.post("http://localhost:3000/api/products",newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.btnWrapper}>
          <span onClick={() => setClose(true)} className={styles.close}>
            ✗
          </span>
        </div>
        <h1>ピザ新規作成</h1>
        <div className={styles.item}>
          <label className={styles.label}>画像を選択する</label>
          <input
            type="file"
            className={styles.input}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>商品名</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>商品詳細</label>
          <textarea
            type="text"
            rows={4}
            className={styles.textarea}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>値段 (S,M,L)</label>
          <div className={styles.priceContainer}>
            <input
              type="number"
              placeholder="S"
              className={`${styles.input} ${styles.inputSm}`}
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              type="number"
              placeholder="M"
              className={`${styles.input} ${styles.inputSm}`}
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              type="number"
              placeholder="L"
              className={`${styles.input} ${styles.inputSm}`}
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>オプション</label>
          <div className={styles.extra}>
            <input
              type="text"
              name="text"
              placeholder="オプション名"
              className={`${styles.input} ${styles.inputSm} ${styles.inputOp}`}
              onChange={handleExtraInput}
            />
            <input
              type="number"
              name="price"
              placeholder="値段"
              className={`${styles.input} ${styles.inputSm} ${styles.inputOp}`}
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              追加する
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions.map((extraOption, index) => (
              <div className={styles.extraItem} key={index}>
                <span className={styles.extraOptionText}>
                  {extraOption.text}:
                </span>
                <span className={styles.extraOptionPrice}>
                  {extraOption.price}円
                </span>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          作成する
        </button>
      </div>
    </div>
  );
};

export default Add;
