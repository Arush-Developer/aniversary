import React, { useEffect, useRef } from "react";

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4; // Set volume (0.0 - 1.0)
      audio.play().catch((err) => {
        console.log("Autoplay blocked, waiting for user interaction:", err);
      });
    }
  }, []);

  return (
    <div className="App">
      {/* Hidden audio that plays continuously */}
      <audio ref={audioRef} src="/Background.mp3" autoPlay loop />

      <h1 className="text-3xl font-bold text-center mt-10">
        🎵 Background Music is Playing 🎵
      </h1>
      <p className="text-center text-lg mt-4">
        The music will loop throughout your app.
      </p>
    </div>
  );
}

export default App;
