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

// Пороги и размеры — используются в нескольких секциях
export const trialQuantity = 100;
export const seriesSize = 4;
export const bulkFrom = 500;
export const bulkMax = 1500;
export const freeDesignFrom = 1000;

const NBSP = ' ';
const numberFormat = new Intl.NumberFormat('ru-RU');

// «150 тг» с неразрывным пробелом, тысячи через пробел
export function formatPrice(value: number): string {
  return `${numberFormat.format(value)}${NBSP}тг`;
}

export function formatCount(value: number): string {
  return `${numberFormat.format(value)}${NBSP}шт`;
}

export const trial: ScaleRow & { oldOne: number } = {
  label: 'Пробная партия',
  note: `${formatCount(trialQuantity)}, скидка на первый заказ`,
  one: 110,
  oldOne: 130,
  highlight: true,
};

export const regular: ScaleRow = {
  label: `До ${formatCount(bulkFrom - 1)}`,
  one: 130,
};

export const bulk: ScaleRow = {
  label: `${numberFormat.format(bulkFrom)}–${formatCount(bulkMax)}`,
  note: 'максимальный объём',
  one: 105,
  highlight: true,
};

export const scale: ScaleRow[] = [trial, regular, bulk];

export const smallDelivery = 2000;
export const designOne = 12000;
export const designSeries = 40000;

// Надбавка к цене шкалы за свою фигурку
export const customExtras: PriceLine[] = [
  { label: 'Размером с мишку, до 1,5 × 2 см', price: 15, plus: true },
  { label: 'До 2 × 2,5 см', price: 25, plus: true },
  { label: 'До 3 × 3 см', price: 50, plus: true },
];

export const designAndDelivery: PriceLine[] = [
  { label: 'Дизайн одной фигурки, 2–3 правки', price: designOne },
  { label: `Дизайн серии из ${seriesSize} фигурок`, price: designSeries },
  { label: `Заказ от ${formatCount(freeDesignFrom)}`, text: '1-й дизайн бесплатно' },
  { label: `Доставка партии до ${formatCount(bulkFrom - 1)}`, price: smallDelivery },
  { label: `Доставка партии от ${formatCount(bulkFrom)}`, text: 'бесплатно' },
];

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

// Пример цены напитка для сравнения в блоке «Что вы получаете»
export const drinkPriceExample = 1500;
