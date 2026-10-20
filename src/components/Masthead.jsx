import { profile } from '../data/content'

export default function Masthead() {
  return (
    <header className="page">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-6 font-mono text-xs text-ink-soft">
        <a href="#top" className="transition-colors hover:text-accent">
          N. Farooq / working notes
        </a>
        <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-5 gap-y-1">
          <a className="ink-link" href={profile.resume} download>CV (pdf)</a>
          <a className="ink-link" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="ink-link" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="ink-link" href={`mailto:${profile.email}`}>Email</a>
        </nav>
      </div>
    </header>
  )
}
