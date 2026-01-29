import { VIDEOS } from '../config'

export default function VideosGaleria() {
  return (
    <section className="section section-videos-galeria">
      <div className="container">
        <h2 className="section-title color-dourado">
          NOSSOS EVENTOS EM VÍDEO
        </h2>
        <p className="section-text dark">
          Confira momentos especiais dos nossos eventos e do nosso espaço.
        </p>
        <div className="videos-grid">
          {VIDEOS.map((video, i) => (
            <div key={video.src} className="video-card">
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                poster=""
              >
                Seu navegador não suporta vídeo.
              </video>
              <p className="video-card-title">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
