import { forwardRef } from 'react';
import PageShell from '../components/PageShell';
import NoteCard from '../components/NoteCard';
import { Polaroid, WashiTape, Star, Sparkle, Squiggle } from '../components/decor';
import { photos, captions } from '../photos';

const HowWeMetPage = forwardRef(function HowWeMetPage(props, ref) {
  return (
    <PageShell ref={ref} bg="var(--cream)" pageNumber="01" contentClassName="gap-5 items-center">
      <WashiTape color="var(--mango)" rotate={-5} top="2%" left="30%" width={110} />

      <div className="w-full flex items-center justify-center gap-2 mt-2">
        <Star className="w-5 h-5" color="var(--citrus)" />
        <h2 className="font-marker text-3xl sm:text-4xl text-[#6b2fa0] text-center">
          how we even met
        </h2>
        <Star className="w-5 h-5" color="var(--citrus)" />
      </div>

      <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-6 w-full">
        <Polaroid src={photos.howWeMet1} caption={captions.howWeMet1} rotate={-6} size="sm" />
        <Polaroid src={photos.howWeMet2} caption={captions.howWeMet2} rotate={5} size="sm" className="mt-4" />
      </div>

      <NoteCard rotate={-1} accent="var(--mango)">
        {`Okay so — we weren't even supposed to be friends.

We got roped into the same group activity for Arham, of all people, and somehow by the end of it we were already vibing like we'd known each other for years.

No slow build. No awkward getting-to-know-you phase. Just an instant "oh, it's you" kind of click.

Still the funniest accident of my life.`}
      </NoteCard>

      <Squiggle className="w-24 h-6 opacity-70" />
      <Sparkle className="w-8 h-8 absolute bottom-[8%] right-[10%] opacity-70" color="var(--berry-soft)" />
    </PageShell>
  );
});

export default HowWeMetPage;
