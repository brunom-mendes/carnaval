import { useState, useMemo } from 'react'
import { TIPOS_EVENTO, CATEGORIAS_ITENS, LINKS } from '../config'

const STEPS = ['tipo', 'itens', 'resumo']

/* Formata valor em reais */
const formatPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

/* Retorna label da unidade para exibição */
const labelUnidade = (unidade) => {
  const map = {
    unidade: 'por unidade',
    kg: 'por kg',
    litro: 'por litro',
    lote: 'o lote',
    combo: 'o combo',
    'por período': 'por período',
    'por hora': 'por hora',
    'por pessoa': 'por pessoa',
  }
  return map[unidade] || ''
}

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
            if (cat.singleSelect) {
              cat.itens.forEach((i) => delete next[i.id])
            }
            next[itemId] = { ...found, categoria: cat.nome, quantidade: 1 }
            break
          }
        }
      }
      return next
    })
  }

  const updateQuantidade = (itemId, delta) => {
    setItensSelecionados((prev) => {
      if (!prev[itemId]) return prev
      const next = { ...prev }
      const novaQtd = (next[itemId].quantidade || 1) + delta
      if (novaQtd < 1) {
        delete next[itemId]
      } else {
        next[itemId] = { ...next[itemId], quantidade: novaQtd }
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

  // Cálculo do orçamento (preco × quantidade)
  const totalOrcamento = useMemo(() => {
    return Object.values(itensSelecionados).reduce(
      (soma, item) => soma + (item.preco || 0) * (item.quantidade || 1),
      0
    )
  }, [itensSelecionados])

  const temAConsultar = useMemo(() => {
    return Object.values(itensSelecionados).some((item) => item.preco === 0)
  }, [itensSelecionados])

  const tipoLabel = tipoEvento
    ? TIPOS_EVENTO.find((t) => t.id === tipoEvento)?.label
    : ''

  /* ---------- WhatsApp ---------- */

  const enviarWhatsApp = () => {
    const linhas = ['Ola! Gostaria de montar meu evento']
    if (nomeCliente.trim()) {
      linhas.push(`\n*Nome:* ${nomeCliente.trim()}`)
    }
    linhas.push(`*Tipo de evento:* ${tipoLabel}`)
    if (numConvidados) {
      linhas.push(`*Convidados:* aproximadamente ${numConvidados} pessoas`)
    }
    linhas.push('\n*Itens selecionados:*')
    Object.entries(resumoAgrupado).forEach(([cat, itens]) => {
      linhas.push(`\n*${cat}*`)
      itens.forEach((i) => {
        const qtd = i.quantidade || 1
        const subtotal = (i.preco || 0) * qtd
        const qtdStr = qtd > 1 ? ` (x${qtd})` : ''
        const precoStr = i.preco > 0
          ? ` - R$ ${subtotal.toFixed(2).replace('.', ',')}${i.unidade ? ` ${labelUnidade(i.unidade)}` : ''}${qtdStr}`
          : ' - A consultar'
        linhas.push(`- ${i.nome}${precoStr}`)
      })
    })
    linhas.push(`\n*Total estimado:* R$ ${totalOrcamento.toFixed(2).replace('.', ',')}`)
    if (temAConsultar) {
      linhas.push('Alguns itens estao sujeitos a consulta de preco.')
    }
    linhas.push('\nAguardo o contato para mais detalhes. Obrigado(a)!')

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
          {['Tipo de Evento', 'Itens & Cardápio', 'Resumo & Orçamento'].map((label, i) => (
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
                  <select
                    id="num-convidados"
                    value={numConvidados}
                    onChange={(e) => setNumConvidados(e.target.value)}
                  >
                    <option value="">Selecione...</option>
                    <option value="25">25 pessoas</option>
                    <option value="30">30 pessoas</option>
                    <option value="50">50 pessoas</option>
                    <option value="90">90 pessoas (casa completa)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 1 — Seleção de Itens + Orçamento */}
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

              {/* Aviso de seleção única */}
              {CATEGORIAS_ITENS.find((c) => c.id === categoriaAtiva)?.singleSelect && (
                <p className="single-select-hint">
                  <i className="fas fa-info-circle" /> Escolha apenas uma opção
                </p>
              )}

              {/* Itens da categoria ativa */}
              <div className="itens-grid">
                {CATEGORIAS_ITENS.find((c) => c.id === categoriaAtiva)?.itens.map(
                  (item) => {
                    const selecionado = itensSelecionados[item.id]
                    const selected = !!selecionado
                    const isAConsultar = item.preco === 0
                    const quantidade = selecionado?.quantidade || 1
                    const catAtual = CATEGORIAS_ITENS.find((c) => c.id === categoriaAtiva)
                    const isSingle = catAtual?.singleSelect

                    return (
                      <div
                        key={item.id}
                        className={`item-card ${selected ? 'selected' : ''}`}
                      >
                        <button
                          className="item-card-toggle"
                          onClick={() => toggleItem(item.id)}
                          type="button"
                        >
                          <div className="item-check">
                            <i className={selected ? 'fas fa-check-circle' : 'far fa-circle'} />
                          </div>
                          <div className="item-info">
                            <strong>{item.nome}</strong>
                            <span>{item.descricao}</span>
                            {isAConsultar ? (
                              <span className="item-preco item-a-consultar">
                                <i className="fas fa-tag" /> A consultar
                              </span>
                            ) : (
                              <span className="item-preco">
                                {formatPreco(item.preco)}{' '}
                                {item.unidade && <small>{labelUnidade(item.unidade)}</small>}
                              </span>
                            )}
                          </div>
                        </button>

                        {/* Controle de quantidade (aparece quando selecionado e não é singleSelect) */}
                        {selected && !isSingle && (
                          <div className="item-qty">
                            <button
                              className="item-qty-btn"
                              onClick={(e) => { e.stopPropagation(); updateQuantidade(item.id, -1) }}
                              type="button"
                              aria-label="Diminuir quantidade"
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <span className="item-qty-value">{quantidade}</span>
                            <button
                              className="item-qty-btn"
                              onClick={(e) => { e.stopPropagation(); updateQuantidade(item.id, 1) }}
                              type="button"
                              aria-label="Aumentar quantidade"
                            >
                              <i className="fas fa-plus" />
                            </button>
                            {!isAConsultar && quantidade > 1 && (
                              <span className="item-qty-subtotal">
                                = {formatPreco(item.preco * quantidade)}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  }
                )}
              </div>

              {/* Barra de orçamento */}
              {totalSelecionados > 0 && (
                <div className="orcamento-bar">
                  <div className="orcamento-bar-info">
                    <span className="orcamento-bar-count">
                      <i className="fas fa-check-circle" />
                      {totalSelecionados} {totalSelecionados === 1 ? 'item' : 'itens'}
                    </span>
                    <span className="orcamento-bar-total">
                      Total estimado: <strong>{formatPreco(totalOrcamento)}</strong>
                    </span>
                  </div>
                  {temAConsultar && (
                    <span className="orcamento-bar-aviso">
                      <i className="fas fa-info-circle" /> Itens com valor R$ 0,00 serão cotados pela equipe
                    </span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* STEP 2 — Resumo & Orçamento */}
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
                      {itens.map((item) => {
                        const isAConsultar = item.preco === 0
                        const qtd = item.quantidade || 1
                        const subtotal = (item.preco || 0) * qtd
                        return (
                          <li key={item.id}>
                            <i className="fas fa-check" />
                            <div>
                              <strong>
                                {item.nome}
                                {qtd > 1 && <span className="resumo-qty"> x{qtd}</span>}
                              </strong>
                              <span>{item.descricao}</span>
                              {isAConsultar ? (
                                <span className="item-preco item-a-consultar">
                                  A consultar
                                </span>
                              ) : (
                                <span className="item-preco">
                                  {formatPreco(subtotal)}{' '}
                                  {item.unidade && <small>{labelUnidade(item.unidade)}</small>}
                                  {qtd > 1 && (
                                    <small> ({qtd} x {formatPreco(item.preco)})</small>
                                  )}
                                </span>
                              )}
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
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Total do orçamento */}
              {totalSelecionados > 0 && (
                <div className="resumo-total">
                  <div className="resumo-total-linha">
                    <span>Total estimado</span>
                    <strong>{formatPreco(totalOrcamento)}</strong>
                  </div>
                  {temAConsultar && (
                    <p className="resumo-total-aviso">
                      <i className="fas fa-info-circle" /> Alguns itens possuem valor a consultar e
                      serão cotados pela nossa equipe.
                    </p>
                  )}
                </div>
              )}

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
                  <i className="fab fa-whatsapp" /> Enviar Orçamento pelo WhatsApp
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
