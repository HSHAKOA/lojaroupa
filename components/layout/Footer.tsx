import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container-premium grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-display text-xl font-extrabold tracking-[0.18em]">
            J.VISION
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
            Roupas masculinas premium para homens que valorizam presenca, conforto e decisao rapida na rotina.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-royal" href={getWhatsAppUrl()} aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-royal" href="https://instagram.com" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <FooterColumn title="Loja" links={[["Catalogo", "/catalogo"], ["Checkout", "/checkout"], ["FAQ", "/faq"]]} />
        <FooterColumn title="Marca" links={[["Sobre", "/sobre"], ["Contato", "/contato"], ["Politicas", "/faq"]]} />
        <div>
          <h3 className="font-semibold">Contato</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/65">
            <a href="mailto:contato@jvision.com.br" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" /> contato@jvision.com.br
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Sao Paulo, Brasil
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45">
        © 2026 J.VISION. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-white/65">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
