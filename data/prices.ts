export type ScaleRow = {
  label: string;
  note?: string;
  one: number;
  oldOne?: number;
  highlight?: boolean;
};

// Строка «название … цена»: число в тенге (форматируется в вёрстке) или готовый текст
export type PriceLine =
  | { label: string; price: number; plus?: boolean }
  | { label: string; text: string };

// Размер пробной партии и серии — используются в нескольких секциях
export const trialQuantity = 100;
export const seriesSize = 4;

export const trial = {
  label: 'Пробная партия',
  one: 110,
  oldOne: 130,
};

export const scale: ScaleRow[] = [
  { label: trial.label, note: `${trialQuantity} шт, скидка на первый заказ`,
    one: trial.one, oldOne: trial.oldOne, highlight: true },
  { label: 'До 499 шт', one: 130 },
  { label: '500–1 500 шт', note: 'максимальный объём', one: 105, highlight: true },
];

export const smallDelivery = 2000;

export const customExtras: PriceLine[] = [
  { label: 'Размер до 1,5 × 2 см', price: 15, plus: true },
  { label: 'Размер до 2 × 2,5 см', price: 25, plus: true },
  { label: 'Размер до 3 × 3 см', price: 50, plus: true },
];

export const designAndDelivery: PriceLine[] = [
  { label: 'Дизайн одной фигурки, 2–3 правки', price: 12000 },
  { label: 'Набор из 4 дизайнов', price: 40000 },
  { label: 'Заказ от 1 000 шт', text: '1-й дизайн бесплатно' },
  { label: 'Доставка партии до 499 шт', price: smallDelivery },
  { label: 'Доставка партии от 500 шт', text: 'бесплатно' },
];

const numberFormat = new Intl.NumberFormat('ru-RU');
const NBSP = ' ';

// «150 тг» с неразрывным пробелом, тысячи через пробел
export function formatPrice(value: number): string {
  return `${numberFormat.format(value)}${NBSP}тг`;
}

// Цифры не отрываются от соседних цифр и единиц: «2 000 шт» не переносится посередине
export function keepNumbers(text: string): string {
  return text.replace(/(\d) (?=\d|шт|см|тг)/g, `$1${NBSP}`);
}

export function formatLinePrice(line: PriceLine): string {
  if ('text' in line) return line.text;
  return `${line.plus ? '+' : ''}${formatPrice(line.price)}`;
}

export const trialCost = trialQuantity * trial.one;
export const trialTotal = trialCost + smallDelivery;

export const regularRow = scale[1];
export const bestRow = scale.reduce((best, row) => (row.one < best.one ? row : best));

// Пример цены напитка для сравнения в блоке «Что вы получаете»
export const drinkPriceExample = 1500;
