import React, { useEffect, useRef, useState } from 'react'
import MEMORIES from '../data/memories'
import MemoryCard from './MemoryCard'
import Confetti from 'react-confetti'

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemsRef = useRef<HTMLElement[]>([])
  const [lineHeight, setLineHeight] = useState('40px')
  const [activeIndex, setActiveIndex] = useState(-1)
  const [celebrate, setCelebrate] = useState(false)

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, MEMORIES.length)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const idx = Number(entry.target.getAttribute('data-idx'))
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          setActiveIndex((prev) => Math.max(prev, idx))
          updateLine(idx)
        }
      })
    }, { threshold: 0.45 })

    itemsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function updateLine(lastIdx: number) {
    const container = containerRef.current
    if (!container) return
    const lastEl = itemsRef.current[lastIdx]
    if (!lastEl) return
    const containerRect = container.getBoundingClientRect()
    const lastRect = lastEl.getBoundingClientRect()
    const relative = (lastRect.top + lastRect.height / 2) - containerRect.top
    const px = Math.max(60, relative + 20)
    setLineHeight(`${px}px`)
  }

  useEffect(() => {
    const onCelebrate = () => {
      setCelebrate(true)
      setTimeout(() => setCelebrate(false), 3500)
    }
    window.addEventListener('celebrate-trigger', onCelebrate)
    return () => window.removeEventListener('celebrate-trigger', onCelebrate)
  }, [])

  useEffect(() => {
    if (activeIndex === MEMORIES.length - 1) {
      setCelebrate(true)
      setTimeout(() => setCelebrate(false), 3500)
    }
  }, [activeIndex])

  return (
    <section id="timeline" className="min-h-screen flex items-start justify-center px-6 py-12 bg-gradient-to-br from-pink-50 to-lilac/10">
      <div ref={containerRef} className="max-w-4xl w-full timeline-container relative">
        <div className="timeline-line" style={{ height: lineHeight }} />
        {celebrate && <Confetti recycle={false} numberOfPieces={300} />}
        <div className="space-y-10 pl-20 md:pl-28">
          {MEMORIES.map((m, i) => (
            <div key={i} ref={(el) => { if (el) itemsRef.current[i] = el as HTMLElement }} >
              <MemoryCard src={m.src} title={m.title} caption={m.caption} idx={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
