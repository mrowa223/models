import { whatsappUrl } from "@/data/contacts";
import styles from "./WhatsAppButton.module.css";

type Props = {
  label?: string;
  tone?: "accent" | "inverse" | "band";
  sticky?: boolean;
  // на телефоне эту кнопку заменяет закреплённая
  desktopOnly?: boolean;
};

export default function WhatsAppButton({ label = "Написать в WhatsApp", tone = "accent", sticky, desktopOnly }: Props) {
  return (
    <a
      className={`${styles.button} ${styles[tone]} ${sticky ? styles.sticky : ""} ${desktopOnly ? styles.desktopOnly : ""}`}
      href={whatsappUrl}
      target="_blank"
      rel="noopener"
    >
      {label}
    </a>
  );
}
