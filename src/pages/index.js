import Head from "next/head";
import styles from "@/styles/style.module.css";
import Image from "next/image";
import { useState } from "react";

const products = [
  { name: "Juneberry", image: "/imgs/juneberry.webp", className: "juneberry" },
  { name: "Blueberry", image: "/imgs/blueberry.webp", className: "blueberry" },
  { name: "Açai Berry", image: "/imgs/açai-berry.webp", className: "acaiBerry" },
  { name: "White Peach", image: "/imgs/white-peach.webp", className: "whitePeach" },
  { name: "Watermelon", image: "/imgs/watermelon.webp", className: "watermelon" },
  { name: "Tropical", image: "/imgs/tropical.webp", className: "tropical" },
];

function Cards() {
  const [active, setActive] = useState(null);
  const handleClick = (className) => {
    if (window.innerWidth < 740) return;
    if (active === className) {
      setActive(null);
    } else {
      setActive(className);
    }
  };
  return (
    <div className={styles.cardsWrapper}>
      {products.map((product, index) => {
        let cardClass = "";
        if (active) {
          cardClass = active === product.className ? styles.active : styles.inactive;
        }
        return (
          <div
            key={index}
            className={`${styles.card} ${styles[product.className]} ${cardClass}`}
            onClick={() => handleClick(product.className)}
          >
            <p className={styles.cardTitle}>{product.name}</p>
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className={styles.cardImage}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Red Bull Cards</title>
        <meta name="description" content="A collection of delicious berries" />
      </Head>
      <main className={styles.mainContainer}>
        <Cards />
      </main>
    </>
  );
}