import { IMAGES, LINKS, CONTATO } from '../config'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-logo">
            <img
              src={IMAGES.logo}
              alt="Bugu Delícias"
              className="logo-branco"
              width={190}
              height={190}
            />
          </div>
          <div className="footer-col">
            <h4>Redes sociais</h4>
            <div className="social-links">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a href={LINKS.google} aria-label="Google">
                <i className="fab fa-google" />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <a
              href={LINKS.whatsapp}
              className="footer-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp" /> {CONTATO.telefone}
            </a>
          </div>
          <div className="footer-col">
            <h4>Localização</h4>
            <p>
              {CONTATO.endereco}
              <br />
              {CONTATO.cidade}
              <br />
              {CONTATO.cep}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
