import { useInView } from '../hooks/useInView'

export default function SectionFade({ children, className = '', as: Tag = 'div' }) {
  const [ref, inView] = useInView({ rootMargin: '0px 0px -60px 0px', threshold: 0.05 })

  return (
    <Tag
      ref={ref}
      className={`section-animate ${inView ? 'section-in-view' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
