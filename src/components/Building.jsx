import { minivibe, tribunal } from '../data/content'
import Entry from './Entry'

export default function Building() {
  const done = tribunal.phases.filter((p) => p.done).length
  return (
    <Entry
      id="building"
      mark="§4"
      margin={
        <div className="mt-1 space-y-3">
          <p>Personal<br />building in public</p>
          <p>LangGraph · FastAPI · Pipecat · React · ChromaDB</p>
        </div>
      }
    >
      <h2 className="entry-title">
        Now building: <em>TRIBUNAL</em>
      </h2>
      <div className="prose-note">
        {tribunal.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <p className="mt-8 font-mono text-xs text-ink-soft">
        Seven phases, {done} of 7 shipped. I tick them off here as they land.
      </p>
      <ol className="mt-4 space-y-3">
        {tribunal.phases.map((p, i) => (
          <li key={i} className="flex gap-4">
            <span className={p.done ? 'box done' : 'box'} aria-hidden="true" />
            <span className="w-6 shrink-0 font-mono text-xs leading-[1.9] text-ink-soft">{String(i + 1).padStart(2, '0')}</span>
            <span className={p.done ? 'text-ink-soft line-through decoration-accent' : undefined}>
              {p.title}
              <span className="sr-only">{p.done ? ' (shipped)' : ' (not yet shipped)'}</span>
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-14 border-t border-dashed border-rule pt-8">
        <h3 className="text-[1.45rem] font-normal">
          Also: <em className="italic text-ink-soft">MiniVibe</em>
        </h3>
        <p className="mt-3 text-pretty">{minivibe.body}</p>
        <p className="mt-3 font-mono text-xs">
          <a className="ink-link" href={minivibe.href} target="_blank" rel="noreferrer">
            github.com/iamnasib/MiniVibe ↗
          </a>
        </p>
      </div>
    </Entry>
  )
}
