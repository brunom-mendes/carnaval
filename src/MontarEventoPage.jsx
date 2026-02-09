import { IMAGES } from './config'
import MontarEvento from './components/MontarEvento'

export default function MontarEventoPage() {
  return (
    <div className="montar-page">
      <header className="montar-page-header">
        <div className="container montar-page-header-inner">
          <a href="/" className="montar-page-logo">
            <img
              src={IMAGES.logo}
              alt="Bugu Delícias"
              className="logo-branco"
              width="48"
              height="48"
            />
          </a>
          <span className="montar-page-brand">Bugu Delícias</span>
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
