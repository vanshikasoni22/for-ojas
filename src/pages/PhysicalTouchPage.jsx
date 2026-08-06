import { forwardRef } from 'react';
import PageShell from '../components/PageShell';
import NoteCard from '../components/NoteCard';
import { Polaroid, WashiTape, Heart, ArrowScribble } from '../components/decor';
import { photos, captions } from '../photos';

const HEARTS = [
  { top: '8%', left: '8%', size: 'w-6 h-6', rotate: -10, delay: '0s' },
  { top: '14%', right: '10%', size: 'w-8 h-8', rotate: 8, delay: '0.4s' },
  { top: '30%', left: '4%', size: 'w-5 h-5', rotate: 4, delay: '0.9s' },
  { bottom: '18%', right: '6%', size: 'w-7 h-7', rotate: -6, delay: '1.3s' },
  { bottom: '10%', left: '10%', size: 'w-5 h-5', rotate: 12, delay: '0.6s' },
];

const PhysicalTouchPage = forwardRef(function PhysicalTouchPage(props, ref) {
  return (
    <PageShell
      ref={ref}
      bg="linear-gradient(170deg, var(--watermelon-soft) 0%, var(--watermelon) 100%)"
      pageNumber="03"
      contentClassName="items-center justify-safe-center gap-5 text-center"
    >
      {HEARTS.map((h, i) => (
        <Heart
          key={i}
          className={`${h.size} absolute animate-floaty opacity-90`}
          color="#fff"
          style={{ top: h.top, left: h.left, right: h.right, bottom: h.bottom, animationDelay: h.delay }}
        />
      ))}

      <WashiTape color="var(--berry-soft)" rotate={-4} top="4%" left="38%" width={110} />

      <h2 className="font-marker text-3xl sm:text-4xl text-white drop-shadow">
        your love language, decoded
      </h2>

      <Polaroid src={photos.physicalTouch1} caption={captions.physicalTouch1} rotate={3} size="md" />

      <NoteCard rotate={-2} accent="var(--berry-soft)" className="text-left">
        {`You show up as a hug before you show up as words.

Bumping shoulders, stealing my arm to hold onto, leaning your head on me mid-conversation like it's the most normal thing in the world — that's just how you say "I'm glad you're here."

I noticed. I love that about you.`}
      </NoteCard>

      <ArrowScribble className="w-20 h-10 opacity-80" color="#fff" />
    </PageShell>
  );
});

export default PhysicalTouchPage;
