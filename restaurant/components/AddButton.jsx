import styles from "../styles/AddButton.module.scss";

const AddButton = ({ close, setClose }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.mainAddButton} onClick={() => setClose(!close)}>
        新しいピザを追加する
      </button>
    </div>
  );
};

export default AddButton;
