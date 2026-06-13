import { experience, education } from '../data/content'
import SectionHeading from './SectionHeading'

function ExperienceItem({ item, isLast }) {
  return (
    <div className="reveal relative flex gap-6">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-emerald-accent bg-slate-bg" />
        {!isLast && <div className="mt-1 w-px flex-1 bg-line" />}
      </div>

      <div className={`pb-10 ${isLast ? '' : ''}`}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-semibold text-ink">{item.role}</h3>
          {item.companyHref ? (
            <a
              href={item.companyHref}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-soft transition-opacity hover:opacity-75"
            >
              @ {item.company}
            </a>
          ) : (
            <span className="text-emerald-soft">@ {item.company}</span>
          )}
        </div>
        <div className="mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-xs text-ink-dim">
          <span>{item.period}</span>
          <span>·</span>
          <span>{item.location}</span>
        </div>
        {item.points.length > 0 && (
          <ul className="mt-3 space-y-2">
            {item.points.map((pt, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-accent/60" />
                {pt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="03 /" title="Experience" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
        {/* Timeline */}
        <div>
          {experience.map((item, i) => (
            <ExperienceItem key={i} item={item} isLast={i === experience.length - 1} />
          ))}
        </div>

        {/* Education sidebar */}
        <div className="reveal">
          <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-emerald-soft">
            Education
          </h3>
          <div className="space-y-5">
            {education.map((ed, i) => (
              <div key={i} className="rounded-xl border border-line bg-slate-surface p-5">
                <p className="text-sm font-semibold leading-snug text-ink">{ed.degree}</p>
                <p className="mt-1 text-xs text-ink-dim">{ed.institution}</p>
                <p className="mt-1 font-mono text-xs text-emerald-soft/70">{ed.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
