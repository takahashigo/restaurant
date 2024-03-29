import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.scss";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "right") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  // console.log(index);

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        onClick={() => handleArrow("left")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image src={image} alt="" layout="fill" objectFit="contain" priority={index === 0 ? true : false} />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        onClick={() => handleArrow("right")}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
