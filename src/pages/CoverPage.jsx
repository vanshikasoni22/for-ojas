import { forwardRef } from 'react';
import PageShell from '../components/PageShell';
import { Polaroid, WashiTape, Star, Heart, Sparkle, ConfettiScatter } from '../components/decor';
import { photos, captions } from '../photos';

const CoverPage = forwardRef(function CoverPage(props, ref) {
  return (
    <PageShell
      ref={ref}
      bg="linear-gradient(160deg, var(--watermelon) 0%, var(--citrus) 45%, var(--mango) 100%)"
      contentClassName="items-center justify-safe-center text-center gap-4 sm:gap-6"
    >
      <ConfettiScatter count={16} seed={11} />

      <WashiTape color="var(--berry-soft)" rotate={-8} top="4%" left="6%" width={100} />
      <WashiTape color="var(--leaf-bright)" rotate={7} top="5%" right="6%" width={100} />

      <Star className="w-7 h-7 absolute top-[14%] left-[10%] animate-floaty opacity-90" />
      <Sparkle className="w-10 h-10 absolute top-[20%] right-[12%] animate-floaty opacity-90" color="#fff" />
      <Heart className="w-6 h-6 absolute bottom-[20%] left-[14%] animate-floaty opacity-90" color="#fff8" />

      <p className="font-hand text-white/90 text-lg sm:text-xl tracking-wide drop-shadow">
        a scrapbook production
      </p>

      <h1 className="font-marker text-white text-5xl sm:text-7xl leading-none drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)] px-2">
        OJAS
      </h1>

      <p className="font-hand text-white text-2xl sm:text-4xl -mt-1 sm:-mt-3">
        a main-character story
      </p>

      <Polaroid
        src={photos.cover}
        caption={captions.cover}
        rotate={-4}
        size="md"
        className="mt-3 sm:mt-4"
      />

      <p className="font-hand text-white/95 text-lg sm:text-xl mt-2">
        written &amp; assembled by Vanshika 💌
      </p>

      <p className="font-hand text-white/80 text-base sm:text-lg animate-pulse mt-1">
        tap or swipe to open →
      </p>
    </PageShell>
  );
});

export default CoverPage;
