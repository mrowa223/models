import { seriesSize } from "@/data/prices";
import styles from "./Collection.module.css";

const points = [
  "Серию придумываете вы сами: ваш маскот, логотип, персонаж или любая фигурка под размер крышки. Готовые фигурки тоже можно включить.",
  "С напитком гость получает одну фигурку серии и хочет собрать остальные.",
  "Собрал всю серию - показывает фигурки на кассе, бариста отмечает это в чеке, и гость получает напиток в подарок. Карты лояльности и приложение не нужны.",
  "Серию меняете когда хотите: к Новому году, весне или в цветах вашего бренда.",
];

const slots = Array.from({ length: seriesSize }, (_, i) => i + 1);

export default function Collection() {
  return (
    <section className={`section ${styles.block}`}>
      <span className="eyebrow">Главная идея</span>
      <h2>Своя серия фигурок, за которой гости возвращаются</h2>
      <div className="split">
        <ul className="dots">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <ol
          className={styles.series}
          aria-label={`Серия из ${seriesSize} фигурок`}
        >
          {slots.map((n) => (
            <li
              key={n}
              className={n === seriesSize ? styles.reward : undefined}
            >
              <span className={styles.num} aria-hidden="true">
                {n}/{seriesSize}
              </span>
              <span className="sr-only">
                Фигурка {n} из {seriesSize}.
              </span>
              <span>
                {n === seriesSize
                  ? "Серия собрана - напиток в подарок"
                  : "Фигурка серии"}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
