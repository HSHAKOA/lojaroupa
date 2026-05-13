# 6. Backend e 7. Checkout

## Backend atual
O backend inicial usa Route Handler do Next.js em `app/api/checkout/route.ts`.

## Checkout Stripe
Fluxo:
1. Frontend envia itens do carrinho para `/api/checkout`.
2. API valida itens.
3. API cria uma Stripe Checkout Session.
4. Usuario e redirecionado para Stripe.
5. Stripe retorna para `success_url` ou `cancel_url`.

## Variaveis
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
STRIPE_SECRET_KEY=sk_test_replace_me
```

## Evolucao recomendada
- Persistir pedidos em banco.
- Criar webhook Stripe para confirmar pagamento.
- Adicionar calculo real de frete.
- Adicionar login com provedor seguro.
- Criar painel administrativo.
