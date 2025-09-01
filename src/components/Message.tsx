import React from 'react'
import Typewriter from './Typewriter'

const LETTER = `My dearest Pgl,

Happy 4 Years, my pgll❤✨

4 saal ho gaye hum dono ko saath… 🌍 aur har din, har moment, tu meri life ka sabse beautiful part bani ho. Aaj chahe hum mil nhi paaye, par meri feelings aur pyaar hamesha tere sath hi h.💞💖🥰😘
 Tu meri smile ki wajah h, meri life ki sabse badi strength h.😚❤
Aaj ke din main bas itna kehna chahta I’m lucky to have you, and I promise har din tujhe aur zyada special feel karvata rahunga. 🥰😚

Cheers to our 4 years of love, trust & togetherness… aur countless saal aur aane wale h. 🫶
I love you, forever & always💖❤🌍
`

export default function Message() {
  return (
    <section id="message" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-roseGold/20 to-pink-50">
      <div className="max-w-3xl w-full rounded-3xl p-8 bg-white/95 shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="w-20 shrink-0">
            <div className="rounded-xl w-full h-full bg-rose-50 grid place-items-center text-2xl">💌</div>
          </div>
          <div className="flex-1">
            <h2 style={{ fontFamily: 'Dancing Script, cursive' }} className="text-2xl font-bold text-rose-700">A letter for Disha</h2>
            <div className="mt-3 prose max-w-none text-gray-800">
              <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed"><Typewriter text={LETTER} speed={18}/></pre>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button onClick={() => window.dispatchEvent(new Event('finale-trigger'))} className="rounded-full bg-rose-600 px-6 py-2 text-white font-semibold">Final surprise</button>
              <div className="text-xs text-gray-500">Typed with care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
