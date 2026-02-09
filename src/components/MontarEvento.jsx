import { useState, useMemo } from 'react'
import { TIPOS_EVENTO, CATEGORIAS_ITENS, LINKS } from '../config'

const STEPS = ['tipo', 'itens', 'resumo']

export default function MontarEvento() {
  const [step, setStep] = useState(0)
  const [tipoEvento, setTipoEvento] = useState(null)
  const [itensSelecionados, setItensSelecionados] = useState({})
  const [categoriaAtiva, setCategoriaAtiva] = useState(CATEGORIAS_ITENS[0].id)

  /* ---------- helpers ---------- */

  const toggleItem = (itemId) => {
    setItensSelecionados((prev) => {
      const next = { ...prev }
      if (next[itemId]) {
        delete next[itemId]
      } else {
        // encontrar o item completo
        for (const cat of CATEGORIAS_ITENS) {
          const found = cat.itens.find((i) => i.id === itemId)
          if (found) {
            next[itemId] = { ...found, categoria: cat.nome }
            break
          }
        }
      }
      return next
    })
  }

  const totalSelecionados = Object.keys(itensSelecionados).length

  const resumoAgrupado = useMemo(() => {
    const grupos = {}
    Object.values(itensSelecionados).forEach((item) => {
      if (!grupos[item.categoria]) grupos[item.categoria] = []
      grupos[item.categoria].push(item)
    })
    return grupos
  }, [itensSelecionados])

  const tipoLabel = tipoEvento
    ? TIPOS_EVENTO.find((t) => t.id === tipoEvento)?.label
    : ''

  /* ---------- WhatsApp ---------- */

  const enviarWhatsApp = () => {
    const linhas = [`Olá! Gostaria de montar meu evento 🎉`]
    linhas.push(`\n*Tipo de evento:* ${tipoLabel}`)
    linhas.push(`\n*Itens selecionados:*`)
    Object.entries(resumoAgrupado).forEach(([cat, itens]) => {
      linhas.push(`\n📌 *${cat}*`)
      itens.forEach((i) => linhas.push(`  • ${i.nome}`))
    })
    linhas.push(`\nAguardo o contato para mais detalhes. Obrigado(a)!`)

    const texto = encodeURIComponent(linhas.join('\n'))
    window.open(`${LINKS.whatsapp}?text=${texto}`, '_blank')
  }

  /* ---------- navegação ---------- */

  const canNext =
    (step === 0 && tipoEvento) ||
    (step === 1 && totalSelecionados > 0) ||
    step === 2

  const next = () => {
    if (step < STEPS.length - 1) setStep((s) => s + 1)
  }

  const prev = () => {
    if (step > 0) setStep((s) => s - 1)
  }

  const reset = () => {
    setStep(0)
    setTipoEvento(null)
    setItensSelecionados({})
    setCategoriaAtiva(CATEGORIAS_ITENS[0].id)
  }

  /* ---------- render ---------- */

  return (
    <section className="section section-montar" id="montar-evento">
      <div className="container">
        <h2 className="section-title color-dourado">
          MONTE O SEU EVENTO
        </h2>
        <p className="section-text dark">
          Escolha o tipo do evento, selecione os itens desejados e envie sua
          lista direto para o nosso WhatsApp.
        </p>

        {/* Progress bar */}
        <div className="montar-progress">
          {['Tipo de Evento', 'Itens', 'Resumo'].map((label, i) => (
            <div
              key={label}
              className={`montar-progress-step ${i <= step ? 'active' : ''} ${i < step ? 'done' : ''}`}
            >
              <span className="montar-progress-number">{i + 1}</span>
              <span className="montar-progress-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="montar-card">
          {/* STEP 0 — Tipo de Evento */}
          {step === 0 && (
            <div className="montar-step montar-step-tipo">
              <h3 className="montar-step-title">Qual é o tipo do seu evento?</h3>
              <div className="tipo-grid">
                {TIPOS_EVENTO.map((tipo) => (
                  <button
                    key={tipo.id}
                    className={`tipo-option ${tipoEvento === tipo.id ? 'selected' : ''}`}
                    onClick={() => setTipoEvento(tipo.id)}
                    type="button"
                  >
                    <i className={`${tipo.icon} tipo-icon`} />
                    <span>{tipo.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 1 — Seleção de Itens */}
          {step === 1 && (
            <div className="montar-step montar-step-itens">
              <h3 className="montar-step-title">
                Selecione os itens para o seu {tipoLabel}
              </h3>

              {/* Abas de categorias */}
              <div className="categorias-tabs">
                {CATEGORIAS_ITENS.map((cat) => (
                  <button
                    key={cat.id}
                    className={`categoria-tab ${categoriaAtiva === cat.id ? 'active' : ''}`}
                    onClick={() => setCategoriaAtiva(cat.id)}
                    type="button"
                  >
                    <i className={cat.icon} />
                    <span>{cat.nome}</span>
                  </button>
                ))}
              </div>

              {/* Itens da categoria ativa */}
              <div className="itens-grid">
                {CATEGORIAS_ITENS.find((c) => c.id === categoriaAtiva)?.itens.map(
                  (item) => {
                    const selected = !!itensSelecionados[item.id]
                    return (
                      <button
                        key={item.id}
                        className={`item-card ${selected ? 'selected' : ''}`}
                        onClick={() => toggleItem(item.id)}
                        type="button"
                      >
                        <div className="item-check">
                          <i className={selected ? 'fas fa-check-circle' : 'far fa-circle'} />
                        </div>
                        <div className="item-info">
                          <strong>{item.nome}</strong>
                          <span>{item.descricao}</span>
                        </div>
                      </button>
                    )
                  }
                )}
              </div>

              {totalSelecionados > 0 && (
                <div className="itens-contador">
                  <i className="fas fa-check" />
                  {totalSelecionados} {totalSelecionados === 1 ? 'item selecionado' : 'itens selecionados'}
                </div>
              )}
            </div>
          )}

          {/* STEP 2 — Resumo */}
          {step === 2 && (
            <div className="montar-step montar-step-resumo">
              <h3 className="montar-step-title">Resumo do seu evento</h3>

              <div className="resumo-tipo">
                <i className={TIPOS_EVENTO.find((t) => t.id === tipoEvento)?.icon} />
                <span>{tipoLabel}</span>
              </div>

              <div className="resumo-lista">
                {Object.entries(resumoAgrupado).map(([cat, itens]) => (
                  <div key={cat} className="resumo-grupo">
                    <h4>{cat}</h4>
                    <ul>
                      {itens.map((item) => (
                        <li key={item.id}>
                          <i className="fas fa-check" />
                          <div>
                            <strong>{item.nome}</strong>
                            <span>{item.descricao}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navegação */}
          <div className="montar-nav">
            {step > 0 && (
              <button className="btn btn-dourado" onClick={prev} type="button">
                <i className="fas fa-arrow-left" /> Voltar
              </button>
            )}

            <div className="montar-nav-spacer" />

            {step < 2 && (
              <button
                className="btn btn-dourado"
                onClick={next}
                disabled={!canNext}
                type="button"
              >
                Próximo <i className="fas fa-arrow-right" />
              </button>
            )}

            {step === 2 && (
              <div className="montar-final-actions">
                <button
                  className="btn btn-dourado montar-btn-whatsapp"
                  onClick={enviarWhatsApp}
                  type="button"
                >
                  <i className="fab fa-whatsapp" /> Enviar pelo WhatsApp
                </button>
                <button
                  className="btn-link montar-btn-reset"
                  onClick={reset}
                  type="button"
                >
                  <i className="fas fa-redo" /> Começar de novo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
