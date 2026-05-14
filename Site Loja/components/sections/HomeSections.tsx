"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/commerce/ProductCard";
import { categories, getFeaturedProducts } from "@/lib/products";

export function HomeSections() {
  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="container-premium grid min-h-[calc(100dvh-4rem)] items-center gap-10 py-10 md:grid-cols-[1fr_0.92fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mb-5 inline-flex rounded-full border border-line px-4 py-2 text-sm font-semibold text-royal">Nova colecao masculina premium</p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl">
              Vista presenca. Ganhe tempo. Compre melhor.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-steel">
              Pecas masculinas minimalistas para homens 30+ que querem um guarda-roupa mais inteligente, elegante e pronto para qualquer compromisso.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/catalogo" className="inline-flex items-center justify-center gap-2 rounded-full bg-royal px-7 py-4 font-semibold text-white shadow-blue transition hover:bg-ink">
                Comprar agora <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/produto/overshirt-executiva-navy" className="inline-flex items-center justify-center rounded-full border border-line px-7 py-4 font-semibold text-ink transition hover:border-ink">
                Ver peca principal
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              <Metric value="4.9/5" label="avaliacao media" />
              <Metric value="24h" label="envio rapido" />
              <Metric value="30d" label="troca facil" />
            </div>
          </motion.div>
          <motion.div className="relative min-h-[520px] overflow-hidden rounded-lg bg-ink" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <Image src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1400&q=90" alt="Homem usando roupa masculina premium J.VISION" fill priority className="object-cover opacity-90" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/40 to-transparent p-6 text-white">
              <p className="text-sm text-white/70">Drop 01</p>
              <p className="mt-1 text-2xl font-semibold">Essenciais urbanos para rotina de alta performance.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-line bg-cloud py-5">
        <div className="container-premium grid gap-4 text-sm font-medium text-graphite sm:grid-cols-2 lg:grid-cols-4">
          <Benefit icon={<Truck />} title="Frete rapido" />
          <Benefit icon={<ShieldCheck />} title="Pagamento seguro" />
          <Benefit icon={<PackageCheck />} title="Troca em 30 dias" />
          <Benefit icon={<BadgeCheck />} title="Curadoria premium" />
        </div>
      </section>

      <section className="container-premium py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-semibold text-royal">Produtos em destaque</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.02em] text-ink">Pecas que resolvem o guarda-roupa.</h2>
          </div>
          <Link href="/catalogo" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-royal">
            Ver catalogo <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {getFeaturedProducts().map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="container-premium pb-20">
        <div className="grid gap-5 md:grid-cols-4">
          {categories.map((category) => (
            <Link key={category} href={`/catalogo?categoria=${category}`} className="rounded-lg border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-premium">
              <Sparkles className="mb-8 h-6 w-6 text-royal" />
              <h3 className="text-xl font-semibold text-ink">{category}</h3>
              <p className="mt-2 text-sm text-steel">Selecao enxuta, facil de comprar e combinar.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="container-premium grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-semibold text-white/60">Oferta de lancamento</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.02em]">Monte 3 looks com desconto progressivo.</h2>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="text-lg leading-8 text-white/75">Compre 2 pecas e ganhe 10%. Compre 3 ou mais e ganhe 15%. O desconto aparece no checkout em campanhas configuradas no Stripe.</p>
            <Link href="/catalogo" className="mt-6 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-royal hover:text-white">
              Montar meu look
            </Link>
          </div>
        </div>
      </section>

      <section className="container-premium py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {["Caimento impecavel, sem parecer que estou tentando demais.", "Entrega rapida e tecido acima do esperado.", "Comprei para trabalho e acabei usando no fim de semana tambem."].map((quote, index) => (
            <figure key={quote} className="rounded-lg border border-line bg-white p-6">
              <div className="mb-4 flex text-royal">★★★★★</div>
              <blockquote className="text-lg font-medium leading-7 text-ink">"{quote}"</blockquote>
              <figcaption className="mt-5 text-sm text-steel">Cliente J.VISION #{index + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-ink">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-steel">{label}</p>
    </div>
  );
}

function Benefit({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-royal [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      <span>{title}</span>
    </div>
  );
}
