import Image from "next/image";
import styles from "./Variants.module.css";

const ready = [
  { image: "/img/bear.webp", width: 652, height: 822, title: "Мишка с сердечком", size: "1,5 × 2 см" },
  { image: "/img/cup.webp", width: 573, height: 900, title: "Чашечка с латте-артом", size: "около 1,5 см" },
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
              className={styles.image}
              src={item.image}
              alt={item.title}
              width={item.width}
              height={item.height}
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
