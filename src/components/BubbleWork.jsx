import { bubbleWork } from '../data/content'
import SectionHeading from './SectionHeading'

export default function BubbleWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading index="03 /" title="Bubble.io Production Work" />
      <div className="reveal rounded-2xl border border-line bg-slate-surface p-7 md:p-8">
        <p className="max-w-3xl text-pretty leading-relaxed text-ink-dim">{bubbleWork.intro}</p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {bubbleWork.apps.map((app) => (
            <li
              key={app}
              className="rounded-lg border border-line bg-slate-bg/60 px-3.5 py-2 text-sm text-ink transition-colors hover:border-emerald-accent/40 hover:text-emerald-soft"
            >
              {app}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
