# for Ojas 🍑💌

A digital scrapbook / birthday-friendship gift, built as an interactive flipbook.
Opens with a Netflix-style title card ("OJAS — A Main-Character Story"), then zooms
into a 10-page scrapbook you flip through like a real book.

## Running it locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL. Works on desktop and mobile browsers.

## Adding real photos

Every polaroid on every page is a placeholder until you swap it in. All of it is
controlled from one file: **[`src/photos.js`](src/photos.js)**.

1. Drop your image files into `src/assets/photos/` (already gitignored-friendly —
   just regular files, e.g. `arham-day.jpg`).
2. In `src/photos.js`, import the image and assign it to its slot:
   ```js
   import arhamDay from './assets/photos/arham-day.jpg';

   export const photos = {
     ...
     howWeMet1: arhamDay,
     ...
   };
   ```
3. Save — Vite hot-reloads instantly, no other code needs to change.

Captions under each polaroid live in the `captions` export in the same file if you
want to reword any of them.

## Editing the writing

Each page is its own file in `src/pages/`. The handwritten note text is a plain
template string inside a `<NoteCard>` component — edit it directly, line breaks in
the string become paragraph breaks.

| Page | File |
|---|---|
| Cover | `src/pages/CoverPage.jsx` |
| How we met | `src/pages/HowWeMetPage.jsx` |
| Her place | `src/pages/HerPlacePage.jsx` |
| Physical touch | `src/pages/PhysicalTouchPage.jsx` |
| The rocky patch | `src/pages/RockyPatchPage.jsx` |
| Reuniting | `src/pages/ReunitingPage.jsx` |
| Birthday memory | `src/pages/BirthdayPage.jsx` |
| Pride & love | `src/pages/PridePage.jsx` |
| Final letter | `src/pages/FinalLetterPage.jsx` |
| Back cover | `src/pages/BackCoverPage.jsx` |

## Tech

- React 19 + Vite
- [react-pageflip](https://github.com/Nodlik/react-pageflip) for the page-curl / drag-to-flip book
- [framer-motion](https://www.framer.com/motion/) for the intro animation
- Tailwind CSS v4 for styling
- A tiny Web Audio synth (`src/lib/sound.js`) generates the paper-flip sound and
  intro whoosh/pop on the fly — no audio files to ship.

## Deploying

It's a static site. Build with:

```bash
npm run build
```

`dist/` can be deployed anywhere static (Vercel, Netlify, GitHub Pages, etc).
For Vercel/Netlify: framework = Vite, build command = `npm run build`, output
directory = `dist`.

## Notes for whoever's editing this

- The intro can be skipped any time with the "skip intro →" button, and replayed
  from the last page ("watch the intro again").
- Sound is on by default; there's a mute toggle in both the intro and the book.
- The book resizes itself to fit the viewport (see `useBookSize` in
  `src/components/Scrapbook.jsx`) so it should look reasonable on phones, tablets,
  and desktop without any manual tweaking.
