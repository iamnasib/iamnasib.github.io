import { profile, site } from '../data/content'

export default function Footer() {
  return (
    <footer className="page">
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-rule py-8 font-mono text-xs text-ink-soft">
        <p>
          {profile.name} · {profile.location} · updated {site.updated}
        </p>
        <p>Set in Newsreader and IBM Plex Mono.</p>
      </div>
    </footer>
  )
}
