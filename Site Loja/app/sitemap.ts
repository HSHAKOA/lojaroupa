import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/catalogo", "/checkout", "/sobre", "/contato", "/faq"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteConfig.url}/produto/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  return [...staticRoutes, ...productRoutes];
}
