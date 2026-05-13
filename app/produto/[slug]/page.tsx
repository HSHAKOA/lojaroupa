import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/commerce/ProductDetails";
import { ProductCard } from "@/components/commerce/ProductCard";
import { getProductBySlug, products } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      title: product.name,
      description: product.summary,
      images: product.images
    }
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <div className="container-premium py-10">
      <ProductDetails product={product} />
      <section className="py-16">
        <p className="font-semibold text-royal">Combine com</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.02em] text-ink">Upsell e cross sell inteligente</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
    </div>
  );
}
