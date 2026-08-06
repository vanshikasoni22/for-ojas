import { forwardRef } from 'react';
import PageShell from '../components/PageShell';
import NoteCard from '../components/NoteCard';
import { Polaroid, WashiTape, Heart, Sparkle } from '../components/decor';
import { photos, captions } from '../photos';

const BirthdayPage = forwardRef(function BirthdayPage(props, ref) {
  return (
    <PageShell
      ref={ref}
      bg="linear-gradient(170deg, var(--berry-soft) 0%, var(--berry) 100%)"
      pageNumber="06"
      contentClassName="items-center gap-5"
    >
      <WashiTape color="var(--mango)" rotate={-5} top="3%" left="8%" width={100} />
      <WashiTape color="var(--leaf-bright)" rotate={4} top="3%" right="8%" width={100} />

      <div className="flex items-center gap-2 mt-2 flex-wrap justify-center">
        <Heart className="w-6 h-6" color="#fff" />
        <h2 className="font-marker text-3xl sm:text-4xl text-white text-center drop-shadow px-2">
          about today
        </h2>
        <Heart className="w-6 h-6" color="#fff" />
      </div>
      <p className="font-hand text-white/90 text-lg sm:text-xl -mt-2 text-center px-4">
        Pune ✈️ Patna, but here we are anyway
      </p>

      <Polaroid src={photos.birthday1} caption={captions.birthday1} rotate={-3} size="md" />

      <NoteCard rotate={2} accent="var(--berry)">
        {`You have this habit of cancelling your own birthday plans — like your day doesn't deserve the fuss you'd throw for literally anyone else.

I've watched you do it more than once, and every time it low-key breaks my heart a little.

This year you're in Patna and I'm in Pune, and for the first time in a while I can't just show up at your door with cake and chaos. I hate that. I genuinely wish I could be there.

But wherever you are, I need you to know: I'm thinking about you today. Loudly. From far away.`}
      </NoteCard>

      <Sparkle className="w-8 h-8 opacity-90" color="var(--mango)" />
    </PageShell>
  );
});

export default BirthdayPage;
