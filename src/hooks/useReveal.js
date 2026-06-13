import { useEffect } from 'react'

// Adds `is-visible` to any element with class `reveal` once it scrolls
// into view. Lightweight, dependency-free, runs once per element.
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
