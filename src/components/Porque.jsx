import { IMAGES, LINKS } from '../config'

export default function Porque() {
  return (
    <section className="section section-porque">
      <div className="container container-flex reverse-mobile">
        <div className="porque-texto">
          <h2 className="section-title white left">
            POR QUE ESCOLHER O BUGU PARA O SEU EVENTO?
          </h2>
          <p>
            No Bugu Delícias, cada detalhe tem o gosto de comida feita com
            carinho. Somos referência no café colonial e nos quitutes artesanais
            que aquecem o coração e você leva essa experiência afetiva direto
            para o seu evento.
          </p>
          <p>
            Em Taguatinga, nosso espaço é um respiro. Fácil de chegar, rodeado de
            área verde e com aquele clima tranquilo que transforma qualquer
            encontro em um momento especial. Um lugar que recebe bem, sem
            perder a essência simples e charmosa do Bugu.
          </p>
          <p>
            Mais de 1.300 clientes já viveram nossos sabores e saíram
            recomendando. Essa confiança nasce do atendimento próximo, do
            cuidado verdadeiro e da sensação de estar entre amigos — algo que
            só o Bugu Delícias entrega.
          </p>
          <a
            href={LINKS.whatsapp}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ENTRE EM CONTATO
          </a>
        </div>
        <div className="porque-galeria">
          <div className="galeria-vertical">
            {IMAGES.porque.map((url, i) => (
              <img key={url} src={url} alt={`Bugu ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
