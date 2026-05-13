const faqs = [
  ["Qual o prazo de envio?", "Pedidos aprovados sao preparados em ate 24h uteis e enviados com rastreio."],
  ["Posso trocar?", "Sim. A primeira troca pode ser solicitada em ate 30 dias, desde que a peca esteja sem uso."],
  ["Como escolho meu tamanho?", "Cada produto possui grade de tamanhos. No MVP, o atendimento por WhatsApp ajuda na recomendacao."],
  ["O checkout Stripe ja esta pronto?", "A rota esta estruturada. Para ativar pagamento real, configure STRIPE_SECRET_KEY no ambiente."]
];

export default function FaqPage() {
  return (
    <section className="container-premium py-16">
      <p className="font-semibold text-royal">FAQ</p>
      <h1 className="mt-3 font-display text-5xl font-extrabold tracking-[-0.02em] text-ink">Perguntas frequentes.</h1>
      <div className="mt-10 grid gap-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="rounded-lg border border-line p-5">
            <summary className="cursor-pointer font-semibold text-ink">{question}</summary>
            <p className="mt-3 text-steel">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
