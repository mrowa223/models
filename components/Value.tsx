import { bulk, drinkPriceExample, formatPrice, regular } from "@/data/prices";
import styles from "./Value.module.css";

const shareOfCheque = `${Math.round((bulk.one / drinkPriceExample) * 100)}–${Math.round(
  (regular.one / drinkPriceExample) * 100,
)}%`;

const values = [
  {
    title: "Вас узнают по стакану",
    text: "Гости запоминают вас как «кофейню с фигуркой на крышке». Это отличает вас от соседей, у которых стакан — просто стакан.",
  },
  {
    title: "Радость для детей",
    text: "Родители берут фигурку для ребёнка, дети её ждут и спрашивают о ней. Семья приходит к вам ещё раз, и не из-за скидки.",
  },
  {
    title: "Контент для вашего аккаунта",
    text: "Гости снимают стакан до первого глотка и отмечают вас в сторис. Делайте репосты, и живые фото появятся без съёмок.",
  },
  {
    title: "Меньше десятой части чека",
    text: `Фигурка стоит ${bulk.one}–${formatPrice(regular.one)}: это ${shareOfCheque} от чека в ${formatPrice(drinkPriceExample)}. А давать её можно только к части напитков.`,
  },
];

export default function Value() {
  return (
    <section className="section">
      <span className="eyebrow">Ценность</span>
      <h2>Что вы получаете</h2>
      <ul className={styles.grid}>
        {values.map((value) => (
          <li key={value.title} className={styles.card}>
            <h3>{value.title}</h3>
            <p className="muted">{value.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
