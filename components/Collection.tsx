import Image from "next/image";
import bear from "@/assets/img/bear.webp";
import cup from "@/assets/img/cup.webp";
import styles from "./Collection.module.css";

const ready = [
  { image: bear, title: "Мишка с сердечком" },
  { image: cup, title: "Чашечка с латте-артом" },
];

const points = [
  "Серию придумываете вы сами: ваш маскот, логотип, персонаж или любая модель под размер крышки. Готовые фигурки можно добавить в неё.",
  "Каждый раз гость получает новую фигурку серии и хочет собрать все.",
  "Кто соберёт всю серию, получает напиток в подарок. Карты лояльности и приложение не нужны.",
  "Серию меняете когда хотите: к Новому году, весне или в цветах вашего бренда.",
];

export default function Collection() {
  return (
    <section className={`section ${styles.block}`}>
      <span className="eyebrow">Главная идея</span>
      <h2>Своя коллекция фигурок, за которой гости возвращаются</h2>
      <ul className={styles.series}>
        {ready.map((item) => (
          <li key={item.title}>
            <Image
              className={styles.tile}
              src={item.image}
              alt={item.title}
              placeholder="blur"
              loading="eager"
              sizes="(max-width: 720px) 33vw, 290px"
            />
            <span>{item.title}</span>
          </li>
        ))}
        <li>
          <div className={`${styles.tile} ${styles.custom}`} aria-hidden="true">
            +
          </div>
          <span>Ваша фигурка</span>
        </li>
      </ul>
      <ul className="dots">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className={styles.summary}>
        Обычный стакан кофе становится частью вашей коллекции, и у гостя появляется причина прийти
        снова.
      </p>
    </section>
  );
}
