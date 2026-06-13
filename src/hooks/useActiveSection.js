import { useEffect, useState } from 'react'

// Returns the id of the section currently in the viewport's focal band,
// so the nav can highlight where the user is. Uses a rootMargin band
// centred on the upper-middle of the viewport.
export default function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
