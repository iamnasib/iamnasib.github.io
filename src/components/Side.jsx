import { minivibe, side } from '../data/content'
import Entry from './Entry'

export default function Side() {
  return (
    <Entry
      id="side"
      mark="§4"
      margin={
        <div className="mt-1 space-y-3">
          <p>Personal<br />open source</p>
          <p>Python · LangGraph</p>
        </div>
      }
    >
      <h2 className="entry-title">
        On the side: <em>MiniVibe</em>
      </h2>
      <div className="prose-note">
        <p>{side.body}</p>
        <p>{minivibe.body}</p>
      </div>
      <p className="mt-4 font-mono text-xs">
        <a className="ink-link" href={minivibe.href} target="_blank" rel="noreferrer">
          github.com/iamnasib/MiniVibe ↗
        </a>
      </p>
    </Entry>
  )
}
