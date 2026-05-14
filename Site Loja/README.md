# J.VISION Premium Store

Loja virtual premium para roupas masculinas, criada com Next.js, Tailwind, Framer Motion e TypeScript.

## Como usar

```bash
npm install
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Variaveis de ambiente

Crie `.env.local` com base em `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_replace_me
STRIPE_SECRET_KEY=sk_test_replace_me
```

## Etapas entregues

1. Branding: `docs/01-branding.md`
2. Estrutura: `docs/02-estrutura.md`
3. Wireframe: `docs/03-wireframe.md`
4. UI: `docs/04-ui-componentes.md`
5. Componentes: `components/`
6. Backend: `app/api/checkout/route.ts`
7. Checkout: `app/checkout/page.tsx`
8. SEO: `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
9. Deploy: `docs/09-deploy.md`

## Funcionalidades iniciais

- Home premium com hero, beneficios, produtos, categorias, banner e avaliacoes.
- Catalogo com busca, filtro e ordenacao.
- Produto com galeria, zoom por hover, variacoes, compra, upsell e cross sell.
- Carrinho lateral animado.
- Pagina de carrinho.
- Checkout com integracao Stripe estruturada.
- WhatsApp configuravel.
- Favoritos em `localStorage`.
- SEO tecnico inicial.
