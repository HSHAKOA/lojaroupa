"use client";

import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/components/commerce/StoreProvider";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/catalogo", label: "Catalogo" },
  { href: "/sobre", label: "Sobre" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, favoriteIds, openCart } = useStore();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur-xl">
      <div className="container-premium flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-extrabold tracking-[0.18em] text-ink">
          J.VISION
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-graphite md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-royal">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Link href="/catalogo" className="grid h-10 w-10 place-items-center rounded-full hover:bg-cloud" aria-label="Buscar">
            <Search className="h-5 w-5" />
          </Link>
          <button className="hidden h-10 w-10 place-items-center rounded-full hover:bg-cloud sm:grid" aria-label="Login">
            <User className="h-5 w-5" />
          </button>
          <Link href="/catalogo?favoritos=1" className="relative hidden h-10 w-10 place-items-center rounded-full hover:bg-cloud sm:grid" aria-label="Favoritos">
            <Heart className="h-5 w-5" />
            {favoriteIds.length > 0 && <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-royal" />}
          </Link>
          <button className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-cloud" onClick={openCart} aria-label="Abrir carrinho">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-royal px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full hover:bg-cloud md:hidden" onClick={() => setIsMenuOpen((value) => !value)} aria-label="Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-line bg-white px-4 py-4 md:hidden">
          <nav className="grid gap-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 font-medium text-graphite hover:bg-cloud" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
