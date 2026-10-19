import {
  customExtras,
  designAndDelivery,
  formatPrice,
  scale,
  trialQuantity,
  type PriceLine,
} from "@/data/prices";
import styles from "./Pricing.module.css";

const terms = [
  { term: "Материал", value: "Пластик, в один или несколько цветов" },
  { term: "Крепление", value: "Липучка на крышку стакана" },
  { term: "Пробная партия", value: `${trialQuantity} фигурок, готово за неделю` },
  {
    term: "Срок большего заказа",
    value: "Зависит от количества и размера фигурки, назову точно под ваш объём",
  },
];

function Price({ value, old }: { value: number; old?: number }) {
  return (
    <>
      {old !== undefined && <s className={styles.old}>{formatPrice(old)}</s>}
      <span>{formatPrice(value)}</span>
    </>
  );
}

function PriceCard({ title, lines }: { title: string; lines: PriceLine[] }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <dl className={styles.lines}>
        {lines.map((line) => (
          <div key={line.label}>
            <dt>{line.label}</dt>
            <dd>{line.price}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="section">
      <span className="eyebrow">Цена</span>
      <h2>Сколько стоит фигурка</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Объём</th>
            <th scope="col">За 1 шт</th>
          </tr>
        </thead>
        <tbody>
          {scale.map((row) => (
            <tr key={row.label} className={row.highlight ? styles.highlight : undefined}>
              <th scope="row">
                {row.label}
                {row.note && <span className={styles.rowNote}>{row.note}</span>}
              </th>
              <td>
                <Price value={row.one} old={row.oldOne} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.cards}>
        <PriceCard title="Своя фигурка" lines={customExtras} />
        <PriceCard title="Дизайн и доставка" lines={designAndDelivery} />
      </div>

      <h3>Условия</h3>
      <dl className={styles.terms}>
        {terms.map((item) => (
          <div key={item.term}>
            <dt>{item.term}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
