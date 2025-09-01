import React from 'react'
import { motion } from 'framer-motion'

export default function MemoryCard({ src, title, caption, idx }: { src: string; title: string; caption: string; idx: number }) {
  return (
    <section data-idx={idx} className="timeline-item relative">
      <div className="timeline-card grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-white/85 rounded-2xl p-4 shadow-lg border border-white/60">
        <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <div className="w-full h-48 rounded-xl overflow-hidden border border-white/20 shadow-inner">
            <img src={src} alt={title} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div initial={{ x: 10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }} className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-rose-700">{title}</h3>
          <p className="mt-2 text-gray-700">{caption}</p>

          <div className="mt-4 flex gap-3">
            <button onClick={() => window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })} className="rounded-full bg-rose-500 text-white px-4 py-2 shadow hover:scale-105 transform transition">Go ahead</button>
            <button onClick={() => window.dispatchEvent(new Event('celebrate-trigger'))} className="rounded-full border px-4 py-2">Celebrate</button>
          </div>
        </motion.div>

        <div style={{ position: 'absolute', left: '-68px', top: '14px' }}>
          <div className="w-8 h-8 rounded-full bg-white shadow-lg grid place-items-center">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
