"use client";

import { Heart, ShieldCheck, Star, Truck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { formatCurrency } from "@/lib/products";
import type { Product } from "@/types/product";
import { useStore } from "./StoreProvider";

export function ProductDetails({ product }: { product: Product }) {
  const [image, setImage] = useState(product.images[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const { addToCart, favoriteIds, toggleFavorite } = useStore();
  const isFavorite = favoriteIds.includes(product.id);

  return (
    <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="grid gap-4 md:grid-cols-[90px_1fr]">
        <div className="order-2 flex gap-3 md:order-1 md:flex-col">
          {product.images.map((item) => (
            <button key={item} className={`relative aspect-square w-20 overflow-hidden rounded-lg border ${image === item ? "border-royal" : "border-line"}`} onClick={() => setImage(item)}>
              <Image src={item} alt={product.name} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
        <div className="group relative order-1 aspect-[4/5] overflow-hidden rounded-lg bg-cloud md:order-2">
          <Image src={image} alt={product.name} fill priority className="object-cover transition duration-500 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 50vw" />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-ink backdrop-blur">Zoom ao passar o mouse</span>
        </div>
      </div>
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="flex items-center gap-2 text-sm text-graphite">
          <Star className="h-4 w-4 fill-royal text-royal" />
          {product.rating} ({product.reviewCount} avaliacoes)
        </div>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.02em] text-ink">{product.name}</h1>
        <p className="mt-4 text-lg leading-8 text-steel">{product.description}</p>
        <div className="mt-6 flex items-end gap-3">
          <p className="text-3xl font-bold text-ink">{formatCurrency(product.price)}</p>
          {product.compareAtPrice && <p className="text-lg text-neutral-400 line-through">{formatCurrency(product.compareAtPrice)}</p>}
        </div>
        <div className="mt-8 space-y-6">
          <Option title="Tamanho" options={product.sizes} selected={size} onSelect={setSize} />
          <Option title="Cor" options={product.colors} selected={color} onSelect={setColor} />
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_56px]">
          <button className="rounded-full bg-royal px-8 py-4 font-semibold text-white shadow-blue transition hover:bg-ink" onClick={() => addToCart({ productId: product.id, quantity: 1, size, color })}>
            Comprar agora
          </button>
          <button className="grid h-14 place-items-center rounded-full border border-line transition hover:border-ink" onClick={() => toggleFavorite(product.id)} aria-label="Favoritar">
            <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="mt-8 grid gap-3 rounded-lg border border-line p-5 text-sm text-graphite">
          <span className="flex items-center gap-2"><Truck className="h-5 w-5 text-royal" /> Envio rapido com rastreio</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-royal" /> Compra segura e troca em 30 dias</span>
        </div>
        <div className="mt-8">
          <h2 className="font-semibold text-ink">Especificacoes tecnicas</h2>
          <ul className="mt-3 grid gap-2 text-sm text-steel">
            {product.specs.map((spec) => <li key={spec}>- {spec}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Option({ title, options, selected, onSelect }: { title: string; options: string[]; selected: string; onSelect: (value: string) => void }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-ink">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button key={option} className={`rounded-full border px-4 py-2 text-sm font-medium ${selected === option ? "border-ink bg-ink text-white" : "border-line text-graphite hover:border-ink"}`} onClick={() => onSelect(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
