import { IMAGES, LINKS, CONTATO } from '../config'

const BG_IMAGE = '/images/Bugu%20Ambiente.jpeg'

const HORARIOS = [
  { data: '14/02', dia: 'Sábado', status: 'aberto', info: '9h às 18h' },
  { data: '15/02', dia: 'Domingo', status: 'fechado', info: 'Fechado' },
  { data: '16/02', dia: 'Segunda', status: 'fechado', info: 'Fechado' },
  { data: '17/02', dia: 'Terça de Carnaval', status: 'fechado', info: 'Fechado' },
  { data: '18/02', dia: 'Quarta de Cinzas', status: 'fechado', info: 'Fechado' },
]

/* Confete individual */
function Confetti({ delay, left, color, size, duration }) {
  return (
    <div
      className="cv-confetti"
      style={{
        '--delay': `${delay}s`,
        '--left': `${left}%`,
        '--color': color,
        '--size': `${size}px`,
        '--duration': `${duration}s`,
      }}
    />
  )
}

function ConfettiRain() {
  const confettiColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#A78BFA', '#FB923C', '#F472B6', '#34D399', '#FBBF24']
  const confettiItems = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 8,
    left: Math.random() * 100,
    color: confettiColors[i % confettiColors.length],
    size: 5 + Math.random() * 7,
    duration: 4 + Math.random() * 6,
  }))

  return (
    <div className="cv-confetti-container" aria-hidden="true">
      {confettiItems.map((c) => (
        <Confetti key={c.id} {...c} />
      ))}
    </div>
  )
}

export default function CarnavalPage() {
  return (
    <div className="cv-page">
      {/* Fundo */}
      <div className="cv-bg-fixed">
        <div className="cv-bg-image" style={{ backgroundImage: `url(${BG_IMAGE})` }} />
        <div className="cv-bg-overlay" />
      </div>

      <ConfettiRain />

      {/* ========== LAYOUT SINGLE SCREEN ========== */}
      <main className="cv-main">
        <div className="cv-layout">

          {/* COLUNA ESQUERDA - Branding */}
          <div className="cv-brand">
            <img
              src={IMAGES.logo}
              alt="Bugu Delícias"
              className="cv-logo logo-branco"
              width={160}
              height={160}
            />
            <div className="cv-badge">Feriado</div>
            <h1 className="cv-title">
              <span className="cv-emoji">🎭</span>
              Carnaval<br />2026
            </h1>
            <p className="cv-subtitle">
              Confira o funcionamento da loja durante o feriado de Carnaval
            </p>

            {/* Contato (desktop) */}
            <div className="cv-contact cv-contact--desktop">
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="cv-contact-btn">
                <i className="fab fa-whatsapp" /> {CONTATO.telefone}
              </a>
              <div className="cv-contact-social">
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA - Card de horários */}
          <div className="cv-glass-card">
            <div className="cv-glass-header">
              <h2 className="cv-glass-title">🎭 Funcionamento no Carnaval</h2>
              <p className="cv-glass-desc">
                Informamos aos nossos queridos clientes sobre o{' '}
                <strong>funcionamento da loja</strong>:
              </p>
            </div>

            <div className="cv-glass-body">
              <div className="cv-timeline">
                {HORARIOS.map((h, i) => (
                  <div
                    key={h.data}
                    className={`cv-tl-item cv-tl-item--${h.status}`}
                    style={{ '--i': i }}
                  >
                    <div className="cv-tl-dot" />
                    <div className="cv-tl-row">
                      <div className="cv-tl-date">
                        <span className="cv-tl-num">{h.data}</span>
                        <span className="cv-tl-day">{h.dia}</span>
                      </div>
                      <div className={`cv-tl-status cv-tl-status--${h.status}`}>
                        {h.status === 'aberto' ? (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                            Aberto — {h.info}
                          </>
                        ) : (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            Fechado
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cv-note">
                <svg className="cv-note-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                <p>A partir de <strong>19/02 (Quinta-feira)</strong>, retornamos ao horário normal.</p>
              </div>

              <div className="cv-farewell">
                <p>Bom Carnaval a todos! 🎉</p>
              </div>
            </div>
          </div>

        </div>

        {/* Contato (mobile) */}
        <div className="cv-contact cv-contact--mobile">
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="cv-contact-btn">
            <i className="fab fa-whatsapp" /> {CONTATO.telefone}
          </a>
          <div className="cv-contact-social">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          </div>
        </div>
      </main>
    </div>
  )
}
