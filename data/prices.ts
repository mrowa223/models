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

export function formatNumber(value: number): string {
  return numberFormat.format(value);
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
  note: 'за одну партию',
  one: 105,
  highlight: true,
};

export const scale: ScaleRow[] = [trial, regular, bulk];

export const smallDelivery = 2000;
export const designOne = 12000;
export const designSeries = 40000;

// Надбавка к цене шкалы за свою фигурку
export const customExtraSmall = 15;

export const customExtraLarge = 50;

export const customExtras: PriceLine[] = [
  { label: 'Размером с мишку, до 1,5 × 2 см', price: customExtraSmall, plus: true },
  { label: 'До 2 × 2,5 см', price: 25, plus: true },
  { label: 'До 3 × 3 см', price: customExtraLarge, plus: true },
];

export const designAndDelivery: PriceLine[] = [
  { label: 'Дизайн одной фигурки, 2–3 правки', price: designOne },
  { label: `Дизайн серии из ${seriesSize} фигурок`, price: designSeries },
  { label: `Заказ от ${formatCount(freeDesignFrom)}`, text: 'дизайн 1-й фигурки бесплатно' },
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

// Довод про порог опта: партия чуть меньше порога выходит дороже самого порога
export const bulkArgument = (() => {
  const smallQuantity = bulkFrom - 100;
  const small = smallQuantity * regular.one + smallDelivery;
  const big = bulkFrom * bulk.one;
  return { smallQuantity, small, big };
})();

// Пример первого заказа своей серии: партия от порога опта, фигурки размером с мишку
export const seriesExample = (() => {
  const quantity = bulkFrom;
  const extra = customExtraSmall;
  const print = quantity * (bulk.one + extra);
  return { quantity, extra, print, total: print + designSeries };
})();
export const trialTotal = trialCost + smallDelivery;

// Пример цены напитка для сравнения в блоке «Что вы получаете»
export const drinkPriceExample = 1500;
