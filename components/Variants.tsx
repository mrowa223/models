import Image from "next/image";
import bear from "@/assets/img/bear.webp";
import cup from "@/assets/img/cup.webp";
import styles from "./Variants.module.css";

const ready = [
  { image: bear, title: "Мишка с сердечком", size: "1,5 × 2 см" },
  { image: cup, title: "Чашечка с латте-артом", size: "около 1,5 см", top: true },
];

export default function Variants() {
  return (
    <section className="section">
      <span className="eyebrow">Варианты</span>
      <h2>Какие бывают фигурки</h2>
      <div className={styles.grid}>
        {ready.map((item) => (
          <article key={item.title} className={styles.card}>
            <Image
              className={item.top ? `${styles.image} ${styles.top}` : styles.image}
              src={item.image}
              alt={item.title}
              placeholder="blur"
              loading="eager"
              sizes="(max-width: 460px) 100vw, (max-width: 720px) 50vw, 310px"
            />
            <div className={styles.body}>
              <span className={styles.tag}>Готовая</span>
              <h3>{item.title}</h3>
              <span className={styles.size}>{item.size}</span>
            </div>
          </article>
        ))}
        <article className={styles.card}>
          <div className={styles.customTile}>Ваша фигурка</div>
          <div className={styles.body}>
            <span className={styles.tag}>Под заказ</span>
            <h3>Своя фигурка</h3>
            <span className={styles.size}>
              По вашему логотипу, маскоту или идее. Эскиз с 2–3 правками. Цена зависит от размера.
            </span>
          </div>
        </article>
      </div>
      <p className="note">
        Под заказ можно сделать сезонные фигурки, например к Новому году или к весне, и фигурки в
        цветах вашего бренда.
      </p>
    </section>
  );
}
