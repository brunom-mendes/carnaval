import { useState, useEffect, useRef } from 'react'
import { IMAGES } from '../config'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef(null)

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (open && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  // Fecha ao pressionar Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      {/* Botão hamburger */}
      <button
        className={`sidebar-toggle ${open ? 'sidebar-toggle--open' : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
      >
        <span className="sidebar-toggle-bar" />
        <span className="sidebar-toggle-bar" />
        <span className="sidebar-toggle-bar" />
      </button>

      {/* Overlay escuro */}
      <div className={`sidebar-overlay ${open ? 'sidebar-overlay--visible' : ''}`} />

      {/* Menu lateral */}
      <nav
        ref={sidebarRef}
        className={`sidebar ${open ? 'sidebar--open' : ''}`}
        aria-label="Menu lateral"
      >
        <div className="sidebar-header">
          <img
            src={IMAGES.logo}
            alt="Bugu Delícias"
            className="sidebar-logo logo-branco"
            width="120"
            height="120"
          />
        </div>

        <ul className="sidebar-nav">
          <li>
            <a href="#anuncios" className="sidebar-link" onClick={() => setOpen(false)}>
              <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Anúncios
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
