import { projects } from '../data/content'
import SectionHeading from './SectionHeading'
import { ArrowIcon } from './icons'

function StatusBadge({ status }) {
  const tone =
    status === 'Live'
      ? 'border-emerald-accent/40 bg-emerald-accent/10 text-emerald-soft'
      : status === 'Building in public'
        ? 'border-amber-400/30 bg-amber-400/10 text-amber-300'
        : 'border-line bg-slate-elev text-ink-dim'
  return (
    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${tone}`}>
      {status}
    </span>
  )
}

function StackRow({ stack }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {stack.map((s) => (
        <span
          key={s}
          className="rounded-md border border-line bg-slate-bg/60 px-2.5 py-1 font-mono text-xs text-ink-dim"
        >
          {s}
        </span>
      ))}
    </div>
  )
}

function ProjectHeader({ p }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
          <StatusBadge status={p.status} />
        </div>
        <p className="mt-1 font-mono text-sm text-emerald-soft">
          {p.type}
          {p.period && <span className="text-ink-dim"> · {p.period}</span>}
        </p>
      </div>
      {p.href && (
        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 font-mono text-sm text-ink-dim transition-colors hover:text-emerald-soft"
        >
          {p.href.includes('github') ? 'Source' : 'Visit'}
          <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
    </div>
  )
}

function FlagshipCard({ p }) {
  return (
    <article className="reveal glow rounded-2xl border border-line bg-slate-surface p-7 md:p-9">
      <ProjectHeader p={p} />
      <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-ink-dim">
        {p.summary}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {p.subsystems.map((sub) => (
          <div
            key={sub.name}
            className="rounded-xl border border-line bg-slate-bg/50 p-5 transition-colors hover:border-emerald-accent/30"
          >
            <div className="flex items-baseline gap-2">
              <h4 className="font-mono text-lg font-semibold text-emerald-soft">{sub.name}</h4>
              <span className="text-xs text-ink-dim">{sub.kicker}</span>
            </div>
            <ul className="mt-4 space-y-3">
              {sub.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-accent" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <StackRow stack={p.stack} />
    </article>
  )
}

function StandardCard({ p }) {
  return (
    <article className="reveal rounded-2xl border border-line bg-slate-surface p-7 transition-colors hover:border-emerald-accent/30 md:p-8">
      <ProjectHeader p={p} />
      <p className="mt-5 max-w-3xl text-pretty leading-relaxed text-ink-dim">{p.summary}</p>
      {p.points?.length > 0 && (
        <ul className="mt-5 space-y-3">
          {p.points.map((pt, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-accent" />
              {pt}
            </li>
          ))}
        </ul>
      )}
      <StackRow stack={p.stack} />
    </article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="02 /" title="Selected Work" />
      <div className="space-y-6">
        {projects.map((p) =>
          p.subsystems ? <FlagshipCard key={p.name} p={p} /> : <StandardCard key={p.name} p={p} />,
        )}
      </div>
    </section>
  )
}
