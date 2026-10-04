import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { ArrowUp, Heart, IndianRupee } from 'lucide-react'
import MicroSlats from './MicroSlats'
import { NAV } from '../data'

const SOCIALS = [
  { href: 'https://x.com/CSI_KJSCE', icon: faXTwitter, label: 'Twitter' },
  { href: 'https://www.instagram.com/csikjsce', icon: faInstagram, label: 'Instagram' },
  { href: 'https://github.com/CSI-KJSCE', icon: faGithub, label: 'GitHub' },
  { href: "https://www.linkedin.com/company/csi---kjsce-student's-chapter", icon: faLinkedin, label: 'LinkedIn' },
]

const SLATS = { color: '#8fd0ab', glintColor: '#ffffff', backgroundColor: '#f9fdfa', slatWidth: 24, slatHeight: 60, gap: 4 }

// Wraps the page content. Over the last 500px of scroll the content shrinks, lifts and rounds,
// revealing the sticky footer that sits underneath it.
export default function Footer({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const triggerDistance = 500
      const triggerPoint = Math.max(0, scrollableHeight - triggerDistance)
      const y = window.scrollY
      setScrollProgress(y > triggerPoint ? Math.min((y - triggerPoint) / triggerDistance, 1) : 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    const element = contentRef.current
    if (!element) return
    const measure = () => setContentHeight(element.getBoundingClientRect().height)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const MAX_SCALE_SHRINK = 0.08
  const MAX_NET_LIFT_PX = 80

  const scale = 1 - scrollProgress * MAX_SCALE_SHRINK
  // Scaling around the centre moves the bottom edge by an amount that depends on page height;
  // compensate with the measured height so the visible lift stays consistent.
  const scaleLiftPx = ((1 - scale) * contentHeight) / 2
  const translateY = Math.max(-160, Math.min(scaleLiftPx - scrollProgress * MAX_NET_LIFT_PX, 320))
  const borderRadius = Math.min(scrollProgress * 32, 32)

  return (
    <>
      <div
        ref={contentRef}
        className="shrink-wrap relative z-10 overflow-clip will-change-transform transition-transform duration-75"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          borderRadius: `${borderRadius}px`,
          transformOrigin: 'center center',
          boxShadow: scrollProgress > 0 ? `0 30px 80px -30px rgba(23, 51, 35, ${0.35 * scrollProgress})` : undefined,
        }}
      >
        <div className="bg-fx" aria-hidden="true">
          <MicroSlats {...SLATS} interactive />
        </div>
        {children}
      </div>
      <footer className="sticky bottom-0 z-[5] border-t border-border bg-white/55 backdrop-blur-xl">
        <div className="mx-auto max-w-[1080px] px-5 pt-14 pb-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <a href="#home" className="flex items-center gap-3 no-underline">
                <span className="logo"><IndianRupee size={18} strokeWidth={2.25} color="#fff" aria-label="Rupee" /></span>
                <span className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Fraunces, serif' }}>Demonetisation Impact Explorer</span>
              </a>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                An interactive FinTech explainer on India's 1946, 1978 and 2016 demonetisations and the 2023 ₹2,000 withdrawal.
              </p>
              <p className="mt-3 text-xs text-muted-foreground">FinTech MDM · Group Internal Assessment · K.J. Somaiya College of Engineering</p>
            </div>
  
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Quick links</h4>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {NAV.map(([id, label]) => (
                  <li key={id}><a href={'#' + id} className="text-muted-foreground no-underline transition-colors hover:text-foreground">{label}</a></li>
                ))}
              </ul>
            </div>
  
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Connect</h4>
              <ul className="mt-4 space-y-3 text-sm">
                {SOCIALS.map(s => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-muted-foreground no-underline transition-colors hover:text-foreground">
                      <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-white text-[#111] transition-colors group-hover:border-primary">
                        <FontAwesomeIcon icon={s.icon} className="text-sm" />
                      </span>
                      <span>{s.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          <div className="w-full overflow-hidden py-8">
            <h2 aria-hidden="true" className="m-0 block select-none text-center text-[11.5vw] leading-none font-bold tracking-tight text-transparent md:text-[8.6vw] lg:text-[96px]" style={{ fontFamily: 'Fraunces, serif', background: 'linear-gradient(180deg, var(--acc), #9be3b8)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              DEMONETISATION
            </h2>
          </div>
  
          <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row">
            <span className="inline-flex items-center gap-1.5">Made with <Heart size={13} strokeWidth={1.75} color="#111" aria-label="love" /> by Harshad, Deshna &amp; Viraj</span>
            <a href="#home" className="inline-flex items-center gap-1.5 text-muted-foreground no-underline hover:text-foreground">Back to top <ArrowUp size={13} strokeWidth={1.75} /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
