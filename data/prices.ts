export type ScaleRow = {
  label: string;
  note?: string;
  one: number;
  oldOne?: number;
  highlight?: boolean;
};

export type PriceLine = { label: string; price: string };

// Размер пробной партии — используется в шагах, условиях и финальном блоке
export const trialQuantity = 100;

export const scale: ScaleRow[] = [
  { label: 'Пробная партия', note: '100 шт, скидка на первый заказ',
    one: 120, oldOne: 150, highlight: true },
  { label: 'До 200 шт', one: 150 },
  { label: '200–500 шт', one: 120 },
  { label: '500–1 500 шт', note: 'максимальный объём', one: 110, highlight: true },
];

export const customExtras: PriceLine[] = [
  { label: 'Кастом до 1,5 × 2 см', price: '+15 тг' },
  { label: 'Размер до 2 × 2,5 см', price: '+25 тг' },
  { label: 'Размер до 3 × 3 см', price: '+50 тг' },
];

export const designAndDelivery: PriceLine[] = [
  { label: 'Дизайн одной фигурки, 2–3 правки', price: '12 000 тг' },
  { label: 'Набор из 4 дизайнов', price: '40 000 тг' },
  { label: 'Договор на квартал от 2 000 шт', price: '1-й дизайн бесплатно' },
  { label: 'Доставка партии до 500 шт', price: '2 000 тг' },
  { label: 'Доставка партии от 500 шт', price: 'бесплатно' },
];

const numberFormat = new Intl.NumberFormat('ru-RU');

// «150 тг» с неразрывным пробелом, тысячи через пробел
export function formatPrice(value: number): string {
  return `${numberFormat.format(value)} тг`;
}

export const trialRow = scale[0];
export const regularRow = scale[1];
export const bestRow = scale[scale.length - 1];

// Пример цены напитка для сравнения в блоке «Что вы получаете»
export const drinkPriceExample = 1500;
