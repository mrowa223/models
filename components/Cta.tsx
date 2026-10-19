import { whatsappSeriesUrl } from "@/data/contacts";
import { formatCount, trialQuantity } from "@/data/prices";
import WhatsAppButton from "./WhatsAppButton";
import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section className={`section ${styles.cta}`}>
      <h2>Как запустить пробу</h2>
      <p>
        Напишите, какую фигурку хотите - мишку или чашечку, - и мы подготовим{" "}
        {formatCount(trialQuantity)} для вашей точки. Свою серию обсудим
        отдельно.
      </p>
      <div className={styles.actions}>
        <WhatsAppButton tone="inverse" label="Заказать пробу" />
        <WhatsAppButton
          tone="outline"
          label="Обсудить свою серию"
          href={whatsappSeriesUrl}
        />
      </div>
    </section>
  );
}
