// Tiny synthesized "paper flip" sound + soft intro whoosh, no audio files needed.
// Everything is generated with the Web Audio API on the fly.

let ctx = null;
let muted = false;

function getCtx() {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

export function setMuted(value) {
  muted = value;
}

export function isMuted() {
  return muted;
}

/** Short filtered noise burst that reads as a page turn / paper flip. */
export function playFlipSound() {
  if (muted) return;
  const audio = getCtx();
  if (!audio) return;

  const duration = 0.28;
  const bufferSize = Math.floor(audio.sampleRate * duration);
  const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    // decaying white noise
    const decay = Math.pow(1 - i / bufferSize, 2.2);
    data[i] = (Math.random() * 2 - 1) * decay;
  }

  const noise = audio.createBufferSource();
  noise.buffer = buffer;

  const bandpass = audio.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.setValueAtTime(2400, audio.currentTime);
  bandpass.frequency.linearRampToValueAtTime(900, audio.currentTime + duration);
  bandpass.Q.value = 0.7;

  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.001, audio.currentTime);
  gain.gain.linearRampToValueAtTime(0.5, audio.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + duration);

  noise.connect(bandpass);
  bandpass.connect(gain);
  gain.connect(audio.destination);

  noise.start();
  noise.stop(audio.currentTime + duration);
}

/** Deep soft whoosh used once during the intro zoom-in. */
export function playWhoosh() {
  if (muted) return;
  const audio = getCtx();
  if (!audio) return;

  const duration = 1.1;
  const osc = audio.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(90, audio.currentTime);
  osc.frequency.exponentialRampToValueAtTime(340, audio.currentTime + duration);

  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.0001, audio.currentTime);
  gain.gain.linearRampToValueAtTime(0.18, audio.currentTime + 0.5);
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration);

  osc.connect(gain);
  gain.connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + duration);
}

/** Warm little "pop" used for the title card slam. */
export function playPop() {
  if (muted) return;
  const audio = getCtx();
  if (!audio) return;

  const osc = audio.createOscillator();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(220, audio.currentTime);
  osc.frequency.exponentialRampToValueAtTime(60, audio.currentTime + 0.35);

  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.25, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.35);

  osc.connect(gain);
  gain.connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + 0.35);
}
