/**
 * ===================================================================
 * BLEACH AUDIO SYNTHESIZER (WEB AUDIO API)
 * ===================================================================
 * Zero external audio files required! Synthesizes authentic anime
 * sword unsheathes, metal parries, and Bankai Reiatsu bursts in real time.
 */

class BleachSFX {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem("bleach_sfx_muted") === "true";
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem("bleach_sfx_muted", this.muted);
    return this.muted;
  }

  // Soft metallic UI hover tick
  playHover() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(2400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      // AudioContext policy fallback
    }
  }

  // Sharp Zanpakuto sword draw / slash
  playSlash() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // 1. White noise burst for the swift whoosh
      const bufferSize = this.ctx.sampleRate * 0.18;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1200, t);
      filter.frequency.exponentialRampToValueAtTime(4500, t + 0.08);
      filter.frequency.exponentialRampToValueAtTime(1000, t + 0.18);
      filter.Q.value = 4.0;

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.12, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      // 2. Metallic ring resonance
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const ringGain = this.ctx.createGain();

      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(3200, t);
      osc1.frequency.exponentialRampToValueAtTime(2600, t + 0.25);

      osc2.type = "sine";
      osc2.frequency.setValueAtTime(4850, t);
      osc2.frequency.exponentialRampToValueAtTime(3900, t + 0.25);

      ringGain.gain.setValueAtTime(0.08, t);
      ringGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);

      osc1.connect(ringGain);
      osc2.connect(ringGain);
      ringGain.connect(this.ctx.destination);

      noise.start(t);
      noise.stop(t + 0.18);
      osc1.start(t);
      osc1.stop(t + 0.28);
      osc2.start(t);
      osc2.stop(t + 0.28);
    } catch (e) {}
  }

  // Resonant steel clash / parry
  playClash() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const freqs = [1850, 2400, 3100, 4200];
      
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t);
        
        gain.gain.setValueAtTime(0.05 / (idx + 1), t);
        gain.gain.exponentialRampToValueAtTime(0.00001, t + 0.45);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.45);
      });
    } catch (e) {}
  }

  // BANKAI RELEASE: Deep explosive Reiatsu roar & metallic unlock
  playBankai() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // 1. Deep rumble sub-bass
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = "sawtooth";
      sub.frequency.setValueAtTime(140, t);
      sub.frequency.exponentialRampToValueAtTime(32, t + 0.9);

      const subFilter = this.ctx.createBiquadFilter();
      subFilter.type = "lowpass";
      subFilter.frequency.setValueAtTime(200, t);

      subGain.gain.setValueAtTime(0.28, t);
      subGain.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);

      sub.connect(subFilter);
      subFilter.connect(subGain);
      subGain.connect(this.ctx.destination);

      // 2. High spiritual pressure chime
      const bell = this.ctx.createOscillator();
      const bellGain = this.ctx.createGain();
      bell.type = "sine";
      bell.frequency.setValueAtTime(980, t);
      bell.frequency.exponentialRampToValueAtTime(1760, t + 0.5);

      bellGain.gain.setValueAtTime(0.12, t);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);

      bell.connect(bellGain);
      bellGain.connect(this.ctx.destination);

      sub.start(t);
      sub.stop(t + 1.1);
      bell.start(t);
      bell.stop(t + 0.9);
    } catch (e) {}
  }
}

window.bleachSFX = new BleachSFX();
