import { seriesMin, seriesRange } from "@/data/prices";
import styles from "./Collection.module.css";

const points = [
  `Серию придумываете вы сами: ${seriesRange} фигурок - ваш маскот, логотип, персонажи или любая фигурка под размер крышки. Готовые фигурки тоже можно включить.`,
  "С напитком гость получает одну фигурку серии и хочет собрать остальные.",
  "Собрал всю серию - показывает фигурки на кассе, бариста отмечает это в чеке, и гость получает напиток в подарок. Карты лояльности и приложение не нужны.",
  "Серию меняете когда хотите: к Новому году, весне или в цветах вашего бренда.",
];

// Схема: пронумерованные фигурки и последняя ячейка - собранная серия
const slots = Array.from({ length: seriesMin - 1 }, (_, i) => i + 1);

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
        <ol className={styles.series} aria-label={`Серия из ${seriesRange} фигурок`}>
          {slots.map((n) => (
            <li key={n}>
              <span className={styles.num}>{n}</span>
              <span>Фигурка серии</span>
            </li>
          ))}
          <li className={styles.reward}>
            <span className={styles.num}>{seriesRange}</span>
            <span>Напиток в подарок</span>
            <span className="sr-only">за собранную серию</span>
          </li>
        </ol>
      </div>
    </section>
  );
}
