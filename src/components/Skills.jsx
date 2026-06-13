import { skills } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="04 /" title="Skills &amp; Tools" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div
            key={s.group}
            className="reveal rounded-xl border border-line bg-slate-surface p-6 transition-colors hover:border-emerald-accent/30"
          >
            <h3 className="font-mono text-sm uppercase tracking-wider text-emerald-soft">
              {s.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-slate-bg/60 px-2.5 py-1 text-sm text-ink-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
