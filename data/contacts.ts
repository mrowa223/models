const phone = "77472406885";

export function whatsappLink(text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// Поля в сообщении помогают сразу посчитать заказ
export const whatsappUrl = whatsappLink(
  [
    "Здравствуйте! Хочу пробную партию фигурок на крышки стаканов.",
    "Кофейня и адрес: ",
    "Стаканов в день: ",
    "Фигурка (мишка / чашечка): ",
  ].join("\n"),
);

export const whatsappSeriesUrl = whatsappLink(
  [
    "Здравствуйте! Хочу свою серию фигурок для кофейни.",
    "Кофейня и адрес: ",
    "Стаканов в день: ",
    "Идея фигурок (логотип, маскот): ",
  ].join("\n"),
);
