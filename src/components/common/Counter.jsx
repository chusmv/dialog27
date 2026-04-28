import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'

export function Counter({ end, suffix = '', duration = 1800 }) {
  const [value, setValue] = useState(0)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (!inView) {
      return undefined
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || end === 0) {
      const animationFrame = window.requestAnimationFrame(() => setValue(end))
      return () => window.cancelAnimationFrame(animationFrame)
    }

    let animationFrame = 0
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick)
      } else {
        setValue(end)
      }
    }

    animationFrame = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(animationFrame)
  }, [duration, end, inView])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
