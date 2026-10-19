const phone = "77472406885";

export function whatsappLink(text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const whatsappUrl = whatsappLink(
  "Здравствуйте! Хочу пробную партию фигурок на крышки стаканов для нашей кофейни.",
);

export const whatsappSeriesUrl = whatsappLink(
  "Здравствуйте! Хочу заказать свою серию фигурок для нашей кофейни.",
);
