import {
  bulk,
  customExtraLarge,
  drinkPriceExample,
  formatNumber,
  formatPrice,
  regular,
} from "@/data/prices";
import styles from "./Value.module.css";

const percentOfCheque = (price: number) =>
  Math.round((price / drinkPriceExample) * 100);
const shareOfCheque = `${percentOfCheque(bulk.one)}–${percentOfCheque(regular.one)}%`;
const customShare = `${percentOfCheque(regular.one + customExtraLarge)}%`;

const values = [
  {
    title: "Вас узнают по стакану",
    text: "Гости запоминают вас как «кофейню с фигуркой на крышке». Это отличает вас от соседей, у которых стакан - просто стакан.",
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
    title: "Небольшая доля чека",
    text: `Готовая фигурка стоит ${formatNumber(bulk.one)}–${formatPrice(regular.one)}: это ${shareOfCheque} от чека в ${formatPrice(drinkPriceExample)}, своя - до ${customShare}.`,
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
