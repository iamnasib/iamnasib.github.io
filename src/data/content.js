// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update text.
// ─────────────────────────────────────────────────────────────

export const site = {
  updated: 'October 2026',
}

export const profile = {
  name: 'Nasib Farooq',
  location: 'Srinagar, Kashmir',
  email: 'nasibfarooq@gmail.com',
  resume: '/Nasib_Farooq_CV.pdf',
  status: 'Open to AI engineering roles and contract work.',
  socials: {
    github: 'https://github.com/iamnasib',
    linkedin: 'https://www.linkedin.com/in/iamnasib',
    twitter: 'https://twitter.com/Iamnaasib',
  },
}

export const intro = [
  "I'm an engineer in Srinagar, Kashmir, and I've been building software since 2021. At Vings Technologies I built AI systems for hiring: a voice agent that interviews candidates, and the search that lets recruiters find the right ones afterwards.",
  "Today I'm a Bubble.io developer at Hotsourced, and in my own time I'm building TRIBUNAL, a multi-agent reasoning system, in public. These are my notes on the work.",
]

// ─── §1 CELIA ────────────────────────────────────────────────

export const celia = {
  where: 'Vings Technologies',
  when: '2024–26',
  stack: ['Pipecat', 'FastAPI', 'Daily', 'OpenAI', 'Modal'],
  href: 'https://connectiumai.com',
  body: [
    'CELIA runs one-on-one interviews by voice. It briefs the candidate, reads the disclaimer, then conducts the interview.',
    "Every interview is role-aware. When a session starts, the Bubble.io app sends CELIA its system prompt along with the job's context, so it knows what role it's interviewing for.",
    "Underneath is a Pipecat pipeline: separate speech-to-text, LLM and text-to-speech services, joined by context aggregators. It runs on hosted infrastructure that restores from a container snapshot, which keeps session start-up fast.",
  ],
  caption:
    'One CELIA session. The Bubble.io app sets the role before the conversation starts. Everything inside the dashed line runs in one container restored from a snapshot.',
}

// ─── §2 CANDI ────────────────────────────────────────────────

export const candi = {
  where: 'Vings Technologies',
  when: '2024–26',
  stack: ['Qdrant', 'Embeddings', 'Hybrid search', 'Python'],
  body: [
    'When an interview ends, its transcript goes into Qdrant together with the metadata the Bubble.io app sends: interview ID, status and company.',
    "Recruiters search in plain language, something like “give me the candidates who…”. Each query is filtered to the recruiter's company first, then answered with hybrid retrieval: vector search for meaning, lexical search for exact terms such as a framework or a job title.",
  ],
  caption:
    "CANDI's two paths into one Qdrant collection. Searches are filtered to the recruiter's company before retrieval runs.",
}

// ─── §3 ConnectiumAI, around them ────────────────────────────

export const platform = {
  href: 'https://connectiumai.com',
  tagline: 'An AI-driven platform where conversations become verifiable proof of skills.',
  body: [
    'CELIA and CANDI live inside ConnectiumAI, a hiring and assessment platform. I led its development at Vings across both sides: the Python AI services, and the product itself on Bubble.io and its integrations. The AI was one part of it. This is the rest:',
  ],
  items: [
    { term: 'Assessments', detail: 'A configurable engine for text, video and hybrid interviews, with dynamically generated questions, automated evaluation and feedback reports.' },
    { term: 'Live calls', detail: 'Daily.co interviews with recording, transcription and AI-generated summaries.' },
    { term: 'Email insight', detail: 'A Microsoft Graph integration that shows how candidates and companies have been engaging over email.' },
    { term: 'Scheduling', detail: 'Real-time scheduling on the Calendly APIs, built around interviewer availability.' },
    { term: 'Billing', detail: 'A modular billing system with pricing plans, offers and date-based controls.' },
    { term: 'Roles', detail: 'Onboarding and role-based workflows for candidates, interviewers and companies.' },
  ],
}

// ─── §4 Now building ─────────────────────────────────────────

export const tribunal = {
  body: [
    "A multi-agent system where agents argue a question adversarially under a supervisor, then reach a verdict grounded in sources. I'm writing it myself, one phase at a time, and building it in public.",
  ],
  // Set done: true as each phase ships.
  phases: [
    { title: 'One agent behind a FastAPI service', done: false },
    { title: 'Three agents debating over shared state, streamed with SSE', done: false },
    { title: 'Six agents under a supervisor graph, with LangGraph checkpointing', done: false },
    { title: 'Joining the debate by voice through Pipecat, with interrupt and resume', done: false },
    { title: 'A React arena for watching the debate', done: false },
    { title: 'Grounding answers with RAG over ChromaDB', done: false },
    { title: 'Polish and public launch', done: false },
  ],
}

export const minivibe = {
  href: 'https://github.com/iamnasib/MiniVibe',
  body: 'An open-source LangGraph agent that generates web apps from a prompt. Next on its list: SQLite checkpointing, human-in-the-loop review through interrupt(), one file per output, and tool calling.',
}

// ─── §5 Work log ─────────────────────────────────────────────

export const work = [
  {
    when: 'Apr 2026 – now',
    role: 'Bubble Developer',
    company: 'Hotsourced',
    companyHref: 'https://hotsourced.io',
    where: 'Remote · London',
    note: 'Building and maintaining production Bubble.io applications.',
  },
  {
    when: 'Aug 2024 – Mar 2026',
    role: 'Bubble Developer (Lead) / AI Engineer',
    company: 'Vings Technologies',
    where: 'Remote · California',
    note: 'Led ConnectiumAI across AI engineering in Python and the Bubble.io platform. CELIA, CANDI and the platform work above (§1–3) are from here.',
  },
  {
    when: 'Jun 2023 – now',
    role: 'Bubble.io Developer',
    company: 'Freelance',
    where: 'Remote',
    note: 'Over a dozen client engagements: feature builds, API integrations, UI work, debugging. The main ones:',
    clients: [
      { name: 'CMG Compass', detail: 'A business assessment MVP with COMPASS scoring, financial analysis against NAICS benchmarks, Claude-written reports and Stripe payments.' },
      { name: 'SmrtCoach', detail: 'A coaching SaaS with assessment chat, session scheduling, events, to-dos and OpenAI-powered learning modules.' },
      { name: 'Kathy', detail: 'A real estate listing platform that writes property descriptions with GPT.' },
      { name: 'KochiFitness', detail: 'A coaching platform with one-on-one chat, video calls and a creator hub, Kochi Konnect.' },
      { name: 'BookDeskriptor', detail: 'OpenAI-generated book titles and descriptions in two modes, with plan-based usage limits.' },
      { name: 'Plugins', detail: 'Published Bubble.io plugins, including a Unique ID Generator and Copy to Clipboard.' },
    ],
  },
  {
    when: 'Feb 2023 – now',
    role: 'Full Stack Developer',
    company: 'Freelance',
    where: 'Remote',
    clients: [
      { name: 'Farukhsons Enterprises', detail: 'React, Django REST and Tailwind app for a contracting business: services, project showcase, inquiries, an admin dashboard and a public bill-making tool.' },
      { name: 'Posttrex', detail: 'A social media web app.' },
      { name: 'Shagoo Designs', detail: 'A static site for an interior design business.' },
    ],
  },
]

// ─── §6 Toolbox & education ──────────────────────────────────

export const toolbox = [
  { group: 'AI', items: ['LLM integration', 'RAG pipelines', 'embeddings and vector search', 'prompt engineering', 'Pipecat', 'LangGraph', 'OpenAI API'] },
  { group: 'Data', items: ['scikit-learn', 'NumPy', 'pandas', 'model evaluation', 'feature engineering'] },
  { group: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Django REST', 'Flask', 'Node.js', 'Express'] },
  { group: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML', 'CSS'] },
  { group: 'No-code', items: ['Bubble.io', 'plugin development', 'Microsoft Graph', 'Daily.co', 'Calendly', 'Stripe'] },
  { group: 'Storage', items: ['Qdrant', 'ChromaDB', 'PostgreSQL', 'MongoDB', 'SQL'] },
]

export const education = [
  { what: 'Bachelor of Computer Applications', where: 'CASET College of Science and Engineering, Srinagar', when: '2022–25' },
  { what: 'Certification, Data Science', where: 'CodeWithHarry', when: '2025' },
  { what: 'Certification, Full Stack Development', where: 'Softstacks Technologies', when: '2020–21' },
]

// Order and numbering of the notebook entries (used by the contents list).
export const contents = [
  { id: 'celia', mark: '§1', label: 'CELIA' },
  { id: 'candi', mark: '§2', label: 'CANDI' },
  { id: 'connectium', mark: '§3', label: 'ConnectiumAI' },
  { id: 'building', mark: '§4', label: 'Now building' },
  { id: 'work', mark: '§5', label: 'Work log' },
  { id: 'toolbox', mark: '§6', label: 'Toolbox & education' },
  { id: 'contact', mark: '§7', label: 'Contact' },
]
