import { IMAGES, LINKS } from '../config'

export default function VideoSection() {
  return (
    <section className="section section-video">
      <div className="container">
        <div className="video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={IMAGES.videoPoster}
          >
            <source src={IMAGES.videoSrc} type="video/mp4" />
          </video>
        </div>
        <h2 className="section-title color-dourado">
          SEU EVENTO PERFEITO COMEÇA AQUI: O ESPAÇO MAIS ACONCHEGANTE DE BRASÍLIA.
        </h2>
        <p className="section-text dark">
          Transforme seu Mini Wedding, Chá de Fralda ou Confraternização em uma
          celebração inesquecível, com o sabor autêntico e o carinho das delícias
          caseiras do Bugu.
        </p>
        <a
          href={LINKS.whatsapp}
          className="btn btn-dourado"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENTRE EM CONTATO
        </a>
      </div>
    </section>
  )
}
