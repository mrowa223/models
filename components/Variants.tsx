import Image from "next/image";
import bear from "@/assets/img/bear.webp";
import cup from "@/assets/img/cup.webp";
import styles from "./Variants.module.css";

const ready = [
  { image: bear, title: "Мишка с сердечком", alt: "Коричневый мишка с красным сердечком на светлом столе", size: "1,5 × 2 см" },
  { image: cup, title: "Чашечка с латте-артом", alt: "Две зелёные чашечки и мишка на крышке стакана", size: "≈ 1,5 см", top: true },
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
              alt={item.alt}
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
          <div className={styles.customTile} aria-hidden="true">
            <span className={styles.logo}>Ваш логотип</span>
            <span className={styles.arrow}>→</span>
            <svg className={styles.figure} viewBox="0 0 64 72" fill="currentColor">
              <circle cx="20" cy="14" r="7" />
              <circle cx="44" cy="14" r="7" />
              <circle cx="32" cy="26" r="16" />
              <rect x="14" y="38" width="36" height="22" rx="11" />
              <rect x="2" y="62" width="60" height="8" rx="4" opacity="0.5" />
            </svg>
          </div>
          <div className={styles.body}>
            <span className={styles.tag}>Под заказ</span>
            <h3>Своя фигурка</h3>
            <span className={styles.size}>
              По вашему логотипу, маскоту или идее. Можно одну или целую серию. Цена зависит от размера фигурки.
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
