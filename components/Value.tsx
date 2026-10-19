import { bulk, drinkPriceExample, formatPrice, regular } from "@/data/prices";
import styles from "./Value.module.css";

const cupsPerFreeDrink = `${Math.floor(drinkPriceExample / regular.one)}–${Math.floor(
  drinkPriceExample / bulk.one,
)}`;

const values = [
  {
    title: "Вас узнают по стакану",
    text: "Гости запоминают вас как «кофейню с фигуркой на крышке». Это отличает вас от соседей, у которых стакан просто стакан.",
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
    title: "Дешевле бесплатного кофе",
    text: `Если напиток стоит ${formatPrice(drinkPriceExample)}, на его цену можно украсить ${cupsPerFreeDrink} стаканов. Фигурку получает каждый гость, а не один.`,
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
