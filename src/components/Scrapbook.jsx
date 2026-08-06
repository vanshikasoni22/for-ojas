import { useEffect, useRef, useState, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { playFlipSound, setMuted, isMuted } from '../lib/sound';

import CoverPage from '../pages/CoverPage';
import HowWeMetPage from '../pages/HowWeMetPage';
import HerPlacePage from '../pages/HerPlacePage';
import PhysicalTouchPage from '../pages/PhysicalTouchPage';
import RockyPatchPage from '../pages/RockyPatchPage';
import ReunitingPage from '../pages/ReunitingPage';
import BirthdayPage from '../pages/BirthdayPage';
import PridePage from '../pages/PridePage';
import FinalLetterPage from '../pages/FinalLetterPage';
import BackCoverPage from '../pages/BackCoverPage';

function useBookSize() {
  const [size, setSize] = useState({ width: 380, height: 560 });

  useEffect(() => {
    function compute() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Reserve room for nav bar + breathing room.
      const availH = vh - 150;
      const availW = vw - 32;

      const ratio = 0.66; // width / height of a single page
      let height = Math.min(availH, 640);
      let width = height * ratio;

      if (width > availW) {
        width = availW;
        height = width / ratio;
      }
      width = Math.max(width, 240);
      height = Math.max(height, 360);

      setSize({ width: Math.round(width), height: Math.round(height) });
    }
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  return size;
}

export default function Scrapbook({ onReplayIntro }) {
  const { width, height } = useBookSize();
  const bookRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [muted, setMutedState] = useState(isMuted());
  const isMobile = width < 480;

  const pages = [
    <CoverPage key="cover" />,
    <HowWeMetPage key="how-we-met" />,
    <HerPlacePage key="her-place" />,
    <PhysicalTouchPage key="physical-touch" />,
    <RockyPatchPage key="rocky-patch" />,
    <ReunitingPage key="reuniting" />,
    <BirthdayPage key="birthday" />,
    <PridePage key="pride" />,
    <FinalLetterPage key="final-letter" />,
    <BackCoverPage key="back-cover" onReplay={onReplayIntro} />,
  ];

  const handleFlip = useCallback((e) => {
    setPageIndex(e.data);
    playFlipSound();
  }, []);

  const goNext = () => bookRef.current?.pageFlip()?.flipNext();
  const goPrev = () => bookRef.current?.pageFlip()?.flipPrev();

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
  };

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center py-4 sm:py-8 px-2 gap-3 sm:gap-5 relative">
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 text-[#3a2415]/70 hover:text-[#3a2415] text-xs sm:text-sm bg-white/70 border border-[#3a2415]/15 rounded-full px-3 py-1.5 backdrop-blur-sm transition-colors"
      >
        {muted ? '🔇' : '🔊'}
      </button>

      <p className="font-hand text-[#ffe6b8] text-lg sm:text-2xl text-center px-4">
        {isMobile ? 'swipe the corner of the page to turn ✨' : 'click or drag a page corner to turn ✨'}
      </p>

      <div
        className="drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
        style={{ width, height }}
      >
        <HTMLFlipBook
          key={`${width}x${height}`}
          ref={bookRef}
          width={width}
          height={height}
          size="fixed"
          minWidth={240}
          maxWidth={700}
          minHeight={360}
          maxHeight={1000}
          showCover={true}
          usePortrait={true}
          mobileScrollSupport={true}
          drawShadow={true}
          flippingTime={700}
          maxShadowOpacity={0.5}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={20}
          showPageCorners={true}
          disableFlipByClick={false}
          onFlip={handleFlip}
          className="mx-auto"
          style={{}}
        >
          {pages}
        </HTMLFlipBook>
      </div>

      <div className="flex items-center gap-4 sm:gap-6 mt-1">
        <button
          onClick={goPrev}
          disabled={pageIndex === 0}
          className="font-hand text-lg sm:text-xl text-white bg-black/25 hover:bg-black/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
          aria-label="Previous page"
        >
          ‹
        </button>
        <span className="font-hand text-white/90 text-base sm:text-lg tabular-nums">
          {pageIndex + 1} / {pages.length}
        </span>
        <button
          onClick={goNext}
          disabled={pageIndex >= pages.length - 1}
          className="font-hand text-lg sm:text-xl text-white bg-black/25 hover:bg-black/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
          aria-label="Next page"
        >
          ›
        </button>
      </div>
    </div>
  );
}
