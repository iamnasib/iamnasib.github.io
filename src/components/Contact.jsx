import { profile } from '../data/content'
import SectionHeading from './SectionHeading'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon } from './icons'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="05 /" title="Get in touch" />

      <div className="reveal glow relative overflow-hidden rounded-2xl border border-line bg-slate-surface p-8 md:p-12">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.5), transparent 60%)' }}
        />
        <div className="relative">
          <h3 className="max-w-xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Building something that needs to think? Let's talk.
          </h3>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-ink-dim">
            Open to AI engineering work — voice agents, RAG systems, multi-agent pipelines — and
            interesting builds. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-md bg-emerald-accent px-5 py-3 font-medium text-slate-bg transition-transform hover:-translate-y-0.5"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-medium text-ink transition-colors hover:border-emerald-accent/50 hover:text-emerald-soft"
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-medium text-ink transition-colors hover:border-emerald-accent/50 hover:text-emerald-soft"
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
