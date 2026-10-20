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

        <div className="settle prose-note mt-10 text-[1.3rem] leading-[1.55]" style={{ animationDelay: '0.7s' }}>
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Entry>
    </div>
  )
}
