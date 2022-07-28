import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/ContactForm.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const data = {
      name,
      email,
      content,
    };
    try {
      const res = await axios.post("http://localhost:3000/api/email", data);
      router.push("/success");
    } catch (err) {
      console.log(err);
    } 
  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>お問い合わせ</h1>
        <p className={styles.desc}>下記のフォームに入力してください。</p>
        <div className={styles.item}>
          <label htmlFor="name" className={styles.label}>名前</label>
          <input
            id="name"
            name="name"
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="email" className={styles.label}>メールアドレス</label>
          <input
            id="email"
            name="email"
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="content" className={styles.label}>お問い合わせ内容</label>
          <textarea
            id="content"
            name="content"
            rows={3}
            className={styles.textarea}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleSubmit}>
          送信する
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
