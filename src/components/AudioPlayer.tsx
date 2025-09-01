import React from 'react'

export default function AudioPlayer() {
  const ref = React.useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = React.useState(false)

  React.useEffect(() => {
    if (!ref.current) return
    ref.current.volume = 0.28
    ref.current.loop = true
  }, [])

  const toggle = async () => {
    if (!ref.current) return
    try {
      if (playing) {
        ref.current.pause()
        setPlaying(false)
      } else {
        await ref.current.play()
        setPlaying(true)
      }
    } catch { /* user gesture required in some browsers */ }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full shadow-lg">
      <button onClick={toggle} className="text-rose-600 font-semibold">{playing ? '⏸ Pause' : '▶ Play Lofi'}</button>
      <audio ref={ref} src="/assets/lofi.mp3" />
    </div>
  )
}
