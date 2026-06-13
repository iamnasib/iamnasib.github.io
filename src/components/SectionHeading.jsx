export default function SectionHeading({ index, title }) {
  return (
    <div className="reveal mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-emerald-accent">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  )
}
