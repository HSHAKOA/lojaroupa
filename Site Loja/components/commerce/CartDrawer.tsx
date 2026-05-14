"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { formatCurrency, getProductById } from "@/lib/products";
import { useStore } from "./StoreProvider";

export function CartDrawer() {
  const { cartItems, closeCart, isCartOpen, removeFromCart, updateQuantity } = useStore();
  const subtotal = cartItems.reduce((total, item) => total + (getProductById(item.productId)?.price || 0) * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.button className="fixed inset-0 z-40 bg-ink/45 backdrop-blur-sm" onClick={closeCart} aria-label="Fechar carrinho" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside className="fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-white shadow-premium" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 260 }}>
            <div className="flex items-center justify-between border-b border-line p-5">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-royal" />
                <h2 className="font-semibold text-ink">Carrinho</h2>
              </div>
              <button className="rounded-full p-2 hover:bg-cloud" onClick={closeCart} aria-label="Fechar">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              {cartItems.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <p className="font-semibold text-ink">Seu carrinho esta vazio.</p>
                    <p className="mt-2 text-sm text-steel">Escolha uma peca premium para continuar.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const product = getProductById(item.productId);
                    if (!product) return null;
                    return (
                      <div key={`${item.productId}-${item.size}-${item.color}`} className="rounded-lg border border-line p-4">
                        <div className="flex justify-between gap-4">
                          <div>
                            <p className="font-medium text-ink">{product.name}</p>
                            <p className="mt-1 text-sm text-steel">{item.size} / {item.color}</p>
                          </div>
                          <button className="text-sm font-medium text-steel hover:text-ink" onClick={() => removeFromCart(item.productId)}>
                            Remover
                          </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-line">
                            <button className="p-2" onClick={() => updateQuantity(item.productId, item.quantity - 1)} aria-label="Diminuir">
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button className="p-2" onClick={() => updateQuantity(item.productId, item.quantity + 1)} aria-label="Aumentar">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="font-semibold text-ink">{formatCurrency(product.price * item.quantity)}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="border-t border-line p-5">
              <div className="mb-4 flex items-center justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <Link href="/checkout" onClick={closeCart} className="block rounded-full bg-royal px-6 py-4 text-center font-semibold text-white shadow-blue transition hover:bg-ink">
                Finalizar compra
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
