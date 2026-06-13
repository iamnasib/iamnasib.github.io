import { profile } from '../data/content'
import { GitHubIcon, LinkedInIcon, ArrowIcon, DownloadIcon } from './icons'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center bg-grid">
      {/* radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.35), transparent 60%)' }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-20 md:grid-cols-[1.4fr_1fr] md:pt-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-slate-surface/60 px-3 py-1 font-mono text-xs text-emerald-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent" />
            Available for AI engineering work
          </p>

          <h1 className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-4 font-mono text-lg text-emerald-soft md:text-xl">
            {profile.role}
            <span className="cursor">&nbsp;</span>
          </p>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-dim">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-emerald-accent px-5 py-2.5 font-medium text-slate-bg transition-transform hover:-translate-y-0.5"
            >
              View Work
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 font-medium text-ink transition-colors hover:border-emerald-accent/50 hover:text-emerald-soft"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-md text-ink-dim transition-colors hover:text-emerald-soft"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-md text-ink-dim transition-colors hover:text-emerald-soft"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Terminal card */}
        <div className="glow rounded-xl border border-line bg-slate-surface/70 p-1 backdrop-blur-sm">
          <div className="flex items-center gap-1.5 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-xs text-ink-dim">nasib — zsh</span>
          </div>
          <div className="rounded-lg bg-slate-bg/80 p-4 font-mono text-[13px] leading-relaxed">
            <p className="text-ink-dim">
              <span className="text-emerald-accent">$</span> whoami
            </p>
            <p className="text-ink">bubble_dev @ hotsourced.io</p>
            <p className="text-ink-dim text-xs mt-0.5"># building toward AI eng full-time</p>
            <p className="mt-2 text-ink-dim">
              <span className="text-emerald-accent">$</span> cat stack.txt
            </p>
            <p className="text-ink">
              pipecat · langgraph · rag · fastapi
              <br />
              react · qdrant · bubble.io
            </p>
            <p className="mt-2 text-ink-dim">
              <span className="text-emerald-accent">$</span> ls ./shipped
            </p>
            <p className="text-emerald-soft">CELIA/ CANDI/ ConnectiumAI/</p>
            <p className="mt-1 text-ink-dim">
              <span className="text-emerald-accent">$</span> <span className="cursor">&nbsp;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
