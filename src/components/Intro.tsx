import React from 'react'
import Typewriter from './Typewriter'
import { motion } from 'framer-motion'

export default function Intro({ onBegin }: { onBegin?: ()=>void }) {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-pink-100 to-pink-300">
      <div className="max-w-3xl w-full rounded-3xl p-8 bg-white/60 backdrop-blur shadow-2xl text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 style={{ fontFamily: 'Dancing Script, cursive' }} className="text-5xl text-rose-600">Hi Disha ❤</h1>
          <div className="mt-4 text-lg text-gray-700">
            <Typewriter text={"I made something just for you...\nScroll and I hope you smile."} speed={36}/>
          </div>

          <div className="mt-8">
            <button onClick={() => { if (onBegin) onBegin() }} className="rounded-full bg-rose-500 text-white px-6 py-3 font-semibold shadow hover:scale-105 transition transform">Go Ahead 💌</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
