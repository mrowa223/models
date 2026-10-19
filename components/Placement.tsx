import Image from "next/image";
import styles from "./Placement.module.css";

const points = [
  "Фигурка стоит на крышке стакана и держится на липучке.",
  "Бариста приклеивает её за секунду, это не замедляет выдачу.",
  "Она стоит в стороне от отверстия для питья и не мешает пить.",
  "Гость легко снимает фигурку и забирает с собой.",
];

const photos = [
  { src: "/img/lid-cup.webp", alt: "Чашечка с латте-артом на крышке стакана", width: 653, height: 900 },
  { src: "/img/lid-top.webp", alt: "Мишка и чашечки на крышке, вид сверху", width: 631, height: 900 },
];

export default function Placement() {
  return (
    <section className="section split">
      <div className="stack">
        <span className="eyebrow">Где располагается</span>
        <h2>На крышке, в стороне от отверстия для питья</h2>
        <ul className="dots">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <div className={styles.photos}>
        {photos.map((photo) => (
          <Image
            key={photo.src}
            className="photo"
            {...photo}
            sizes="(max-width: 720px) 50vw, 220px"
          />
        ))}
      </div>
    </section>
  );
}
