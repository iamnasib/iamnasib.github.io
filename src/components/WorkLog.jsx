import { work } from '../data/content'
import Entry from './Entry'

function Company({ job }) {
  if (!job.companyHref) return job.company
  return (
    <a className="ink-link" href={job.companyHref} target="_blank" rel="noreferrer">
      {job.company}
    </a>
  )
}

export default function WorkLog() {
  return (
    <Entry id="work" mark="§5" margin={<p className="mt-1">2023 – now</p>}>
      <h2 className="entry-title">Work log</h2>

      <ol className="border-t border-rule">
        {work.map((job, i) => (
          <li key={i} className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-rule py-6 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
            <p className="pt-1 font-mono text-xs text-ink-soft">{job.when}</p>
            <div>
              <h3 className="text-[1.2rem] font-medium leading-snug">
                {job.role}, <Company job={job} />
              </h3>
              <p className="font-mono text-xs text-ink-soft">{job.where}</p>
              {job.note && <p className="mt-3 text-pretty">{job.note}</p>}
              {job.clients && (
                <dl className="mt-3 space-y-2">
                  {job.clients.map((c) => (
                    <div key={c.name}>
                      <dt className="inline font-medium">{c.name}.</dt>{' '}
                      <dd className="inline text-ink-soft">{c.detail}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Entry>
  )
}
