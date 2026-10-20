// One notebook entry: a margin note on the left, the writing on the right.
// On small screens the margin note sits above the writing, unless
// marginAfter is set.
export default function Entry({ id, mark, margin, children, first = false, marginAfter = false }) {
  return (
    <section id={id} className="entry" style={first ? { borderTop: 'none' } : undefined}>
      <aside className={marginAfter ? 'entry-margin after' : 'entry-margin'}>
        {mark && <p className="text-accent">{mark}</p>}
        {margin}
      </aside>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
