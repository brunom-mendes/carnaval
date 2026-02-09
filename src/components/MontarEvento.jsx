import { useState, useMemo } from 'react'
import { TIPOS_EVENTO, CATEGORIAS_ITENS, LINKS } from '../config'

const STEPS = ['tipo', 'itens', 'resumo']

export default function MontarEvento() {
  const [step, setStep] = useState(0)
  const [slideDir, setSlideDir] = useState('right')
  const [tipoEvento, setTipoEvento] = useState(null)
  const [nomeCliente, setNomeCliente] = useState('')
  const [numConvidados, setNumConvidados] = useState('')
  const [itensSelecionados, setItensSelecionados] = useState({})
  const [categoriaAtiva, setCategoriaAtiva] = useState(CATEGORIAS_ITENS[0].id)

  /* ---------- helpers ---------- */

  const toggleItem = (itemId) => {
    setItensSelecionados((prev) => {
      const next = { ...prev }
      if (next[itemId]) {
        delete next[itemId]
      } else {
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

  const removeItem = (itemId) => {
    setItensSelecionados((prev) => {
      const next = { ...prev }
      delete next[itemId]
      return next
    })
  }

  const totalSelecionados = Object.keys(itensSelecionados).length

  // Contagem por categoria (para badges nas tabs)
  const contagemPorCategoria = useMemo(() => {
    const contagem = {}
    CATEGORIAS_ITENS.forEach((cat) => {
      contagem[cat.id] = cat.itens.filter((i) => itensSelecionados[i.id]).length
    })
    return contagem
  }, [itensSelecionados])

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
    if (nomeCliente.trim()) {
      linhas.push(`\n*Nome:* ${nomeCliente.trim()}`)
    }
    linhas.push(`*Tipo de evento:* ${tipoLabel}`)
    if (numConvidados) {
      linhas.push(`*Convidados:* ~${numConvidados} pessoas`)
    }
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
    if (step < STEPS.length - 1) {
      setSlideDir('right')
      setStep((s) => s + 1)
    }
  }

  const prev = () => {
    if (step > 0) {
      setSlideDir('left')
      setStep((s) => s - 1)
    }
  }

  const reset = () => {
    setSlideDir('left')
    setStep(0)
    setTipoEvento(null)
    setNomeCliente('')
    setNumConvidados('')
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
              <span className="montar-progress-number">
                {i < step ? <i className="fas fa-check" /> : i + 1}
              </span>
              <span className="montar-progress-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="montar-card">
          {/* STEP 0 — Tipo de Evento + Dados */}
          {step === 0 && (
            <div className={`montar-step montar-step-tipo montar-slide-${slideDir}`} key="step-0">
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

              {/* Campos adicionais */}
              <div className="montar-fields">
                <div className="montar-field">
                  <label htmlFor="nome-cliente">
                    <i className="fas fa-user" /> Seu nome
                    <span className="field-optional">(opcional)</span>
                  </label>
                  <input
                    id="nome-cliente"
                    type="text"
                    placeholder="Como podemos te chamar?"
                    value={nomeCliente}
                    onChange={(e) => setNomeCliente(e.target.value)}
                  />
                </div>
                <div className="montar-field">
                  <label htmlFor="num-convidados">
                    <i className="fas fa-users" /> Quantidade de convidados
                    <span className="field-optional">(opcional)</span>
                  </label>
                  <input
                    id="num-convidados"
                    type="number"
                    min="1"
                    placeholder="Ex: 50"
                    value={numConvidados}
                    onChange={(e) => setNumConvidados(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 1 — Seleção de Itens */}
          {step === 1 && (
            <div className={`montar-step montar-step-itens montar-slide-${slideDir}`} key="step-1">
              <h3 className="montar-step-title">
                Selecione os itens para o seu {tipoLabel}
              </h3>

              {/* Abas de categorias com badge */}
              <div className="categorias-tabs">
                {CATEGORIAS_ITENS.map((cat) => {
                  const count = contagemPorCategoria[cat.id]
                  return (
                    <button
                      key={cat.id}
                      className={`categoria-tab ${categoriaAtiva === cat.id ? 'active' : ''}`}
                      onClick={() => setCategoriaAtiva(cat.id)}
                      type="button"
                    >
                      <i className={cat.icon} />
                      <span>{cat.nome}</span>
                      {count > 0 && <span className="cat-badge">{count}</span>}
                    </button>
                  )
                })}
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
            <div className={`montar-step montar-step-resumo montar-slide-${slideDir}`} key="step-2">
              <h3 className="montar-step-title">Resumo do seu evento</h3>

              <div className="resumo-header">
                <div className="resumo-tipo">
                  <i className={TIPOS_EVENTO.find((t) => t.id === tipoEvento)?.icon} />
                  <span>{tipoLabel}</span>
                </div>
                {(nomeCliente.trim() || numConvidados) && (
                  <div className="resumo-dados">
                    {nomeCliente.trim() && (
                      <span className="resumo-dado">
                        <i className="fas fa-user" /> {nomeCliente.trim()}
                      </span>
                    )}
                    {numConvidados && (
                      <span className="resumo-dado">
                        <i className="fas fa-users" /> ~{numConvidados} convidados
                      </span>
                    )}
                  </div>
                )}
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
                          <button
                            className="resumo-remove"
                            onClick={() => removeItem(item.id)}
                            type="button"
                            title="Remover item"
                            aria-label={`Remover ${item.nome}`}
                          >
                            <i className="fas fa-times" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {totalSelecionados === 0 && (
                <div className="resumo-vazio">
                  <i className="fas fa-exclamation-circle" />
                  <p>Você removeu todos os itens. Volte para selecionar novamente.</p>
                </div>
              )}
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
                  disabled={totalSelecionados === 0}
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
