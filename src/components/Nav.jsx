import { useEffect, useState } from 'react'
import { profile } from '../data/content'
import useActiveSection from '../hooks/useActiveSection'

const links = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = links.map((l) => l.id)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-slate-bg/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-emerald-accent">~/</span>
          <span className="text-ink">{profile.name.split(' ')[0].toLowerCase()}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`font-mono text-sm transition-colors ${
                  active === l.id
                    ? 'text-emerald-soft'
                    : 'text-ink-dim hover:text-emerald-soft'
                }`}
              >
                <span className={active === l.id ? 'text-emerald-accent' : 'text-emerald-accent/0'}>
                  /
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-md border border-emerald-accent/40 px-4 py-1.5 font-mono text-sm text-emerald-soft transition-colors hover:bg-emerald-accent/10 md:inline-block"
        >
          Get in touch
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-lg leading-none">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line bg-slate-surface px-6 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm text-ink-dim hover:text-emerald-soft"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
