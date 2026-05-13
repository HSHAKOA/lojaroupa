import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductById } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import type { CartItem } from "@/types/product";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export async function POST(request: Request) {
  const body = (await request.json()) as { items?: CartItem[] };
  const items = body.items || [];

  if (!items.length) {
    return NextResponse.json({ error: "Carrinho vazio." }, { status: 400 });
  }

  if (!stripeSecretKey || stripeSecretKey.includes("replace_me")) {
    return NextResponse.json({
      url: "/checkout?demo=stripe-configure-env",
      warning: "Configure STRIPE_SECRET_KEY para ativar checkout real."
    });
  }

  const stripe = new Stripe(stripeSecretKey);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: items.map((item) => {
      const product = getProductById(item.productId);
      if (!product) throw new Error(`Produto invalido: ${item.productId}`);
      return {
        quantity: item.quantity,
        price_data: {
          currency: "brl",
          unit_amount: product.price * 100,
          product_data: {
            name: `${product.name} - ${item.size} / ${item.color}`,
            images: [product.images[0]]
          }
        }
      };
    }),
    success_url: `${siteConfig.url}/checkout?status=success`,
    cancel_url: `${siteConfig.url}/checkout?status=cancel`
  });

  return NextResponse.json({ url: session.url });
}
