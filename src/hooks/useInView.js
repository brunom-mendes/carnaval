import { useState, useEffect, useRef } from 'react'

/**
 * Observa se o elemento está visível no viewport (Intersection Observer).
 * @param {Object} options - { rootMargin: string, threshold: number }
 * @returns {[React.RefObject, boolean]} - [ref para o elemento, inView]
 */
export function useInView(options = {}) {
  const { rootMargin = '0px 0px -40px 0px', threshold = 0.1 } = options
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin, threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return [ref, inView]
}
