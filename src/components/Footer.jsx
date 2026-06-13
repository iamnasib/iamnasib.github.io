import { profile } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-ink-dim">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink-dim transition-colors hover:text-emerald-soft"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink-dim transition-colors hover:text-emerald-soft"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink-dim transition-colors hover:text-emerald-soft"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
