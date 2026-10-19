import Image from "next/image";
import lidCup from "@/assets/img/lid-cup.webp";
import lidTop from "@/assets/img/lid-top.webp";
import styles from "./Placement.module.css";

const points = [
  "Фигурка стоит на крышке стакана и держится на липучке.",
  "Бариста приклеивает её за секунду, это не замедляет выдачу.",
  "Гость легко снимает фигурку и забирает с собой.",
];

const photos = [
  { src: lidCup, alt: "Чашечка с латте-артом на крышке стакана" },
  { src: lidTop, alt: "Мишка и чашечки на крышке, вид сверху" },
];

export default function Placement() {
  return (
    <section className="section split">
      <div className="stack">
        <span className="eyebrow">Как крепится</span>
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
            key={photo.alt}
            className="photo"
            src={photo.src}
            alt={photo.alt}
            placeholder="blur"
            loading="eager"
            sizes="(max-width: 720px) 50vw, 220px"
          />
        ))}
      </div>
    </section>
  );
}
