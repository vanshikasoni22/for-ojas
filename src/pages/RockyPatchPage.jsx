import { forwardRef } from 'react';
import PageShell from '../components/PageShell';
import NoteCard from '../components/NoteCard';
import { Polaroid, WashiTape } from '../components/decor';
import { photos, captions } from '../photos';

const RockyPatchPage = forwardRef(function RockyPatchPage(props, ref) {
  return (
    <PageShell
      ref={ref}
      bg="linear-gradient(175deg, #4a2b5c 0%, #2e1a3c 100%)"
      pageNumber="04"
      dim
      contentClassName="items-center justify-safe-center gap-5 text-center"
    >
      <WashiTape color="var(--berry)" rotate={-6} top="4%" left="8%" width={90} className="opacity-50" />
      <WashiTape color="var(--ink-soft)" rotate={5} bottom="6%" right="8%" width={90} className="opacity-40" />

      <h2 className="font-marker text-2xl sm:text-3xl text-[#f0e4ff] drop-shadow px-4">
        the part I don't usually put in scrapbooks
      </h2>

      <div className="grayscale opacity-90 contrast-75">
        <Polaroid src={photos.rockyPatch1} caption={captions.rockyPatch1} rotate={-3} size="sm" />
      </div>

      <NoteCard rotate={0} accent="#a06bd6" className="bg-[#fbf3ff]/95">
        {`We weren't always steady.

There was a stretch where we lost each other a little — less texting, a few fights, some silence that felt too long to be an accident.

I'm not going to pretend that part didn't happen, or make it prettier than it was. It was hard, and it was real, and for a while I genuinely didn't know if we'd find our way back.

This page gets to exist too. It's still us.`}
      </NoteCard>
    </PageShell>
  );
});

export default RockyPatchPage;
