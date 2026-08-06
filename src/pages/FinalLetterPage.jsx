import { forwardRef } from 'react';
import PageShell from '../components/PageShell';
import { Polaroid, WashiTape, Heart } from '../components/decor';
import { photos, captions } from '../photos';

const FinalLetterPage = forwardRef(function FinalLetterPage(props, ref) {
  return (
    <PageShell ref={ref} bg="var(--paper)" pageNumber="08" contentClassName="items-center gap-4">
      <WashiTape color="var(--watermelon)" rotate={-4} top="1.5%" left="35%" width={130} />

      <h2 className="font-marker text-3xl sm:text-4xl text-[#6b2fa0] text-center mt-2">
        okay, the real letter now
      </h2>

      <div
        className="relative bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-sm px-5 py-6 sm:px-9 sm:py-8 w-full max-w-2xl"
        style={{ transform: 'rotate(-0.5deg)' }}
      >
        <div className="font-hand text-[19px] sm:text-[22px] leading-relaxed text-[#3a2415] space-y-4">
          <p>Dear Ojas,</p>
          <p>
            If you've made it this far, hi. Thank you for flipping through all my chaotic scrapbooking. I promise
            this is the last page where I make you emotional, and then we're done. Mostly.
          </p>
          <p>
            I wanted to put this together because I don't say this stuff out loud nearly as much as I should. So
            here it is, in writing, so you can't pretend you didn't hear it: you are one of my favorite people to
            exist. Not in a soft, generic, birthday-card kind of way — I mean it specifically, about you. The way
            you laugh at your own jokes before you finish telling them. The way you'll drop everything to sit with
            someone who's having a hard day. The way you love people loudly, with your whole chest, even when it's
            scared you before.
          </p>
          <p>
            We've had our good years and our messy ones. We've been the kind of close where a whole day could pass
            without saying much and it still felt like enough, and we've also been the kind of far where I didn't
            know how to fix it. I'm grateful we didn't let the second kind win. Every version of our friendship —
            the easy one, the hard one, the one we're in right now — has taught me something about how to love
            people better. You did that. Not on purpose, probably. But you did.
          </p>
          <p>
            I know today isn't shaping up exactly how either of us pictured it — you in Mumbai, me in Pune, no cake
            I can hand you in person, no showing up uninvited like I usually do. But distance doesn't get to
            decide how much this day matters, or how much you matter. So consider this my way of showing up
            anyway: scrappy, a little dramatic, entirely too many stickers, but all of it real.
          </p>
          <p>
            Happy birthday, Ojas. Here's to more inside jokes, more falling asleep mid-conversation on a call,
            more showing up at each other's doors the second we're in the same city again. I'm so proud of you,
            I'm so glad I know you, and I will absolutely be bringing up the Arham incident for the rest of our
            lives.
          </p>
          <p className="pt-2">
            Yours, always <br />— Vanshika 💌
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-1">
        <Heart className="w-5 h-5" color="var(--watermelon)" />
        <Polaroid src={photos.finalLetter1} caption={captions.finalLetter1} rotate={2} size="sm" />
        <Heart className="w-5 h-5" color="var(--watermelon)" />
      </div>
    </PageShell>
  );
});

export default FinalLetterPage;
