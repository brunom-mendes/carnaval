import { useState, useEffect } from 'react'
import { IMAGES, LINKS } from '../config'

const SCROLL_THRESHOLD = 320

export default function HeaderSticky() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <header className="header-sticky" aria-label="Navegação">
      <div className="header-sticky-inner">
        <a href="#hero" className="header-sticky-logo">
          <img src={IMAGES.logo} alt="Bugu Delícias" className="logo-branco" width="48" height="48" />
        </a>
        <a
          href={LINKS.whatsapp}
          className="btn btn-outline btn-header"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENTRE EM CONTATO
        </a>
      </div>
    </header>
  )
}
