import { profile } from '../data/content'
import Entry from './Entry'

export default function Contact() {
  return (
    <Entry id="contact" mark="§7" margin={<p className="mt-1">{profile.location}</p>}>
      <h2 className="entry-title">
        Write to me <em>about the work</em>
      </h2>
      <p className="text-pretty">
        Email is the fastest way to reach me. I'm also on{' '}
        <a className="ink-link" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>,{' '}
        <a className="ink-link" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> and{' '}
        <a className="ink-link" href={profile.socials.twitter} target="_blank" rel="noreferrer">X</a>.
      </p>

      <p className="mt-8">
        <a
          className="ink-link text-[clamp(1.5rem,4.5vw,2.4rem)] italic decoration-accent"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
        </a>
      </p>

      <p className="mt-8 font-mono text-xs">
        <a className="ink-link" href={profile.resume} download>
          Download my CV (pdf) ↓
        </a>
      </p>
    </Entry>
  )
}
