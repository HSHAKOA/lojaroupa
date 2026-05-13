import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import { StoreProvider } from "@/components/commerce/StoreProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "J.VISION | Roupas masculinas premium",
    template: "%s | J.VISION"
  },
  description: siteConfig.description,
  openGraph: {
    title: "J.VISION | Roupas masculinas premium",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <StoreProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </StoreProvider>
      </body>
    </html>
  );
}
