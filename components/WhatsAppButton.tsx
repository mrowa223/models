import { whatsappUrl } from "@/data/contacts";
import styles from "./WhatsAppButton.module.css";

type Props = {
  label?: string;
  tone?: "accent" | "inverse" | "band";
  sticky?: boolean;
  // на телефоне эту кнопку заменяет закреплённая
  desktopOnly?: boolean;
  className?: string;
  href?: string;
};

export default function WhatsAppButton({ label = "Написать в WhatsApp", tone = "accent", sticky, desktopOnly, className, href = whatsappUrl }: Props) {
  return (
    <a
      className={`${styles.button} ${styles[tone]} ${sticky ? styles.sticky : ""} ${desktopOnly ? styles.desktopOnly : ""} ${className ?? ""}`}
      href={href}
      target="_blank"
      rel="noopener"
    >
      {label}
      <span className="sr-only"> (откроется WhatsApp)</span>
    </a>
  );
}
