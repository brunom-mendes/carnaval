import { IMAGES } from '../config'

export default function Espaco() {
  return (
    <section className="section section-espaco">
      <div className="container container-flex">
        <div className="espaco-texto">
          <h2 className="section-title color-dourado left">
            CONHEÇA O NOSSO ESPAÇO EXCLUSIVO PARA EVENTOS
          </h2>
          <p className="section-text dark left">
            No Bugu Delícias você encontra o aconchego de casa com o cuidado de
            quem faz tudo com carinho. Um cantinho verde em Taguatinga pensado
            para receber seu evento com sabor, afeto e aquele toque caseiro que
            faz toda diferença.
          </p>
        </div>
        <div className="espaco-galeria">
          <div className="galeria-carousel">
            {IMAGES.espaco.map((url, i) => (
              <img key={url} src={url} alt={`Espaço Bugu ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
