"use client";

import Link from "next/link";
import { formatCurrency, getProductById } from "@/lib/products";
import { useStore } from "@/components/commerce/StoreProvider";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useStore();
  const subtotal = cartItems.reduce((total, item) => total + (getProductById(item.productId)?.price || 0) * item.quantity, 0);

  return (
    <section className="container-premium py-12">
      <p className="font-semibold text-royal">Carrinho</p>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-[-0.02em] text-ink">Revise seu pedido.</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-4">
          {cartItems.length === 0 && <p className="rounded-lg border border-line p-6 text-steel">Seu carrinho esta vazio.</p>}
          {cartItems.map((item) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            return (
              <div key={`${item.productId}-${item.size}-${item.color}`} className="rounded-lg border border-line p-5">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <h2 className="font-semibold text-ink">{product.name}</h2>
                    <p className="mt-1 text-sm text-steel">{item.size} / {item.color}</p>
                  </div>
                  <strong>{formatCurrency(product.price * item.quantity)}</strong>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <button className="rounded-full border border-line px-4 py-2" onClick={() => updateQuantity(item.productId, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="rounded-full border border-line px-4 py-2" onClick={() => updateQuantity(item.productId, item.quantity + 1)}>+</button>
                  <button className="ml-auto text-sm font-semibold text-steel hover:text-ink" onClick={() => removeFromCart(item.productId)}>Remover</button>
                </div>
              </div>
            );
          })}
        </div>
        <aside className="h-fit rounded-lg border border-line p-5">
          <div className="flex justify-between text-lg font-bold">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <Link href="/checkout" className="mt-5 block rounded-full bg-royal px-6 py-4 text-center font-semibold text-white shadow-blue transition hover:bg-ink">
            Ir para checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
