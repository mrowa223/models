export type ScaleRow = {
  label: string;
  note?: string;
  one: number;
  oldOne?: number;
  highlight?: boolean;
};

// price — число в тенге (форматируется в вёрстке) или готовый текст вроде «бесплатно»
export type PriceLine = { label: string; price: number | string; plus?: boolean };

// Размер пробной партии — используется в шагах, условиях и финальном блоке
export const trialQuantity = 100;

export const scale: ScaleRow[] = [
  { label: 'Пробная партия', note: '100 шт, скидка на первый заказ',
    one: 110, oldOne: 130, highlight: true },
  { label: '200–500 шт', one: 130 },
  { label: '500–1 500 шт', note: 'максимальный объём', one: 115, highlight: true },
];

export const customExtras: PriceLine[] = [
  { label: 'Кастом до 1,5 × 2 см', price: 15, plus: true },
  { label: 'Размер до 2 × 2,5 см', price: 25, plus: true },
  { label: 'Размер до 3 × 3 см', price: 50, plus: true },
];

export const designAndDelivery: PriceLine[] = [
  { label: 'Дизайн одной фигурки, 2–3 правки', price: 12000 },
  { label: 'Набор из 4 дизайнов', price: 40000 },
  { label: 'Заказ от 1 000 шт', price: '1-й дизайн бесплатно' },
  { label: 'Доставка партии до 500 шт', price: 2000 },
  { label: 'Доставка партии от 500 шт', price: 'бесплатно' },
];

const numberFormat = new Intl.NumberFormat('ru-RU');

// Цифры не отрываются от соседних цифр и единиц: «2 000 шт» не переносится посередине
export function keepNumbers(text: string): string {
  return text.replace(/(\d) (?=\d|шт|см|тг)/g, "$1\u00a0");
}

export function formatLinePrice(line: PriceLine): string {
  if (typeof line.price === "string") return line.price;
  return `${line.plus ? "+" : ""}${formatPrice(line.price)}`;
}

// «150 тг» с неразрывным пробелом, тысячи через пробел
export function formatPrice(value: number): string {
  return `${numberFormat.format(value)} тг`;
}

export const trialRow = scale[0];
export const regularRow = scale[1];
export const bestRow = scale[scale.length - 1];

// Пример цены напитка для сравнения в блоке «Что вы получаете»
export const drinkPriceExample = 1500;
