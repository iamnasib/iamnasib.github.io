import { contents, intro } from '../data/content'
import Entry from './Entry'

function Contents() {
  return (
    <nav aria-label="Contents" className="mt-2 md:mt-0">
      <p className="mb-2 uppercase tracking-[0.12em]">Contents</p>
      <ol className="space-y-1">
        {contents.map((c) => (
          <li key={c.id}>
            <a href={`#${c.id}`} className="ink-link hover:text-accent">
              <span className="text-accent">{c.mark}</span> {c.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default function Intro() {
  return (
    <div id="top">
      <Entry first marginAfter margin={<Contents />}>
        <h1
          className="settle text-[clamp(3.25rem,9vw,6.25rem)] font-normal leading-[0.95] tracking-[-0.025em]"
          style={{ animationDelay: '0.5s' }}
        >
          Nasib <em className="italic">Farooq</em>
        </h1>

        {/* Current role first: a two-line ledger under the name */}
        <dl
          className="settle mt-8 grid grid-cols-[4.5rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 border-y border-rule py-5"
          style={{ animationDelay: '0.65s' }}
        >
          <dt className="font-mono text-xs uppercase tracking-[0.12em] text-accent">Now</dt>
          <dd className="text-[clamp(1.35rem,3vw,1.75rem)] leading-snug">
            {intro.now.role},{' '}
            <a className="ink-link italic" href={intro.now.href} target="_blank" rel="noreferrer">
              {intro.now.org}
            </a>
          </dd>
          <dt className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">Before</dt>
          <dd className="text-[1.15rem] leading-snug text-ink-soft">
            {intro.before.role}, <span className="italic">{intro.before.org}</span>
          </dd>
        </dl>

        <div className="settle prose-note mt-8 text-[1.2rem] leading-[1.6]" style={{ animationDelay: '0.8s' }}>
          {intro.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Entry>
    </div>
  )
}
