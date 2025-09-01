import React from 'react'

export default function Typewriter({ text, speed = 40 }: { text: string; speed?: number }) {
  const [out, setOut] = React.useState('')
  React.useEffect(() => {
    let i = 0
    setOut('')
    const t = setInterval(() => {
      setOut((s) => s + (text[i] || ''))
      i++
      if (i >= text.length) clearInterval(t)
    }, speed)
    return () => clearInterval(t)
  }, [text, speed])
  return <div className="whitespace-pre-wrap">{out}</div>
}
