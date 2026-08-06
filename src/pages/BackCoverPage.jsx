import { forwardRef } from 'react';
import PageShell from '../components/PageShell';
import { Polaroid, WashiTape, Star, Sparkle, ConfettiScatter } from '../components/decor';
import { photos, captions } from '../photos';

const BackCoverPage = forwardRef(function BackCoverPage({ onReplay }, ref) {
  return (
    <PageShell
      ref={ref}
      bg="linear-gradient(160deg, var(--berry) 0%, var(--watermelon) 60%, var(--mango) 100%)"
      contentClassName="items-center justify-safe-center text-center gap-4"
    >
      <ConfettiScatter count={14} seed={33} />
      <WashiTape color="var(--leaf-bright)" rotate={-6} top="5%" left="10%" width={90} />
      <Star className="w-6 h-6 absolute top-[16%] right-[14%] animate-floaty opacity-90" color="#fff" />
      <Sparkle className="w-8 h-8 absolute bottom-[18%] left-[12%] animate-floaty opacity-90" color="#fff" />

      <h2 className="font-marker text-3xl sm:text-5xl text-white drop-shadow">the end… for now</h2>
      <p className="font-hand text-white/90 text-xl sm:text-2xl px-6">
        here's to more chapters, more chaos, more us.
      </p>

      <Polaroid src={photos.backCover1} caption={captions.backCover1} rotate={-3} size="md" />

      {onReplay && (
        <button
          onClick={onReplay}
          className="mt-3 font-hand text-lg sm:text-xl text-[#3a2415] bg-white/90 hover:bg-white transition-colors px-5 py-2 rounded-full shadow-lg"
        >
          ↺ watch the intro again
        </button>
      )}

      <p className="font-hand text-white/70 text-sm sm:text-base mt-2">HBD Ojas — go touch some grass, main character 🍑</p>
    </PageShell>
  );
});

export default BackCoverPage;
