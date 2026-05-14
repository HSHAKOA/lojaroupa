# 2. Estrutura

```text
app/
  api/checkout/route.ts
  catalogo/page.tsx
  checkout/page.tsx
  contato/page.tsx
  faq/page.tsx
  produto/[slug]/page.tsx
  sobre/page.tsx
  layout.tsx
  page.tsx
components/
  commerce/
  layout/
  sections/
lib/
  products.ts
  site.ts
types/
  product.ts
docs/
```

## Arquitetura
- `app`: rotas, SEO e paginas.
- `components`: UI reutilizavel.
- `lib`: dados, formatadores e configuracoes.
- `types`: contratos TypeScript.
- `docs`: estrategia e documentacao de produto.
