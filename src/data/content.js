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
  socials: {
    github: 'https://github.com/iamnasib',
    linkedin: 'https://www.linkedin.com/in/iamnasib',
    twitter: 'https://twitter.com/Iamnaasib',
  },
}

export const intro = {
  // Shown right under the name, so the current role is the first thing read.
  now: { role: 'Senior Bubble Developer', org: 'Hotsourced', href: 'https://hotsourced.io' },
  before: { role: 'AI Engineer', org: 'Vings Technologies' },
  paragraphs: [
    "I've been building software in Srinagar, Kashmir, since 2021. Today I build and maintain production Bubble.io applications at Hotsourced.",
    "Before that, at Vings Technologies, I built the AI inside ConnectiumAI, a hiring platform: CELIA, a voice agent that interviews candidates, and CANDI, the search that lets recruiters find the right ones afterwards. These are my notes on that work.",
  ],
}

// ─── §1 CELIA ────────────────────────────────────────────────

export const celia = {
  partOf: 'ConnectiumAI',
  where: 'Vings Technologies',
  when: '2024–26',
  stack: ['Python', 'Pipecat', 'FastAPI', 'Daily.co', 'OpenAI', 'Silero VAD', 'Modal'],
  href: 'https://connectiumai.com',
  body: [
    'CELIA runs one-on-one interviews by voice. The candidate joins a Daily.co video call, and CELIA briefs them, reads the disclaimer, then conducts the interview.',
    "Every interview is role-aware. When a session starts, the Bubble.io app sends CELIA its system prompt along with the job's context, so it knows what role it's interviewing for.",
    "Underneath is a Pipecat pipeline written in Python. Silero VAD detects when the candidate is speaking, OpenAI handles speech-to-text, the LLM and text-to-speech, and context aggregators carry the conversation between them. The service runs on FastAPI, deployed on Modal, and restores from a container snapshot so each session starts fast.",
  ],
  caption:
    'One CELIA session. The Bubble.io app sets the role before the call starts. Everything inside the dashed line is one FastAPI service on Modal, restored from a container snapshot.',
}

// ─── §2 CANDI ────────────────────────────────────────────────

export const candi = {
  partOf: 'ConnectiumAI',
  where: 'Vings Technologies',
  when: '2024–26',
  stack: ['Python', 'Qdrant', 'Embeddings', 'Hybrid search', 'Re-ranker'],
  body: [
    'When an interview ends, its transcript goes into Qdrant together with the metadata the Bubble.io app sends: interview ID, status and company.',
    "Recruiters search in plain language, something like “give me the candidates who…”. Each query is filtered to the recruiter's company first, then answered with hybrid retrieval: vector search for meaning, lexical search for exact terms such as a framework or a job title.",
    'A re-ranker then reorders the matches, so the strongest candidates come back first.',
  ],
  caption:
    "CANDI's two paths into one Qdrant collection. Searches are filtered to the recruiter's company before retrieval runs, and the matches are re-ranked before they reach the recruiter.",
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

// ─── §4 On the side ──────────────────────────────────────────

export const side = {
  body: "Outside work I keep learning the way I always have: by building small things.",
}

export const minivibe = {
  href: 'https://github.com/iamnasib/MiniVibe',
  body: 'One of them is open source: MiniVibe, a LangGraph agent that generates web apps from a prompt. It was an early project for learning how agentic workflows hold together.',
}

// ─── §5 Work log ─────────────────────────────────────────────

export const work = [
  {
    when: 'Apr 2026 – now',
    role: 'Senior Bubble Developer',
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
    aside: 'still contributing part-time',
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
  { what: 'Bachelor of Computer Applications', where: 'Kashmir University (CASET College of Science and Engineering)', when: '2022–25' },
  { what: 'Certification, Data Science', where: 'CodeWithHarry', when: '2025' },
  { what: 'Certification, Full Stack Development', where: 'Softstacks Technologies', when: '2020–21' },
]

// Order and numbering of the notebook entries (used by the contents list).
export const contents = [
  { id: 'celia', mark: '§1', label: 'CELIA' },
  { id: 'candi', mark: '§2', label: 'CANDI' },
  { id: 'connectium', mark: '§3', label: 'Rest of ConnectiumAI' },
  { id: 'side', mark: '§4', label: 'On the side' },
  { id: 'work', mark: '§5', label: 'Work log' },
  { id: 'toolbox', mark: '§6', label: 'Toolbox & education' },
  { id: 'contact', mark: '§7', label: 'Contact' },
]
