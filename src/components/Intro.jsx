import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playPop, playWhoosh, setMuted, isMuted } from '../lib/sound';

const STAGE_TIMING = {
  prodInAt: 250,
  prodOutAt: 1750,
  titleInAt: 2050,
  subInAt: 2450,
  zoomAt: 4400,
  doneAt: 5350,
};

export default function Intro({ onComplete }) {
  const [stage, setStage] = useState('black'); // black -> prod -> title -> zoom
  const [muted, setMutedState] = useState(isMuted());
  const finishedRef = useRef(false);
  const timers = useRef([]);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    timers.current.forEach(clearTimeout);
    onComplete?.();
  };

  useEffect(() => {
    timers.current.push(setTimeout(() => setStage('prod'), STAGE_TIMING.prodInAt));
    timers.current.push(setTimeout(() => setStage('prod-out'), STAGE_TIMING.prodOutAt));
    timers.current.push(
      setTimeout(() => {
        setStage('title');
        playPop();
        playWhoosh();
      }, STAGE_TIMING.titleInAt)
    );
    timers.current.push(setTimeout(() => setStage('subtitle'), STAGE_TIMING.subInAt));
    timers.current.push(setTimeout(() => setStage('zoom'), STAGE_TIMING.zoomAt));
    timers.current.push(setTimeout(finish, STAGE_TIMING.doneAt));
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
  };

  const showProd = stage === 'prod';
  const showTitle = stage === 'title' || stage === 'subtitle' || stage === 'zoom';
  const showSubtitle = stage === 'subtitle' || stage === 'zoom';
  const zooming = stage === 'zoom';

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black overflow-hidden flex items-center justify-center"
      animate={zooming ? { scale: 14, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.95, ease: [0.7, 0, 0.9, 0.2] }}
      style={{ transformOrigin: '50% 55%' }}
    >
      {/* ambient glow / spotlight */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 55%, rgba(255,183,3,0.25) 0%, rgba(255,93,143,0.12) 35%, transparent 70%)',
        }}
        animate={{ opacity: showTitle ? 1 : 0.3 }}
        transition={{ duration: 0.8 }}
      />

      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-white/60 hover:text-white text-xs sm:text-sm border border-white/25 rounded-full px-3 py-1.5 backdrop-blur-sm transition-colors"
      >
        {muted ? '🔇 sound off' : '🔊 sound on'}
      </button>

      <button
        onClick={finish}
        className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 z-10 text-white/70 hover:text-white text-xs sm:text-sm border border-white/25 rounded-full px-4 py-2 backdrop-blur-sm transition-colors"
      >
        skip intro →
      </button>

      <AnimatePresence mode="wait">
        {showProd && (
          <motion.p
            key="prod"
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="font-sans text-white/80 text-xs sm:text-base uppercase tracking-[0.35em] px-4 text-center"
          >
            a Vanshika production
          </motion.p>
        )}
      </AnimatePresence>

      {showTitle && (
        <div className="flex flex-col items-center px-4 text-center">
          <motion.h1
            initial={{ scale: 2.4, opacity: 0, filter: 'blur(12px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-marker shimmer-text text-6xl sm:text-8xl md:text-9xl leading-none tracking-wide"
          >
            OJAS
          </motion.h1>

          <AnimatePresence>
            {showSubtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-hand text-white text-2xl sm:text-4xl mt-2 sm:mt-4"
              >
                a main-character story
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
