import { formatNumber, formatPrice, trial, trialQuantity } from "@/data/prices";
import styles from "./Process.module.css";

const steps = [
  {
    title: "Заявка",
    text: "Пишете в WhatsApp: какую фигурку хотите, адрес точки и сколько стаканов в день.",
  },
  {
    title: "Модель",
    text: "Готовая фигурка или своя серия под размер крышки. Для своей согласуем эскиз.",
  },
  {
    title: "Образец",
    text: "Работаем в Астане. Привозим фигурку на стакане, чтобы посмотреть вживую.",
  },
  {
    title: "Пробная партия",
    text: `${formatNumber(trialQuantity)}\u00a0фигурок по ${formatPrice(trial.one)} вместо ${formatPrice(trial.oldOne)}, готово за неделю.`,
  },
  {
    title: "Проба на точке",
    text: "Несколько дней или неделю на одной точке. Считаете, сколько гостей забрали фигурку, спросили о ней и вернулись.",
  },
  {
    title: "Регулярные поставки",
    text: "Объём под ваш расход стаканов, цена по шкале выше. Привозим партии на вашу точку.",
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
