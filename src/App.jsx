import { useEffect } from 'react'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Servicos from './components/Servicos'
import Espaco from './components/Espaco'
import Porque from './components/Porque'
import VideosGaleria from './components/VideosGaleria'
import Footer from './components/Footer'

function sendHeightToParent() {
  if (typeof window === 'undefined' || !window.parent || window.parent === window) return
  const height = document.documentElement.scrollHeight
  window.parent.postMessage({ type: 'bugu-height', height }, '*')
}

export default function App() {
  useEffect(() => {
    sendHeightToParent()
    const ro = new ResizeObserver(sendHeightToParent)
    ro.observe(document.documentElement)
    const t = setInterval(sendHeightToParent, 500)
    return () => {
      ro.disconnect()
      clearInterval(t)
    }
  }, [])

  return (
    <>
      <Hero />
      <VideoSection />
      <Servicos />
      <Espaco />
      <Porque />
      <VideosGaleria />
      <Footer />
    </>
  )
}
