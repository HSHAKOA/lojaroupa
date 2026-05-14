"use client";

import { CreditCard, Lock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { formatCurrency, getProductById } from "@/lib/products";
import { getWhatsAppUrl } from "@/lib/site";
import { useStore } from "@/components/commerce/StoreProvider";

export default function CheckoutPage() {
  const { cartItems } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const subtotal = cartItems.reduce((total, item) => total + (getProductById(item.productId)?.price || 0) * item.quantity, 0);

  async function startCheckout() {
    setIsLoading(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems })
    });
    const data = await response.json();
    if (data.url) window.location.href = data.url;
    setIsLoading(false);
  }

  return (
    <div className="container-premium grid gap-8 py-10 lg:grid-cols-[1fr_420px]">
      <section>
        <p className="font-semibold text-royal">Checkout</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-[-0.02em] text-ink">Finalizacao rapida e segura.</h1>
        <div className="mt-8 grid gap-4 rounded-lg border border-line p-5">
          <label className="grid gap-2 text-sm font-medium text-graphite">
            Nome completo
            <input className="rounded-lg border border-line px-4 py-3 outline-none focus:border-royal" placeholder="Seu nome" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-graphite">
            E-mail
            <input className="rounded-lg border border-line px-4 py-3 outline-none focus:border-royal" placeholder="voce@email.com" type="email" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-graphite">
            CEP
            <input className="rounded-lg border border-line px-4 py-3 outline-none focus:border-royal" placeholder="00000-000" />
          </label>
        </div>
      </section>
      <aside className="h-fit rounded-lg border border-line bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-ink">Resumo do pedido</h2>
        <div className="mt-5 grid gap-4">
          {cartItems.length === 0 && <p className="text-sm text-steel">Seu carrinho esta vazio.</p>}
          {cartItems.map((item) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            return (
              <div key={`${item.productId}-${item.size}-${item.color}`} className="flex justify-between gap-4 text-sm">
                <span>{product.name} x {item.quantity}</span>
                <strong>{formatCurrency(product.price * item.quantity)}</strong>
              </div>
            );
          })}
        </div>
        <div className="mt-5 border-t border-line pt-5">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <button disabled={cartItems.length === 0 || isLoading} onClick={startCheckout} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-royal px-6 py-4 font-semibold text-white shadow-blue transition hover:bg-ink disabled:cursor-not-allowed disabled:bg-steel">
            <CreditCard className="h-5 w-5" /> {isLoading ? "Redirecionando..." : "Pagar com Stripe"}
          </button>
          <a href={getWhatsAppUrl("Ola, quero finalizar minha compra na J.VISION pelo WhatsApp.")} className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-4 font-semibold text-ink transition hover:border-ink">
            <MessageCircle className="h-5 w-5" /> Comprar pelo WhatsApp
          </a>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-steel">
            <Lock className="h-4 w-4" /> Pagamento criptografado
          </p>
        </div>
      </aside>
    </div>
  );
}
