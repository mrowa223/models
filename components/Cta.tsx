import { whatsappUrl } from "@/data/contacts";
import { trialQuantity } from "@/data/prices";
import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section className={`section ${styles.cta}`}>
      <h2>Как запустить пробу</h2>
      <p>
        Напишите, какую фигурку берёте, мишку или чашечку, и я подготовлю {trialQuantity} штук для
        вашей точки. Если руководству нужно посмотреть вживую, привезу образец на стакане.
      </p>
      <a className={styles.button} href={whatsappUrl} target="_blank" rel="noopener">
        Написать в WhatsApp
      </a>
    </section>
  );
}
