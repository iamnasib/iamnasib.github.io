import { about, profile } from '../data/content'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01 /" title="About" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_1fr]">
        <div className="reveal space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty text-lg leading-relaxed text-ink-dim">
              {p}
            </p>
          ))}

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-ink-dim">
                  {f.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal">
          <div className="glow overflow-hidden rounded-xl border border-line bg-slate-surface">
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <div className="flex items-center justify-between border-t border-line px-4 py-3">
              <span className="font-mono text-xs text-ink-dim">{profile.location}</span>
              <span className="h-2 w-2 rounded-full bg-emerald-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
