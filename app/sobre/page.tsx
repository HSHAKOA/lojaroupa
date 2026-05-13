export default function AboutPage() {
  return (
    <section className="container-premium py-16">
      <p className="font-semibold text-royal">Sobre a J.VISION</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold tracking-[-0.02em] text-ink">
        Moda masculina premium para quem prefere decisao, nao excesso.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
        A J.VISION nasce para homens 30+ que querem se vestir melhor com menos ruido. Criamos pecas minimalistas, versateis e bem acabadas para trabalho, viagens e compromissos sociais.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {["Design limpo", "Materiais melhores", "Compra sem friccao"].map((item) => (
          <div key={item} className="rounded-lg border border-line p-6">
            <h2 className="text-xl font-semibold text-ink">{item}</h2>
            <p className="mt-3 text-sm leading-6 text-steel">Cada decisao existe para aumentar confianca, reduzir duvida e entregar uma experiencia premium.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
