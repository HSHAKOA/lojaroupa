export const siteConfig = {
  name: "J.VISION",
  description:
    "Roupas masculinas premium para homens 30+ que querem presenca profissional, conforto e compra sem friccao.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999"
};

export function getWhatsAppUrl(message = "Ola, quero ajuda para comprar na J.VISION.") {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
