import { formatPrice, trial, trialQuantity, trialTotal } from "@/data/prices";
import styles from "./Process.module.css";

const steps = [
  {
    title: "Заявка",
    text: "Пишете в WhatsApp, какую фигурку хотите и примерный расход стаканов.",
  },
  {
    title: "Модель",
    text: "Готовая фигурка или своя под размер крышки. Для своей делаю эскиз и вношу 2–3 правки.",
  },
  {
    title: "Образец",
    text: "Привожу фигурку на стакане, чтобы вы и руководство посмотрели вживую.",
  },
  {
    title: "Пробная партия",
    text: `${trialQuantity} фигурок по ${formatPrice(trial.one)} вместо ${formatPrice(trial.oldOne)}, готово за неделю. С доставкой — ${formatPrice(trialTotal)}.`,
  },
  {
    title: "Проба на точке",
    text: "Неделю на одной точке. Считаете, сколько гостей забрали фигурку, спросили о ней и вернулись, и успевают ли бариста.",
  },
  {
    title: "Регулярные поставки",
    text: "Объём под ваш расход стаканов, цена по шкале выше. Привожу партии на вашу точку.",
  },
];

export default function Process() {
  return (
    <section className={`section ${styles.block}`}>
      <span className="eyebrow">Запуск</span>
      <h2>Как проходит заказ</h2>
      <ol className={styles.steps}>
        {steps.map((step) => (
          <li key={step.title}>
            <b>{step.title}</b>
            <span className="muted">{step.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
