// ─────────────────────────────────────────────────────────────────────────
// PHOTO SLOTS
// Every polaroid/photo frame in the scrapbook pulls from this file, keyed
// by slot id. Right now every value is `null`, which renders a cute
// placeholder (dashed border + camera icon) so you can build & preview the
// whole book before you have final photos picked.
//
// TO SWAP IN A REAL PHOTO:
//   1. Drop the image file into  src/assets/photos/  (e.g. arham-day.jpg)
//   2. Import it up top:         import arhamDay from './assets/photos/arham-day.jpg'
//   3. Assign it to its slot:    howWeMet1: arhamDay,
//   4. Save — Vite hot-reloads instantly.
//
// Captions are optional hand-written labels shown under each polaroid.
// ─────────────────────────────────────────────────────────────────────────

export const photos = {
  cover: null,

  howWeMet1: null,
  howWeMet2: null,

  herPlace1: null,
  herPlace2: null,

  physicalTouch1: null,

  rockyPatch1: null,

  reuniting1: null,
  reuniting2: null,

  birthday1: null,

  pride1: null,
  pride2: null,

  finalLetter1: null,

  backCover1: null,
};

export const captions = {
  cover: 'us, probably mid-argument about something dumb',
  howWeMet1: 'exhibit A: the Arham incident',
  howWeMet2: 'instant besties, no notes',
  herPlace1: 'doing absolutely nothing, perfectly',
  herPlace2: 'your couch, my second home',
  physicalTouch1: 'this is basically a hostage situation and I love it',
  rockyPatch1: 'the quiet stretch',
  reuniting1: 'back on our nonsense',
  reuniting2: 'like no time passed at all',
  birthday1: 'a birthday I actually got you to celebrate',
  pride1: 'so proud, so annoying about it',
  pride2: 'my person',
  finalLetter1: 'for the scrapbook, forever',
  backCover1: 'to be continued...',
};
