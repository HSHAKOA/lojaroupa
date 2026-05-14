import { Mail, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";

export default function ContactPage() {
  return (
    <section className="container-premium py-16">
      <p className="font-semibold text-royal">Contato</p>
      <h1 className="mt-3 font-display text-5xl font-extrabold tracking-[-0.02em] text-ink">Atendimento direto e rapido.</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <a href={getWhatsAppUrl()} className="rounded-lg border border-line p-6 transition hover:shadow-premium">
          <MessageCircle className="h-6 w-6 text-royal" />
          <h2 className="mt-5 text-xl font-semibold text-ink">WhatsApp</h2>
          <p className="mt-2 text-steel">Ajuda com tamanho, troca, prazo e finalizacao do pedido.</p>
        </a>
        <a href="mailto:contato@jvision.com.br" className="rounded-lg border border-line p-6 transition hover:shadow-premium">
          <Mail className="h-6 w-6 text-royal" />
          <h2 className="mt-5 text-xl font-semibold text-ink">E-mail</h2>
          <p className="mt-2 text-steel">contato@jvision.com.br</p>
        </a>
      </div>
    </section>
  );
}
