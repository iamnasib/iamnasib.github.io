// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update text.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Nasib Farooq',
  role: 'AI Engineer',
  tagline: 'I build production AI systems that listen, reason, and decide.',
  location: 'Srinagar, India',
  email: 'nasibfarooq@gmail.com',
  // Replace /profile-placeholder.svg with your real photo in /public.
  photo: '/profile-placeholder.svg',
  socials: {
    github: 'https://github.com/iamnasib',
    linkedin: 'https://www.linkedin.com/in/iamnasib',
    twitter: 'https://twitter.com/Iamnaasib',
  },
}

export const about = {
  paragraphs: [
    "I'm a 24-year-old developer from Kashmir, building since 2021. I combine no-code efficiency with custom engineering — RAG pipelines, voice agents, and multi-agent systems on the AI side; Bubble.io for rapid production builds on the platform side.",
    "At Vings Technologies I led AI and platform engineering for ConnectiumAI, an AI-driven hiring platform. I built CELIA, a production conversational voice interviewer running on Pipecat, and designed the candidate RAG pipeline — alongside a full assessment engine, scheduling, billing, and third-party integrations.",
    "I ship products that solve real problems, not demos. The rare Bubble-plus-AI combination is where I move fastest.",
  ],
  facts: [
    { label: 'Based in', value: 'Srinagar, India' },
    { label: 'Building since', value: '2021' },
    { label: 'Currently', value: 'Hotsourced.io' },
    { label: 'Focus', value: 'AI Engineering' },
  ],
}

// ─── EXPERIENCE ──────────────────────────────────────────────

export const experience = [
  {
    role: 'Bubble Developer',
    company: 'Hotsourced',
    location: 'Remote · London, UK',
    period: 'April 2026 – Present',
    points: [
      'Building and maintaining production Bubble.io applications for clients.',
    ],
  },
  {
    role: 'Bubble Developer (Lead) / AI Engineer',
    company: 'Vings Technologies',
    location: 'Remote · CA, US',
    period: 'Aug 2024 – March 2026',
    points: [
      'Led development of ConnectiumAI — an AI-driven hiring and assessment platform — across both AI system engineering (Python) and product platform engineering (Bubble.io + integrations).',
      'Built CELIA, a production conversational AI interviewer using the Pipecat pipeline, FastAPI, and hosted model infrastructure with container snapshot loading for low-latency sessions.',
      'Designed a RAG pipeline for intelligent candidate profile search using embeddings and vector retrieval.',
      'Architected a configurable AI Assessment Engine supporting text, video, and hybrid interviews with dynamic question generation, automated evaluation, and feedback reports.',
      'Integrated Daily.co for live interviews with recording, transcription, and AI-generated summaries.',
      'Implemented Microsoft Graph API to surface candidate–company email engagement insights.',
      'Designed real-time scheduling workflows using Calendly APIs and interviewer availability logic.',
      'Engineered a modular billing system with pricing plans, offers, and date-based controls.',
      'Built onboarding and role-based workflows for candidates, interviewers, and companies.',
    ],
  },
  {
    role: 'Bubble.io Developer',
    company: 'Freelance',
    location: 'Remote',
    period: 'June 2023 – Present',
    points: [
      'CMG Compass: Business assessment MVP with domain-based COMPASS evaluation, financial analysis using NAICS benchmarks, Claude AI-generated reports, and Stripe payments.',
      'SmrtCoach: Coaching SaaS with SmrtAssessment chat, session scheduling, event management, and OpenAI-integrated learning modules.',
      'Kathy: AI-powered real estate listing platform — auto-generates property descriptions using GPT.',
      'KochiFitness: Coaching platform with 1:1 chat, video conferencing, and a creator hub (Kochi Konnect).',
      'BookDeskriptor: OpenAI-integrated book description generator with plan-based usage limits.',
      'Published Bubble.io plugins: Unique ID Generator and Copy to Clipboard.',
      '12+ additional client engagements — feature builds, API integrations, UI enhancements, bug fixes.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Feb 2023 – Present',
    points: [
      'Farukhsons Enterprises: Full-stack web app (React, Django REST, Tailwind) with service listings, project showcases, inquiry management, admin dashboard, and a public bill-making tool.',
      'Posttrex: Social media web app.',
      'Shagoo Designs: Static website for an interior design business.',
    ],
  },
  {
    role: 'FlutterFlow Developer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Feb 2024 – Jun 2024',
    points: [],
  },
]

// ─── PROJECTS ────────────────────────────────────────────────

export const projects = [
  {
    name: 'ConnectiumAI',
    type: 'Flagship · AI Recruitment Platform',
    tagline: 'An AI-driven platform where conversations become verifiable proof of skills.',
    status: 'Live',
    href: 'https://connectiumai.com',
    summary:
      'Built at Vings Technologies — an end-to-end AI hiring platform. I owned both the AI engineering and the product platform, shipping two AI subsystems and the full surrounding infrastructure.',
    subsystems: [
      {
        name: 'CELIA',
        kicker: 'Production voice interviewer',
        points: [
          'Conducts one-on-one AI interviews entirely by voice — briefs the candidate, reads the disclaimer, then runs the session.',
          'Built on a Pipecat pipeline with separate STT, LLM, and TTS, using hosted model infrastructure with container snapshot loading for low-latency startup.',
          'The Bubble.io frontend sends the system prompt with the job role context, making each interview role-aware.',
        ],
      },
      {
        name: 'CANDI',
        kicker: 'RAG candidate search',
        points: [
          'On interview completion, ingests the transcript with structured metadata (interview ID, status, company) into a vector store.',
          'Recruiters search in plain language; the pipeline runs hybrid retrieval — embeddings plus lexical search — with company-level filtering.',
        ],
      },
    ],
    platformWork: [
      'AI Assessment Engine: text, video, and hybrid interviews with dynamic question generation, automated evaluation, and feedback reports.',
      'Daily.co integration: live interviews with recording, transcription, and AI-generated summaries.',
      'Microsoft Graph API: surfaces candidate–company email engagement insights for interviewers.',
      'Calendly APIs: real-time scheduling workflows with interviewer availability logic.',
      'Modular billing system with pricing plans, offers, and date-based controls.',
      'Onboarding and role-based workflows for candidates, interviewers, and companies.',
    ],
    stack: ['Pipecat', 'FastAPI', 'Python', 'RAG', 'Embeddings', 'Daily.co', 'Microsoft Graph', 'Calendly', 'Bubble.io', 'Stripe'],
  },
  {
    name: 'TRIBUNAL',
    type: 'Multi-agent adversarial reasoning',
    status: 'Building in public',
    href: null,
    summary:
      'A multi-agent system where specialised agents debate a question adversarially under a supervisor before reaching a grounded verdict. Built in public, phase by phase.',
    points: [
      'Single-agent FastAPI core → three-agent shared-state debate over SSE → six-agent supervisor graph with LangGraph checkpointing.',
      'Voice join via Pipecat interrupt/resume, React debate-arena UI, and a ChromaDB RAG grounding layer.',
    ],
    stack: ['LangGraph', 'FastAPI', 'Pipecat', 'React', 'ChromaDB', 'SSE'],
  },
  {
    name: 'MiniVibe',
    type: 'Open-source · AI web-app generator',
    status: 'Open source',
    href: 'https://github.com/iamnasib/MiniVibe',
    summary:
      'A LangGraph-based agent that generates web apps from a prompt. Roadmap: SQLite checkpointing, human-in-the-loop via interrupt(), per-file output, tool calling.',
    points: [],
    stack: ['LangGraph', 'Python', 'Agents'],
  },
  {
    name: 'CMG Compass',
    type: 'Freelance · Business Assessment MVP',
    status: 'In testing',
    href: null,
    summary:
      'A prototype business assessment platform with domain-based COMPASS evaluation and financial analysis using NAICS benchmarks. Integrated Claude AI to generate structured reports and Stripe for one-time purchases and subscription plans.',
    points: [],
    stack: ['Bubble.io', 'Claude AI', 'Stripe', 'NAICS'],
  },
]

// ─── SKILLS ──────────────────────────────────────────────────

export const skills = [
  {
    group: 'AI / ML',
    items: [
      'LLM Integration', 'RAG Pipelines', 'Prompt Engineering',
      'Embeddings', 'Vector Search', 'Pipecat', 'LangGraph',
      'Scikit-Learn', 'NumPy', 'Pandas', 'Model Evaluation',
      'Feature Engineering', 'OpenAI API',
    ],
  },
  {
    group: 'Backend & APIs',
    items: ['Python', 'FastAPI', 'Django', 'Django REST', 'Flask', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    group: 'No-Code & Integrations',
    items: ['Bubble.io', 'Plugin Development', 'FlutterFlow', 'Microsoft Graph', 'Daily.co', 'Calendly', 'Stripe'],
  },
  {
    group: 'Databases',
    items: ['MongoDB', 'SQL', 'PostgreSQL', 'ChromaDB'],
  },
]

// ─── EDUCATION ───────────────────────────────────────────────

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'CASET College of Science and Engineering, Srinagar',
    period: 'Oct 2022 – 2025',
  },
  {
    degree: 'Certification — Data Science',
    institution: 'CodeWithHarry',
    period: 'Apr 2025 – Nov 2025',
  },
  {
    degree: 'Certification — Full Stack Development',
    institution: 'Softstacks Technologies Pvt. Ltd.',
    period: 'Dec 2020 – Jul 2021',
  },
]
