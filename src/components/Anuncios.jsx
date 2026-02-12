export default function Anuncios() {
  return (
    <section id="anuncios" className="section section-anuncios">
      <div className="container">
        <h2 className="section-title color-dourado">Anúncios</h2>

        <div className="anuncios-grid">
          {/* Card Carnaval */}
          <article className="anuncio-card anuncio-carnaval">
            <div className="anuncio-card-header">
              <span className="anuncio-badge">Feriado</span>
              <h3 className="anuncio-card-title">🎭 Carnaval 2026</h3>
            </div>
            <div className="anuncio-card-body">
              <p>
                Informamos aos nossos queridos clientes sobre o <strong>funcionamento
                da loja durante o feriado de Carnaval</strong>:
              </p>
              <ul className="anuncio-horarios">
                <li>
                  <span className="anuncio-data">14/02 (Sábado)</span>
                  <span className="anuncio-status anuncio-status--aberto">Aberto — 9h às 18h</span>
                </li>
                <li>
                  <span className="anuncio-data">15/02 (Domingo)</span>
                  <span className="anuncio-status anuncio-status--fechado">Fechado</span>
                </li>
                <li>
                  <span className="anuncio-data">16/02 (Segunda)</span>
                  <span className="anuncio-status anuncio-status--fechado">Fechado</span>
                </li>
                <li>
                  <span className="anuncio-data">17/02 (Terça de Carnaval)</span>
                  <span className="anuncio-status anuncio-status--fechado">Fechado</span>
                </li>
                <li>
                  <span className="anuncio-data">18/02 (Quarta de Cinzas)</span>
                  <span className="anuncio-status anuncio-status--aberto">Aberto — a partir das 13h</span>
                </li>
              </ul>
              <p className="anuncio-nota">
                A partir de <strong>19/02 (Quinta-feira)</strong>, retornamos ao horário normal de funcionamento.
              </p>
              <p className="anuncio-despedida">
                Bom Carnaval a todos! 🎉
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
