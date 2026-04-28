import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const { threshold = 0.15, rootMargin = '0px', once = true } = options
  const ref = useRef(null)
  const [inView, setInView] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        setInView(true)

        if (once) {
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return [ref, inView]
}
