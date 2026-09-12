// Web Audio API Kazoo Synthesizer & Sound Effects Generator

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a hilarious kazoo-style synth tone or fanfare based on click count
 * @param level count of clicks (1 to N)
 */
export function playKazooFanfare(level: number) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // Notes for kazoo fanfare (Hz)
    const baseFreqs = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
    const notesCount = Math.min(level, 7);
    
    for (let i = 0; i < notesCount; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const distortion = ctx.createWaveShaper();

      // Kazoo buzz distortion curve
      const samples = 44100;
      const curve = new Float32Array(samples);
      for (let s = 0; s < samples; ++s) {
        const x = (s * 2) / samples - 1;
        curve[s] = ((3 + 20) * x * 20 * (Math.PI / 180)) / (Math.PI + 20 * Math.abs(x));
      }
      distortion.curve = curve;
      distortion.oversample = '4x';

      osc.type = i % 2 === 0 ? 'sawtooth' : 'square';
      osc.frequency.setValueAtTime(baseFreqs[(i * 2 + level) % baseFreqs.length], now + i * 0.12);

      gain.gain.setValueAtTime(0.15, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.3);

      osc.connect(distortion);
      distortion.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.35);
    }
  } catch (e) {
    console.warn("Audio Context playback failed", e);
  }
}

/**
 * Play a light bureaucratic stamp sound effect
 */
export function playStampSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.1);
    
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.1);
  } catch (e) {
    console.warn("Audio Context playback failed", e);
  }
}

/**
 * Play a retro ping sound
 */
export function playPingSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.15);
    
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.15);
  } catch (e) {
    console.warn("Audio Context playback failed", e);
  }
}
