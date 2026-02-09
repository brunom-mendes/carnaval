import { IMAGES, LINKS } from './config'
import MontarEvento from './components/MontarEvento'

export default function MontarEventoPage() {
  return (
    <div className="montar-page">
      <header className="montar-page-header">
        <div className="container montar-page-header-inner">
          <div className="montar-page-left">
            <a href="/" className="montar-page-logo">
              <img
                src={IMAGES.logo}
                alt="Bugu Delícias"
                className="logo-branco"
                width="42"
                height="42"
              />
            </a>
            <span className="montar-page-brand">Bugu Delícias</span>
          </div>
          <div className="montar-page-right">
            <a href="/" className="montar-page-back">
              <i className="fas fa-arrow-left" /> Voltar ao site
            </a>
            <a
              href={LINKS.whatsapp}
              className="montar-page-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <MontarEvento />
      </main>

      <footer className="montar-page-footer">
        <p>Bugu Delícias &mdash; Taguatinga, Brasilia - DF</p>
      </footer>
    </div>
  )
}
