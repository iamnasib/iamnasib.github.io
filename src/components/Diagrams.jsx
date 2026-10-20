// Hand-drawn system diagrams. Inline SVG, ink in currentColor, red pencil
// reserved for the one element each figure is about.

function Arrowhead({ id }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="8"
        markerHeight="8"
        markerUnits="userSpaceOnUse"
        orient="auto-start-reverse"
      >
        <path d="M1,1 L7,4 L1,7" fill="none" stroke="currentColor" strokeWidth="1.25" />
      </marker>
    </defs>
  )
}

function Node({ x, y, w, h = 40, label, accent = false }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="3" className={accent ? 'node accent-stroke' : 'node'} />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" className={accent ? 'accent-text' : undefined}>
        {label}
      </text>
    </g>
  )
}

export function CeliaDiagram({ caption }) {
  const arrow = 'url(#celia-arrow)'
  return (
    <figure className="fig">
      <div className="fig-scroll">
        <svg
          viewBox="0 0 640 272"
          role="img"
          aria-label="A CELIA session: the Bubble.io app sends the system prompt and job context to the LLM. The candidate's speech, over a Daily.co call, flows through Silero VAD, OpenAI speech-to-text, the OpenAI LLM and OpenAI text-to-speech, inside one FastAPI service on Modal restored from a container snapshot, and the spoken reply returns to the candidate."
        >
          <Arrowhead id="celia-arrow" />

          {/* Bubble.io sets the role */}
          <Node x={340} y={12} w={150} h={36} label="Bubble.io app" />
          <line x1="415" y1="48" x2="415" y2="128" className="wire" markerEnd={arrow} />
          <text x="425" y="80">system prompt</text>
          <text x="425" y="95">+ job context</text>

          {/* one FastAPI service on Modal, restored from a snapshot */}
          <rect x="160" y="108" width="410" height="110" rx="4" className="wire accent-stroke" strokeDasharray="5 4" />
          <text x="172" y="208" className="accent-text" style={{ fontSize: 11 }}>
            FastAPI on Modal · restored from a container snapshot
          </text>

          {/* candidate in */}
          <Node x={14} y={130} w={96} label="candidate" />
          <line x1="110" y1="150" x2="176" y2="150" className="wire" markerEnd={arrow} />
          <text x="133" y="142" textAnchor="middle">speech</text>

          {/* pipeline */}
          <Node x={178} y={130} w={64} label="VAD" />
          <line x1="242" y1="150" x2="268" y2="150" className="wire" markerEnd={arrow} />
          <Node x={270} y={130} w={64} label="STT" />
          <line x1="334" y1="150" x2="378" y2="150" className="wire" markerEnd={arrow} />
          <circle cx="356" cy="150" r="3.5" className="dot" />
          <Node x={380} y={130} w={70} label="LLM" />
          <line x1="450" y1="150" x2="476" y2="150" className="wire" markerEnd={arrow} />
          <circle cx="463" cy="150" r="3.5" className="dot" />
          <Node x={478} y={130} w={64} label="TTS" />

          {/* who provides each step */}
          <g className="soft" style={{ fontSize: 10.5 }} textAnchor="middle">
            <text x="210" y="186">Silero</text>
            <text x="302" y="186">OpenAI</text>
            <text x="415" y="186">OpenAI</text>
            <text x="510" y="186">OpenAI</text>
          </g>

          {/* reply back out */}
          <polyline points="542,150 604,150 604,240 62,240 62,172" className="wire" markerEnd={arrow} />
          <text x="333" y="233" textAnchor="middle">spoken reply, over Daily.co</text>

          <circle cx="18" cy="262" r="3.5" className="dot" />
          <text x="28" y="266" className="soft" style={{ fontSize: 11 }}>context aggregator</text>
        </svg>
      </div>
      <p className="fig-hint">Swipe sideways for the whole figure →</p>
      <figcaption>Fig. 1. {caption}</figcaption>
    </figure>
  )
}

export function CandiDiagram({ caption }) {
  const arrow = 'url(#candi-arrow)'
  return (
    <figure className="fig">
      <div className="fig-scroll">
        <svg
          viewBox="0 0 640 262"
          role="img"
          aria-label="CANDI: when an interview ends, the transcript plus interview ID, status and company is embedded and upserted into Qdrant. When a recruiter searches, the query is filtered by company and run as vector plus lexical search against Qdrant; the top matches pass through a re-ranker and the ranked candidates return to the recruiter."
        >
          <Arrowhead id="candi-arrow" />

          {/* write path */}
          <text x="14" y="26" className="soft" style={{ fontSize: 11 }}>on interview end</text>
          <Node x={14} y={40} w={126} h={36} label="transcript" />
          <line x1="140" y1="58" x2="318" y2="58" className="wire" markerEnd={arrow} />
          <text x="229" y="50" textAnchor="middle">+ id, status, company</text>
          <Node x={320} y={40} w={150} h={36} label="embed" />
          <line x1="470" y1="58" x2="518" y2="58" className="wire" markerEnd={arrow} />
          <text x="494" y="50" textAnchor="middle">upsert</text>

          {/* the shared store */}
          <rect x="520" y="40" width="106" height="164" rx="3" className="node" />
          <text x="573" y="118" textAnchor="middle">Qdrant</text>
          <text x="573" y="134" textAnchor="middle" className="soft" style={{ fontSize: 11 }}>collection</text>

          {/* read path */}
          <text x="14" y="150" className="soft" style={{ fontSize: 11 }}>on search</text>
          <Node x={14} y={164} w={126} h={36} label="recruiter query" />
          <line x1="140" y1="182" x2="163" y2="182" className="wire" markerEnd={arrow} />
          <Node x={165} y={164} w={130} h={36} label="company filter" accent />
          <line x1="295" y1="182" x2="318" y2="182" className="wire" markerEnd={arrow} />
          <Node x={320} y={164} w={150} h={36} label="vector + lexical" />
          <line x1="470" y1="182" x2="518" y2="182" className="wire" markerEnd={arrow} />
          <text x="494" y="174" textAnchor="middle">search</text>

          {/* results back, through the re-ranker */}
          <polyline points="573,204 573,236 392,236" className="wire" markerEnd={arrow} />
          <text x="482" y="229" textAnchor="middle">top matches</text>
          <Node x={290} y={220} w={100} h={32} label="re-ranker" />
          <polyline points="290,236 77,236 77,202" className="wire" markerEnd={arrow} />
          <text x="183" y="229" textAnchor="middle">ranked candidates</text>
        </svg>
      </div>
      <p className="fig-hint">Swipe sideways for the whole figure →</p>
      <figcaption>Fig. 2. {caption}</figcaption>
    </figure>
  )
}
