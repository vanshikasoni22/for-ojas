import { forwardRef } from 'react';
import PageShell from '../components/PageShell';
import NoteCard from '../components/NoteCard';
import { Polaroid, WashiTape, Heart, Sparkle } from '../components/decor';
import { photos, captions } from '../photos';

const HerPlacePage = forwardRef(function HerPlacePage(props, ref) {
  return (
    <PageShell
      ref={ref}
      bg="linear-gradient(170deg, var(--leaf-bright) 0%, var(--leaf) 100%)"
      pageNumber="02"
      contentClassName="gap-5 items-center"
    >
      <WashiTape color="var(--mango)" rotate={6} top="3%" right="10%" width={100} />

      <h2 className="font-marker text-3xl sm:text-4xl text-white text-center drop-shadow mt-2">
        coming over to yours
      </h2>
      <p className="font-hand text-white/90 text-lg sm:text-xl -mt-2">the best kind of doing nothing</p>

      <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-6 w-full">
        <Polaroid src={photos.herPlace1} caption={captions.herPlace1} rotate={4} size="sm" />
        <Polaroid src={photos.herPlace2} caption={captions.herPlace2} rotate={-5} size="sm" className="mt-3" />
      </div>

      <NoteCard rotate={1} accent="var(--leaf)">
        {`There's a very specific kind of peace that only exists at your place.

No agenda, no big plans — just showing up, flopping onto whatever surface is closest, and existing together.

Some of my favorite memories with you are the boring ones: just being at yours, doing absolutely nothing, and somehow it still being the best part of my week.`}
      </NoteCard>

      <div className="flex gap-3 mt-1">
        <Heart className="w-6 h-6 opacity-90" color="#fff" />
        <Sparkle className="w-6 h-6 opacity-90" color="var(--mango)" />
        <Heart className="w-6 h-6 opacity-90" color="#fff" />
      </div>
    </PageShell>
  );
});

export default HerPlacePage;
