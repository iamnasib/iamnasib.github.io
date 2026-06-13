import { about } from '../data/content'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01 /" title="About" />

      <div className="reveal max-w-3xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-pretty text-lg leading-relaxed text-ink-dim">
            {p}
          </p>
        ))}
      </div>

      <dl className="reveal mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {about.facts.map((f) => (
          <div
            key={f.label}
            className="rounded-xl border border-line bg-slate-surface p-5"
          >
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-dim">
              {f.label}
            </dt>
            <dd className="mt-2 text-sm font-semibold text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
