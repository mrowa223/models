import Image from "next/image";
import hero from "@/assets/img/hero.webp";
import WhatsAppButton from "./WhatsAppButton";
import styles from "./Hero.module.css";

const facts = [
  { value: "1,5 × 2 см", label: "размер мишки" },
  { value: "≈ 1,5 см", label: "размер чашечки" },
  { value: "Кастом", label: "своя фигурка под ваш бренд" },
];

export default function Hero() {
  return (
    <section className={`section split ${styles.hero}`}>
      <div className="stack">
        <span className={`eyebrow ${styles.eyebrow}`}>Идея для вашей кофейни</span>
        <h1>Маленькая 3Д фигурка на каждом стакане</h1>
        <p className={styles.lead}>
          Бариста приклеивает фигурку на крышку, гость получает её вместе с напитком и уносит с
          собой. Так обычный стакан становится вашим узнаваемым стаканом, а фигурки гости собирают в коллекцию.
        </p>
        <ul className={styles.facts}>
          {facts.map((fact) => (
            <li key={fact.label}>
              <b>{fact.value}</b>
              <span>{fact.label}</span>
            </li>
          ))}
        </ul>
        <WhatsAppButton tone="band" desktopOnly />
      </div>
      <Image
        className="photo"
        src={hero}
        alt="Стакан с мишкой и двумя чашечками на крышке"
        placeholder="blur"
        sizes="(max-width: 720px) 100vw, 440px"
        priority
      />
    </section>
  );
}
