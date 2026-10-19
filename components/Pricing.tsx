import {
  customExtras,
  designAndDelivery,
  formatLinePrice,
  formatPrice,
  keepNumbers,
  scale,
  smallDelivery,
  trialCost,
  trialQuantity,
  trialTotal,
  type PriceLine,
} from "@/data/prices";
import WhatsAppButton from "./WhatsAppButton";
import styles from "./Pricing.module.css";

const terms = [
  { term: "Материал", value: "Пластик, в один или несколько цветов" },
  { term: "Крепление", value: "Липучка на крышку стакана" },
  {
    term: "Пробная партия",
    value: `${trialQuantity} фигурок, готово за неделю. ${formatPrice(trialCost)} + доставка ${formatPrice(smallDelivery)} = ${formatPrice(trialTotal)}`,
  },
  {
    term: "Срок большего заказа",
    value: "Зависит от количества и размера фигурки, назову точно под ваш объём",
  },
];

const scenarios = [
  "К части меню: детские напитки, авторский напиток или сезонное предложение.",
  "За серию: гость получает фигурку с напитком, а за собранную серию — напиток в подарок.",
  "Как добавку к напитку: гость доплачивает за фигурку, и она приносит вам доход, а не расход.",
];

function Price({ value, old }: { value: number; old?: number }) {
  return (
    <>
      {old !== undefined && (
        <s className={styles.old}>
          <span className="sr-only">Было </span>
          {formatPrice(old)}
        </s>
      )}
      <span>
        {old !== undefined && <span className="sr-only">Сейчас </span>}
        {formatPrice(value)}
      </span>
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
            <dt>{keepNumbers(line.label)}</dt>
            <dd>{formatLinePrice(line)}</dd>
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
                {keepNumbers(row.label)}
                {row.note && <span className={styles.rowNote}>{keepNumbers(row.note)}</span>}
              </th>
              <td>
                <Price value={row.one} old={row.oldOne} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.scenarios}>
        <h3>Не обязательно на каждый стакан</h3>
        <ul className="dots">
          {scenarios.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

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

      <WhatsAppButton
        label={`Заказать пробу за ${formatPrice(trialTotal)} с доставкой`}
        className={styles.cta}
      />
    </section>
  );
}
