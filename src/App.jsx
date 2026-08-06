import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Scrapbook from './components/Scrapbook';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div
      className="w-full min-h-[100dvh]"
      style={{
        background: 'radial-gradient(circle at 50% 0%, #2a1810 0%, #170d06 55%, #0d0603 100%)',
      }}
    >
      <AnimatePresence>
        {showIntro && <Intro key="intro" onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && <Scrapbook onReplayIntro={() => setShowIntro(true)} />}
    </div>
  );
}
