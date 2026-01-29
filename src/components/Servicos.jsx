const servicos = [
  {
    icon: 'fas fa-heart',
    title: 'Mini Wedding',
    text: 'Intensos no amor, cheios de significado. Cada detalhe é feito pra o seu "sim" ter sabor de aconchego.',
  },
  {
    icon: 'fas fa-baby-carriage',
    title: 'Chá de Fralda',
    text: 'Um momento doce pra celebrar novas chegadas. Cada detalhe é preparado com amor e carinho.',
  },
  {
    icon: 'fas fa-business-time',
    title: 'Corporativo',
    text: 'Trabalho também combina com afeto e sabor. Cuidamos de cada detalhe pra tornar seu evento especial.',
  },
  {
    icon: 'fas fa-users',
    title: 'Confraternização',
    text: 'Celebrar é reunir quem faz parte da sua história. Servimos sorrisos, sabores e boas lembranças.',
  },
]

export default function Servicos() {
  return (
    <section className="section section-servicos">
      <div className="container">
        <div className="servicos-grid">
          {servicos.map((item) => (
            <article key={item.title} className="servico-card">
              <i className={`${item.icon} servico-icon`} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
