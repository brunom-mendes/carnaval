import { useState, useEffect } from 'react'
import { IMAGES, LINKS } from '../config'

const SLIDE_DURATION = 3000

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.heroSlides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-slideshow">
        {IMAGES.heroSlides.map((url, i) => (
          <div
            key={url}
            className={`slide ${i === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <img
          src={IMAGES.logo}
          alt="Bugu Delícias"
          className="hero-logo"
          width={242}
          height={242}
        />
        <h1 className="hero-title">
          Tem coisas que só o sabor do Bugu consegue transmitir.
        </h1>
        <p className="hero-subtitle">
          A gente acredita que um evento de verdade é feito de risadas, cheirinho
          de bolo e comida feita com o coração.
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
    </section>
  )
}
