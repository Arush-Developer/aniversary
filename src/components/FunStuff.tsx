import React from 'react'
import { motion } from 'framer-motion'

function HeartBurst({ x, y }: { x: number; y: number }) {
  const style: React.CSSProperties = { position: 'absolute', left: x - 18, top: y - 18 }
  return <div style={style} className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 grid place-items-center text-white pointer-events-none shadow-lg">💖</div>
}

export default function FunStuff() {
  const [bursts, setBursts] = React.useState<{ id: number; x: number; y: number }[]>([])

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const id = Date.now()
      setBursts((s) => [...s, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => setBursts((s) => s.filter((b) => b.id !== id)), 900)
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  return (
    <section id="fun" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-roseGold/30 to-lilac/20">
      <div className="max-w-4xl w-full rounded-3xl p-8 bg-white/70 backdrop-blur shadow-lg text-center">
        <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} style={{ fontFamily: 'Dancing Script, cursive' }} className="text-3xl text-rose-600">A little fun ✨</motion.h2>
        <p className="mt-3 text-gray-700">Click anywhere and watch a heart burst — try it!</p>
        <div className="mt-6">
          <motion.div whileHover={{ scale: 1.03 }} className="inline-block rounded-xl px-5 py-3 bg-rose-50 border border-rose-100">
            <button className="text-rose-600 font-medium">Drag stars to spell DISHA (coming)</button>
          </motion.div>
        </div>
      </div>

      {bursts.map((b) => <HeartBurst key={b.id} x={b.x} y={b.y} />)}
    </section>
  )
}
