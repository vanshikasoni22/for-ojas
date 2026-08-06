import { forwardRef } from 'react';
import PageShell from '../components/PageShell';
import NoteCard from '../components/NoteCard';
import { Polaroid, WashiTape, Sparkle, Star, ConfettiScatter } from '../components/decor';
import { photos, captions } from '../photos';

const ReunitingPage = forwardRef(function ReunitingPage(props, ref) {
  return (
    <PageShell
      ref={ref}
      bg="linear-gradient(160deg, var(--mango) 0%, var(--citrus) 55%, var(--watermelon) 100%)"
      pageNumber="05"
      contentClassName="items-center gap-5"
    >
      <ConfettiScatter count={14} seed={22} />
      <WashiTape color="var(--leaf-bright)" rotate={5} top="3%" right="12%" width={100} />

      <div className="flex items-center gap-2 mt-2">
        <Star className="w-6 h-6" color="#fff" />
        <h2 className="font-marker text-3xl sm:text-4xl text-white text-center drop-shadow">
          and then we did
        </h2>
        <Star className="w-6 h-6" color="#fff" />
      </div>

      <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-6 w-full">
        <Polaroid src={photos.reuniting1} caption={captions.reuniting1} rotate={-4} size="sm" />
        <Polaroid src={photos.reuniting2} caption={captions.reuniting2} rotate={6} size="sm" className="mt-3" />
      </div>

      <NoteCard rotate={-1} accent="var(--mango-deep)">
        {`Somehow, we found our way back to each other.

No big dramatic reconciliation — just two people who missed each other, choosing to try again.

I think that says more about us than the good years ever could. We chose this. We keep choosing this.`}
      </NoteCard>

      <Sparkle className="w-9 h-9 opacity-90" color="#fff" />
    </PageShell>
  );
});

export default ReunitingPage;
