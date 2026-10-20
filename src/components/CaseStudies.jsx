import { candi, celia } from '../data/content'
import Entry from './Entry'
import { CandiDiagram, CeliaDiagram } from './Diagrams'

function Meta({ item, extra }) {
  return (
    <div className="mt-1 space-y-3">
      <p>
        {item.where}
        <br />
        {item.when}
      </p>
      <p>{item.stack.join(' · ')}</p>
      {extra}
    </div>
  )
}

export function Celia() {
  return (
    <Entry
      id="celia"
      mark="§1"
      margin={
        <Meta
          item={celia}
          extra={
            <p>
              <a className="ink-link" href={celia.href} target="_blank" rel="noreferrer">
                connectiumai.com ↗
              </a>
            </p>
          }
        />
      }
    >
      <h2 className="entry-title">
        CELIA, <em>a voice interviewer</em>
      </h2>
      <div className="prose-note">
        {celia.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <CeliaDiagram caption={celia.caption} />
    </Entry>
  )
}

export function Candi() {
  return (
    <Entry id="candi" mark="§2" margin={<Meta item={candi} />}>
      <h2 className="entry-title">
        CANDI, <em>search over interviews</em>
      </h2>
      <div className="prose-note">
        {candi.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <CandiDiagram caption={candi.caption} />
    </Entry>
  )
}
