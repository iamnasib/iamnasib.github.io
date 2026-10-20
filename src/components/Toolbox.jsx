import { education, toolbox } from '../data/content'
import Entry from './Entry'

export default function Toolbox() {
  return (
    <Entry id="toolbox" mark="§6" margin={<p className="mt-1">what I work with</p>}>
      <h2 className="entry-title">
        Toolbox <em>&amp; education</em>
      </h2>

      <dl className="border-t border-rule">
        {toolbox.map((t) => (
          <div key={t.group} className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-rule py-3 sm:grid-cols-[6.5rem_minmax(0,1fr)]">
            <dt className="pt-1 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">{t.group}</dt>
            <dd className="text-pretty">{t.items.join(', ')}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">Education</h3>
      <ul className="mt-3 space-y-3">
        {education.map((e) => (
          <li key={e.what} className="grid grid-cols-1 gap-x-6 sm:grid-cols-[minmax(0,1fr)_auto]">
            <span>
              {e.what}
              <span className="text-ink-soft">, {e.where}</span>
            </span>
            <span className="font-mono text-xs leading-[1.9] text-ink-soft">{e.when}</span>
          </li>
        ))}
      </ul>
    </Entry>
  )
}
