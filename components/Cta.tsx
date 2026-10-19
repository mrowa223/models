import { whatsappUrl } from "@/data/contacts";
import { trialQuantity } from "@/data/prices";
import styles from "./Cta.module.css";

const process = [
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

export default function Cta() {
  return (
    <section className={`section ${styles.cta}`}>
      <h2>Как запустить пробу</h2>
      <p>
        Напишите, какую фигурку хотите: мишку, чашечку или любую другую модель под размер крышки, и
        я подготовлю {trialQuantity} штук для вашей точки. Если руководству нужно посмотреть
        вживую, привезу образец на стакане.
      </p>
      <a className={styles.button} href={whatsappUrl} target="_blank" rel="noopener">
        Написать в WhatsApp
      </a>

      <h3 className={styles.processTitle}>Как проходит заказ</h3>
      <ol className={styles.process}>
        {process.map((step) => (
          <li key={step.title}>
            <b>{step.title}</b>
            <span>{step.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
