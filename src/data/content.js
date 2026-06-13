// ─────────────────────────────────────────────────────────────
//  Edit everything about the site from this one file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Nasib Farooq',
  role: 'AI Engineer',
  tagline: 'I build production AI systems that listen, reason, and decide.',
  location: 'Kashmir, India',
  email: 'nasibfarooq@gmail.com',
  // Replace /profile-placeholder.svg with your real photo in /public.
  photo: '/profile-placeholder.svg',
  socials: {
    github: 'https://github.com/iamnasib',
    linkedin: 'https://www.linkedin.com/in/iamnasib',
  },
}

export const about = {
  // Short, sharp paragraphs. First-person, no fluff.
  paragraphs: [
    "I'm a 24-year-old AI engineer from Kashmir who's been shipping software since 2021. I hold a BCA from Kashmir University and I'm currently building at Hotsourced.io.",
    "My focus is production AI — not demos. I've built a conversational voice interviewer that runs live, and a hybrid-retrieval RAG system that recruiters use to find candidates in plain language. I care about systems that hold up under real users.",
    "I work across the stack — Python, FastAPI, LangGraph, Pipecat and RAG pipelines on the AI side; React on the front; and Bubble.io for rapid production builds. The rare Bubble-plus-AI combination is where I move fastest.",
  ],
  facts: [
    { label: 'Based in', value: 'Kashmir, India' },
    { label: 'Building since', value: '2021' },
    { label: 'Currently', value: 'Hotsourced.io' },
    { label: 'Focus', value: 'Production AI systems' },
  ],
}

// Flagship + featured projects (rendered as large cards).
export const projects = [
  {
    name: 'ConnectiumAI',
    type: 'Flagship · AI Recruitment Platform',
    status: 'Live',
    period: 'at Vings Technologies',
    href: 'https://connectiumai.com',
    summary:
      'An AI-driven hiring platform. I built its two core AI subsystems — CELIA, a conversational voice interviewer, and CANDI, a hybrid-retrieval candidate search engine.',
    subsystems: [
      {
        name: 'CELIA',
        kicker: 'Conversational voice interviewer',
        points: [
          'Briefs the candidate, reads the disclaimer, then conducts a one-on-one interview entirely by voice.',
          'Built on a Pipecat pipeline — separate STT, LLM and TTS services with aggregators and Silero VAD, deployed on Modal.',
          'The Bubble.io frontend sends the system prompt with the job context the interview is for, so each interview is role-aware.',
        ],
      },
      {
        name: 'CANDI',
        kicker: 'RAG candidate search',
        points: [
          'On interview completion, ingests the transcript with clean metadata (interview ID, status, company) into Qdrant.',
          'Recruiters search in natural language; I run hybrid retrieval — vector search plus lexical search — for precision and recall.',
          'Company-level filtering keeps every search scoped to the right organisation.',
        ],
      },
    ],
    stack: ['Pipecat', 'Modal', 'Qdrant', 'OpenAI', 'Silero VAD', 'FastAPI', 'Bubble.io'],
  },
  {
    name: 'TRIBUNAL',
    type: 'Multi-agent adversarial reasoning',
    status: 'Building in public',
    period: 'ongoing',
    href: null,
    summary:
      'A multi-agent system where specialised agents debate a question adversarially under a supervisor before reaching a grounded verdict. Built in public, phase by phase, to push the depth of my agent engineering.',
    points: [
      'Single-agent FastAPI core → three-agent shared-state debate over SSE → six-agent supervisor graph with LangGraph checkpointing.',
      'Voice join via Pipecat interrupt/resume, a React debate-arena UI, and a ChromaDB RAG grounding layer.',
    ],
    stack: ['LangGraph', 'FastAPI', 'Pipecat', 'React', 'ChromaDB', 'SSE'],
  },
  {
    name: 'MiniVibe',
    type: 'Open-source · AI web-app generator',
    status: 'Open source',
    period: '',
    href: 'https://github.com/iamnasib/MiniVibe',
    summary:
      'A LangGraph-based agent that generates web apps from a prompt. Open-sourced, with a roadmap toward SQLite checkpointing, human-in-the-loop via interrupt(), per-file output and tool calling.',
    points: [],
    stack: ['LangGraph', 'Python', 'Agents'],
  },
]

// Bubble.io production work — the "rare Bubble + AI" differentiator.
export const bubbleWork = {
  intro:
    'Production apps shipped on Bubble.io since 2023, including paid client work via Upwork. Rare Bubble-plus-AI fluency is where I deliver fastest.',
  apps: [
    'SmrtCoach',
    'Kathy',
    'Kochi Fitness',
    'Football Scoring App',
    'ConnectiumAI (frontend)',
    'Custom plugins (Unique ID generator, UUIDv4)',
  ],
}

export const skills = [
  {
    group: 'AI / ML',
    items: ['LangGraph', 'Pipecat', 'RAG pipelines', 'Re-rankers', 'FastAPI', 'OpenAI APIs', 'Modal', 'Qdrant', 'ChromaDB'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'Angular'],
  },
  {
    group: 'Backend',
    items: ['Python', 'Django', 'FastAPI', 'Node / MERN', 'ASP.NET'],
  },
  {
    group: 'No-Code',
    items: ['Bubble.io', 'Bubble plugins'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'Qdrant', 'ChromaDB', 'Supabase', 'SQL Server'],
  },
]
