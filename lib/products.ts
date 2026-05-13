import type { Category, Product } from "@/types/product";

export const categories: Category[] = ["Camisas", "Jaquetas", "Calcas", "Acessorios"];

export const products: Product[] = [
  {
    id: "jv-overshirt-navy",
    slug: "overshirt-executiva-navy",
    name: "Overshirt Executiva Navy",
    category: "Jaquetas",
    price: 489,
    compareAtPrice: 579,
    rating: 4.9,
    reviewCount: 128,
    badge: "Mais vendida",
    summary: "Estrutura de jaqueta leve com acabamento limpo para rotina urbana.",
    description:
      "Uma overshirt premium para homens que querem presenca sem excesso. O tecido encorpado segura a silhueta, combina com jeans ou alfaiataria e funciona bem do escritorio ao jantar.",
    specs: ["Algodao premium com elastano", "Modelagem regular refinada", "Bolsos discretos", "Media gramatura respiravel"],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Navy", "Preto"],
    images: [
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1200&q=90"
    ]
  },
  {
    id: "jv-polo-black",
    slug: "polo-performance-preta",
    name: "Polo Performance Preta",
    category: "Camisas",
    price: 249,
    rating: 4.8,
    reviewCount: 94,
    badge: "Novo",
    summary: "Polo minimalista com toque frio, caimento firme e visual premium.",
    description:
      "A polo essencial da J.VISION entrega conforto tecnico e aparencia sofisticada. Ideal para compromissos longos, viagem e rotina de alta exigencia.",
    specs: ["Malha piquet tecnico", "Gola estruturada", "Nao deforma apos lavagem", "Protecao UV 30"],
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["Preto", "Branco", "Azul"],
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90"
    ]
  },
  {
    id: "jv-trouser-tech",
    slug: "calca-tech-tailoring",
    name: "Calca Tech Tailoring",
    category: "Calcas",
    price: 429,
    rating: 4.9,
    reviewCount: 76,
    summary: "Alfaiataria moderna com elasticidade e conforto para o dia inteiro.",
    description:
      "A calca Tech Tailoring une aparencia formal e conforto de roupa tecnica. A cintura limpa e o corte reto alongam a silhueta sem comprometer mobilidade.",
    specs: ["Stretch 4-way", "Bolsos faca discretos", "Secagem rapida", "Corte reto contemporaneo"],
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["Preto", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=90"
    ]
  },
  {
    id: "jv-shirt-white",
    slug: "camisa-premium-branca",
    name: "Camisa Premium Branca",
    category: "Camisas",
    price: 329,
    rating: 4.7,
    reviewCount: 112,
    summary: "Camisa branca essencial com estrutura elegante e toque macio.",
    description:
      "Uma camisa branca precisa resolver tudo: reuniao, viagem, evento e fim de semana. Esta versao traz tecido nobre, colarinho estavel e acabamento preciso.",
    specs: ["Algodao fio 80", "Colarinho italiano", "Botoes resinados", "Punho ajustavel"],
    sizes: ["P", "M", "G", "GG"],
    colors: ["Branco", "Azul"],
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=90"
    ]
  }
];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts() {
  return products.slice(0, 4);
}
