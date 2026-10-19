import { whatsappSeriesUrl } from "@/data/contacts";
import {
  customExtras,
  designAndDelivery,
  designSeries,
  formatCount,
  formatCustomSizes,
  formatLinePrice,
  formatPrice,
  freeDesignFrom,
  seriesExample,
  bulk,
  bulkArgument,
  bulkFrom,
  formatNumber,
  keepNumbers,
  scale,
  seriesRange,
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
  { term: "Пробная партия", value: "Готова за неделю" },
  {
    term: "Срок большего заказа",
    value:
      "Зависит от количества и размера фигурки, назовём точно под ваш объём",
  },
];

const scenarios = [
  "Только к части меню: детские напитки, авторский напиток или сезонное предложение.",
  "За серию: гость получает фигурку с напитком, а за собранную серию - напиток в подарок.",
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

function PriceCard({
  title,
  note,
  lines,
}: {
  title: string;
  note?: string;
  lines: PriceLine[];
}) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      {note && <p className="muted">{note}</p>}
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
        <caption className="sr-only">
          Цена одной фигурки в зависимости от объёма
        </caption>
        <thead>
          <tr>
            <th scope="col">Объём</th>
            <th scope="col">За 1 шт</th>
          </tr>
        </thead>
        <tbody>
          {scale.map((row) => (
            <tr
              key={row.label}
              className={row.highlight ? styles.highlight : undefined}
            >
              <th scope="row">
                {keepNumbers(row.label)}
                {row.note && (
                  <span className={styles.rowNote}>
                    {keepNumbers(row.note)}
                  </span>
                )}
              </th>
              <td>
                <Price value={row.one} old={row.oldOne} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className={styles.argument}>
        {formatCount(bulkFrom)} обойдутся дешевле, чем{" "}
        {formatCount(bulkArgument.smallQuantity)}:{" "}
        {formatPrice(bulkArgument.big)} против {formatPrice(bulkArgument.small)}{" "}
        с доставкой.
      </p>

      <div className={styles.offers}>
        <div className={styles.offer} id="trial">
          <span className="eyebrow">Начать</span>
          <h3>Проба готовой фигурки</h3>
          <p className={styles.offerPrice}>{formatPrice(trialTotal)}</p>
          <p className="muted">
            {formatNumber(trialQuantity)}&nbsp;мишек или чашечек (
            {formatPrice(trialCost)}) и доставка ({formatPrice(smallDelivery)}).
            Проверяете, как гости принимают фигурку.
          </p>
          <WhatsAppButton label="Заказать пробу" />
        </div>
        <div className={`${styles.offer} ${styles.offerAccent}`} id="series">
          <span className="eyebrow">Под ваш бренд</span>
          <h3>Своя серия фигурок</h3>
          <p className={styles.offerPrice}>
            от {formatPrice(seriesExample.total)}{" "}
            <span>
              первая серия: {formatCount(seriesExample.quantity)} и дизайн{" "}
              {seriesRange} фигурок
            </span>
          </p>
          <p className={styles.example}>
            Печать: ({formatPrice(bulk.one)} +{" "}
            {formatPrice(seriesExample.extra)} за свою фигурку) ×{" "}
            {formatCount(seriesExample.quantity)} ={" "}
            {formatPrice(seriesExample.print)}. Дизайн серии -{" "}
            {formatPrice(designSeries)}. Доставка бесплатно.
          </p>
          <p className="muted">
            Цена своей фигурки зависит от её размера: {keepNumbers(formatCustomSizes())} к цене
            шкалы. При заказе от {formatCount(freeDesignFrom)} дизайн первой фигурки бесплатно.
          </p>
          <WhatsAppButton
            label="Обсудить свою серию"
            href={whatsappSeriesUrl}
          />
        </div>
      </div>

      <div className={styles.scenarios}>
        <h3>Не обязательно на каждый стакан</h3>
        <ul className={styles.scenarioList}>
          {scenarios.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <details className={styles.details}>
        <summary>Подробные цены и условия</summary>
        <div className={styles.detailsBody}>
          <div className={styles.cards}>
            <PriceCard
              title="Своя фигурка"
              note="Надбавка к цене шкалы за штуку"
              lines={customExtras}
            />
            <PriceCard title="Дизайн и доставка" lines={designAndDelivery} />
          </div>
          <dl className={styles.terms}>
            {terms.map((item) => (
              <div key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </details>
    </section>
  );
}
