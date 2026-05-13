"use client";

import { Heart, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/products";
import type { Product } from "@/types/product";
import { useStore } from "./StoreProvider";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, favoriteIds, toggleFavorite } = useStore();
  const isFavorite = favoriteIds.includes(product.id);

  return (
    <motion.article className="group relative overflow-hidden rounded-lg border border-line bg-white" whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <Link href={`/produto/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-cloud">
          <Image src={product.images[0]} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
          {product.badge && <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink shadow-sm">{product.badge}</span>}
        </div>
      </Link>
      <button className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition hover:bg-ink hover:text-white" onClick={() => toggleFavorite(product.id)} aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}>
        <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
      </button>
      <div className="space-y-3 p-4">
        <div className="flex items-center gap-1 text-sm text-graphite">
          <Star className="h-4 w-4 fill-royal text-royal" />
          <span>{product.rating}</span>
          <span className="text-neutral-400">({product.reviewCount})</span>
        </div>
        <div>
          <Link href={`/produto/${product.slug}`} className="font-semibold text-ink hover:text-royal">
            {product.name}
          </Link>
          <p className="mt-1 line-clamp-2 text-sm text-steel">{product.summary}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-ink">{formatCurrency(product.price)}</p>
            {product.compareAtPrice && <p className="text-xs text-neutral-400 line-through">{formatCurrency(product.compareAtPrice)}</p>}
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition hover:bg-royal" onClick={() => addToCart({ productId: product.id, quantity: 1, size: product.sizes[0], color: product.colors[0] })} aria-label="Adicionar ao carrinho">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
