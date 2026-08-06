import { forwardRef } from 'react';
import PageShell from '../components/PageShell';
import NoteCard from '../components/NoteCard';
import { Polaroid, WashiTape, Star, Heart, Sparkle } from '../components/decor';
import { photos, captions } from '../photos';

const PridePage = forwardRef(function PridePage(props, ref) {
  return (
    <PageShell
      ref={ref}
      bg="linear-gradient(165deg, var(--leaf-bright) 0%, var(--citrus) 100%)"
      pageNumber="07"
      contentClassName="items-center gap-5"
    >
      <WashiTape color="var(--berry-soft)" rotate={6} top="3%" left="12%" width={100} />

      <h2 className="font-marker text-3xl sm:text-4xl text-white text-center drop-shadow mt-2 px-2">
        for the record
      </h2>

      <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-6 w-full">
        <Polaroid src={photos.pride1} caption={captions.pride1} rotate={5} size="sm" />
        <Polaroid src={photos.pride2} caption={captions.pride2} rotate={-4} size="sm" className="mt-3" />
      </div>

      <NoteCard rotate={-1} accent="var(--leaf)">
        {`I am so proud of you.

The way you've grown. The way you keep choosing softness even when life hasn't been soft to you. The way you show up for the people you love without keeping score.

Being your best friend is one of the actual good things I've built in my life.

I love you, Ojas. Simple as that.`}
      </NoteCard>

      <div className="flex gap-3">
        <Star className="w-6 h-6" color="#fff" />
        <Heart className="w-6 h-6" color="#fff" />
        <Sparkle className="w-6 h-6" color="var(--mango)" />
      </div>
    </PageShell>
  );
});

export default PridePage;
