import { formatPrice, regularRow, trialQuantity, trialRow } from "@/data/prices";
import styles from "./Steps.module.css";

const steps = [
  { title: "Выбираете фигурку", text: "Мишку, чашечку или любую другую модель под размер крышки." },
  {
    title: "Пробная партия",
    text: `${trialQuantity} готовых фигурок по ${formatPrice(trialRow.one)} вместо ${trialRow.oldOne}, скидка на первый заказ.`,
  },
  {
    title: "Пробуете на точке",
    text: "Смотрите, успевают ли бариста и сколько гостей забирают фигурку с собой.",
  },
  {
    title: "Регулярные поставки",
    text: `По ${formatPrice(regularRow.one)}, объём под ваш расход стаканов. Позже можно перейти на свою фигурку.`,
  },
];

export default function Steps() {
  return (
    <section className="section">
      <span className="eyebrow">Запуск</span>
      <h2>Как начать</h2>
      <ol className={styles.steps}>
        {steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p className="muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
