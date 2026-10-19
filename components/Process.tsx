import { trialQuantity } from "@/data/prices";
import styles from "./Process.module.css";

const steps = [
  {
    title: "Заявка",
    text: "Пишете в WhatsApp, какую фигурку хотите и примерный расход стаканов.",
  },
  {
    title: "Выбор модели",
    text: "Готовая фигурка или любая другая модель под размер крышки: по вашему логотипу, маскоту или идее.",
  },
  {
    title: "Эскиз",
    text: "Для своей модели делаю эскиз и вношу 2–3 правки, пока вам не понравится.",
  },
  {
    title: "Образец",
    text: "Привожу фигурку на стакане, чтобы вы и руководство посмотрели вживую.",
  },
  {
    title: "Объём и цена",
    text: "Согласуем количество, число цветов и срок. Цена считается по шкале выше.",
  },
  {
    title: "Печать",
    text: `Пробная партия из ${trialQuantity} штук готова за неделю, срок большего заказа назову под ваш объём.`,
  },
  {
    title: "Поставка",
    text: "Привожу партию на вашу точку. Дальше регулярные поставки под ваш расход стаканов.",
  },
];

export default function Process() {
  return (
    <section className={`section ${styles.block}`}>
      <span className="eyebrow">Оформление</span>
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
