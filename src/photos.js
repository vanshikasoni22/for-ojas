// ─────────────────────────────────────────────────────────────────────────
// PHOTO SLOTS
// Every polaroid/photo frame in the scrapbook pulls from this file, keyed
// by slot id.
//
// TO SWAP IN A DIFFERENT PHOTO:
//   1. Drop the image file into  src/assets/photos/  (e.g. arham-day.jpg)
//   2. Import it up top:         import arhamDay from './assets/photos/arham-day.jpg'
//   3. Assign it to its slot:    howWeMet1: arhamDay,
//   4. Save — Vite hot-reloads instantly.
//
// A slot left as `null` falls back to a cute dashed-border placeholder.
// Captions are the hand-written labels shown under each polaroid.
// ─────────────────────────────────────────────────────────────────────────

import coverStationDuo from './assets/photos/cover-station-duo.jpg';
import howWeMetTrioStation from './assets/photos/how-we-met-trio-station.jpg';
import howWeMetLeaningGate from './assets/photos/how-we-met-leaning-gate.jpg';
import herPlaceMirror from './assets/photos/her-place-mirror.jpg';
import herPlaceGoldenHourTrain from './assets/photos/her-place-golden-hour-train.jpg';
import physicalTouchHugGate from './assets/photos/physical-touch-hug-gate.jpg';
import rockyPatchBeachNightTrio from './assets/photos/rocky-patch-beach-night-trio.jpg';
import reunitingTrainTrio from './assets/photos/reuniting-train-trio.jpg';
import reunitingBeachHug from './assets/photos/reuniting-beach-hug.jpg';
import birthdayFlowersCamera from './assets/photos/birthday-flowers-camera.jpg';
import prideRooftopCake1 from './assets/photos/pride-rooftop-cake-1.jpg';
import prideRooftopCake2 from './assets/photos/pride-rooftop-cake-2.jpg';
import backCoverShoulder from './assets/photos/back-cover-shoulder.jpg';

export const photos = {
  cover: coverStationDuo,

  howWeMet1: howWeMetTrioStation,
  howWeMet2: howWeMetLeaningGate,

  herPlace1: herPlaceMirror,
  herPlace2: herPlaceGoldenHourTrain,

  physicalTouch1: physicalTouchHugGate,

  rockyPatch1: rockyPatchBeachNightTrio,

  reuniting1: reunitingTrainTrio,
  reuniting2: reunitingBeachHug,

  birthday1: birthdayFlowersCamera,

  pride1: prideRooftopCake1,
  pride2: prideRooftopCake2,

  finalLetter1: null,

  backCover1: backCoverShoulder,
};

export const captions = {
  cover: 'us, mid-pout, on a station platform',
  howWeMet1: 'the Arham-activity crew',
  howWeMet2: 'instant besties, no notes',
  herPlace1: 'getting ready, talking nonsense',
  herPlace2: 'golden hour, going nowhere in particular',
  physicalTouch1: 'this is basically a hostage situation and I love it',
  rockyPatch1: 'the quiet stretch',
  reuniting1: 'back on our nonsense',
  reuniting2: 'like no time passed at all',
  birthday1: 'flowers, a card, and a tiny camera',
  pride1: 'so proud, so annoying about it',
  pride2: 'my person',
  finalLetter1: 'for the scrapbook, forever',
  backCover1: 'to be continued...',
};
