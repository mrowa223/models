import { trialQuantity } from "@/data/prices";
import WhatsAppButton from "./WhatsAppButton";
import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section className={`section ${styles.cta}`}>
      <h2>Как запустить пробу</h2>
      <p>
        Напишите, какую фигурку хотите: мишку, чашечку или любую другую модель под размер крышки, и
        я подготовлю {trialQuantity} штук для вашей точки. Если руководству нужно посмотреть
        вживую, привезу образец на стакане.
      </p>
      <WhatsAppButton tone="inverse" />
    </section>
  );
}
