"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/commerce/ProductCard";
import { categories, products } from "@/lib/products";
import type { Category } from "@/types/product";

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "Todos">("Todos");
  const [sort, setSort] = useState("relevancia");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products
      .filter((product) => category === "Todos" || product.category === category)
      .filter((product) => {
        if (!normalizedQuery) return true;
        return [product.name, product.category, product.summary].join(" ").toLowerCase().includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (sort === "menor-preco") return a.price - b.price;
        if (sort === "maior-preco") return b.price - a.price;
        if (sort === "avaliacao") return b.rating - a.rating;
        return b.reviewCount - a.reviewCount;
      });
  }, [category, query, sort]);

  return (
    <div className="container-premium py-10">
      <div className="mb-8">
        <p className="font-semibold text-royal">Catalogo</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-[-0.02em] text-ink">Compra rapida, escolha precisa.</h1>
      </div>
      <div className="mb-8 grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm md:grid-cols-[1fr_220px_220px]">
        <label className="flex items-center gap-3 rounded-full bg-cloud px-4 py-3">
          <Search className="h-5 w-5 text-steel" />
          <input className="w-full bg-transparent outline-none" placeholder="Buscar camisa, jaqueta, calca..." value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <label className="flex items-center gap-3 rounded-full border border-line px-4 py-3">
          <SlidersHorizontal className="h-5 w-5 text-steel" />
          <select className="w-full bg-transparent outline-none" value={category} onChange={(event) => setCategory(event.target.value as Category | "Todos")}>
            <option>Todos</option>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <select className="rounded-full border border-line px-4 py-3 outline-none" value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="relevancia">Relevancia</option>
          <option value="avaliacao">Melhor avaliacao</option>
          <option value="menor-preco">Menor preco</option>
          <option value="maior-preco">Maior preco</option>
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
