import {
  bestRow,
  drinkPriceExample,
  formatPrice,
  regularRow,
  trialQuantity,
  trialRow,
} from "@/data/prices";
import styles from "./Value.module.css";

const cupsPerFreeDrink = `${Math.floor(drinkPriceExample / regularRow.one)}–${Math.floor(
  drinkPriceExample / bestRow.one,
)}`;

const values = [
  {
    title: "Подарок без повода",
    text: "Гость пришёл за кофе, а получил ещё и маленькую вещь, которую не ждал. Этот момент запоминается вместе с вашей кофейней.",
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
    title: "Проверка без риска",
    text: `Пробная партия стоит ${formatPrice(trialQuantity * trialRow.one)}. Запускаете на одной точке и по итогам решаете, продолжать ли.`,
  },
  {
    title: "Вас узнают по стакану",
    text: "Гости запоминают вас как «кофейню с фигуркой на крышке». Это отличает вас от соседей, у которых стакан просто стакан.",
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
      <p className={styles.summary}>
        Фигурка продолжает работать, когда кофе уже выпит: она остаётся у гостя на столе и
        возвращает его к вам.
      </p>
    </section>
  );
}
