import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import FunStuff from './components/FunStuff'
import Timeline from './components/Timeline'
import Message from './components/Message'
import FooterCredit from './components/FooterCredit'
import AudioPlayer from './components/AudioPlayer'

export default function App() {
  const [stage, setStage] = useState<'intro' | 'fun' | 'timeline' | 'message' | 'finale'>('intro')

  useEffect(() => {
    const onFinale = () => setStage('finale')
    window.addEventListener('finale-trigger', onFinale)
    return () => window.removeEventListener('finale-trigger', onFinale)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {stage === 'intro' && <Intro onBegin={() => setStage('fun')} />}

        {stage === 'fun' && (
          <>
            <FunStuff onYes={() => setStage('timeline')} />
          </>
        )}

        {stage === 'timeline' && (
          <>
            <Timeline />
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setStage('message')}
                className="rounded-full bg-rose-600 text-white px-6 py-3"
              >
                Read my letter
              </button>
            </div>
          </>
        )}

        {stage === 'message' && <Message />}

        {stage === 'finale' && <FooterCredit />}
      </main>

      {/* 🎵 Audio plays across all pages */}
      <AudioPlayer />
    </div>
  )
}
