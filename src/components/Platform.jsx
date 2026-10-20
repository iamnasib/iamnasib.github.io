import { platform } from '../data/content'
import Entry from './Entry'

export default function Platform() {
  return (
    <Entry
      id="connectium"
      mark="§3"
      margin={
        <div className="mt-1 space-y-3">
          <p>Vings Technologies<br />2024–26</p>
          <p>Bubble.io · Daily · Microsoft Graph · Calendly · Stripe</p>
        </div>
      }
    >
      <h2 className="entry-title">
        The rest of <em>ConnectiumAI</em>
      </h2>

      <blockquote className="mb-8 border-l-2 border-accent pl-5 text-[1.3rem] italic leading-snug text-ink-soft">
        “{platform.tagline}”
        <footer className="mt-2 font-mono text-xs not-italic">
          <a className="ink-link" href={platform.href} target="_blank" rel="noreferrer">
            connectiumai.com ↗
          </a>
        </footer>
      </blockquote>

      <div className="prose-note">
        {platform.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <dl className="mt-8 border-t border-rule">
        {platform.items.map((it) => (
          <div
            key={it.term}
            className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-rule py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)]"
          >
            <dt className="pt-1 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">{it.term}</dt>
            <dd className="text-pretty">{it.detail}</dd>
          </div>
        ))}
      </dl>
    </Entry>
  )
}
