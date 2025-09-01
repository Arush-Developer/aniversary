import React from 'react'

export default function Header() {
  return (
    <header className="py-6 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div style={{ fontFamily: 'Dancing Script, cursive' }} className="text-2xl text-rose-600">For Disha Jain</div>
        <nav>
          <a className="text-sm text-gray-600 mr-4" href="#intro">Intro</a>
          <a className="text-sm text-gray-600 mr-4" href="#fun">Fun</a>
          <a className="text-sm text-gray-600 mr-4" href="#timeline">Memories</a>
          <a className="text-sm text-gray-600" href="#message">Letter</a>
        </nav>
      </div>
    </header>
  )
}
