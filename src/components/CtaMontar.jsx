export default function CtaMontar() {
  return (
    <section className="section-cta-montar">
      {/* Elementos decorativos animados */}
      <div className="cta-orb cta-orb-1" />
      <div className="cta-orb cta-orb-2" />
      <div className="cta-orb cta-orb-3" />
      <div className="cta-shimmer" />

      <div className="cta-montar-inner">
        <div className="cta-montar-texto">
          <span className="cta-badge">
            <i className="fas fa-star" />
            Exclusivo Bugu
          </span>
          <h2 className="cta-montar-titulo">
            E se você pudesse montar<br />
            <span className="cta-destaque">o evento dos seus sonhos</span><br />
            agora mesmo?
          </h2>
          <p className="cta-montar-descricao">
            Sem complicação. Escolha cada detalhe, personalize do seu jeito
            e receba um orçamento na hora — tudo em poucos cliques.
          </p>
          <div className="cta-proof">
            <div className="cta-proof-item">
              <i className="fas fa-check-circle" />
              <span>Gratuito e sem compromisso</span>
            </div>
            <div className="cta-proof-item">
              <i className="fas fa-check-circle" />
              <span>Resposta em minutos</span>
            </div>
            <div className="cta-proof-item">
              <i className="fas fa-check-circle" />
              <span>+1.300 eventos realizados</span>
            </div>
          </div>
        </div>

        <div className="cta-montar-action">
          <a
            href="/montar-evento.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cta-montar"
          >
            <span className="btn-cta-pulse" />
            <i className="fas fa-wand-magic-sparkles" />
            Montar meu evento agora
          </a>
          <p className="cta-micro">
            <i className="fas fa-bolt" /> Leva menos de 2 minutos
          </p>
        </div>
      </div>
    </section>
  )
}
