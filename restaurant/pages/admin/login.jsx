import axios from "axios";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeadContent from "../../components/Head";
import styles from "../../styles/Login.module.scss";

//本番環境設定
const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : process.env.NEXT_PUBLIC_API_URL;

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleClick = async () => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });
      // res.status === 200 && Cookies.set("token", process.env.NEXT_PUBLIC_TOKEN);
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    router.push("/admin");
  }, []);

  return (
    <div className={styles.container}>
      <HeadContent title="管理者ログイン画面" />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>管理者ログイン画面</h1>
        <input
          placeholder="ユーザーネーム"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="パスワード"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleClick}>
          ログイン
        </button>
        {error && <span className={styles.error}>ログイン失敗！</span>}
      </div>
    </div>
  );
};

export default Login;
