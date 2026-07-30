// Web Audio API Synthesizer for Authentic Temple Sounds and Speech Synthesis

class AudioService {
  private ctx: AudioContext | null = null;
  private tanpuraOscs: OscillatorNode[] = [];
  private tanpuraGain: GainNode | null = null;
  private isTanpuraPlaying = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play realistic Temple Bell Chime
  playTempleBell() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Fundamental frequencies for brass temple bell (E4 base ~329.6 Hz + metallic harmonics)
      const partials = [
        { freq: 329.63, gain: 0.6, decay: 3.5 },
        { freq: 659.25, gain: 0.4, decay: 2.8 },
        { freq: 988.88, gain: 0.3, decay: 2.2 },
        { freq: 1318.5, gain: 0.2, decay: 1.5 },
        { freq: 1760.0, gain: 0.15, decay: 1.0 },
        { freq: 2637.0, gain: 0.1, decay: 0.7 }
      ];

      partials.forEach(p => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(p.freq, now);

        // Exponential decay envelope
        g.gain.setValueAtTime(p.gain, now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

        osc.connect(g);
        g.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + p.decay);
      });
    } catch {
      // Ignore audio context autoplay restrictions gracefully
    }
  }

  // Play Conch (Shankha) Sound
  playConchSound() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      // Low resonant conch pitch ~180Hz swelling to 220Hz
      osc.frequency.setValueAtTime(170, now);
      osc.frequency.exponentialRampToValueAtTime(210, now + 1.2);
      osc.frequency.exponentialRampToValueAtTime(160, now + 3.0);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, now);
      filter.Q.setValueAtTime(5, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.5, now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 3.3);
    } catch {
      // Graceful fallback
    }
  }

  // Toggle Tanpura Ambient Drone Hum (C# / Sa-Pa drone)
  toggleTanpuraDrone(): boolean {
    try {
      this.initCtx();
      if (!this.ctx) return false;

      if (this.isTanpuraPlaying) {
        this.stopTanpura();
        return false;
      }

      const now = this.ctx.currentTime;
      this.tanpuraGain = this.ctx.createGain();
      this.tanpuraGain.gain.setValueAtTime(0.01, now);
      this.tanpuraGain.gain.linearRampToValueAtTime(0.12, now + 2); // Soft ambient volume

      // Sa (C#3 ~138.59 Hz) and Pa (G#3 ~207.65 Hz) frequencies
      const freqs = [138.59, 207.65, 277.18];

      this.tanpuraOscs = freqs.map(f => {
        if (!this.ctx) return null as unknown as OscillatorNode;
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now);
        osc.connect(this.tanpuraGain!);
        osc.start(now);
        return osc;
      }).filter(Boolean);

      this.tanpuraGain.connect(this.ctx.destination);
      this.isTanpuraPlaying = true;
      return true;
    } catch {
      return false;
    }
  }

  stopTanpura() {
    if (this.tanpuraGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.tanpuraGain.gain.linearRampToValueAtTime(0.0001, now + 1);
      setTimeout(() => {
        this.tanpuraOscs.forEach(osc => {
          try { osc.stop(); } catch {}
        });
        this.tanpuraOscs = [];
        this.isTanpuraPlaying = false;
      }, 1000);
    }
  }

  isDroneActive(): boolean {
    return this.isTanpuraPlaying;
  }

  // Text-to-Speech for Sanskrit Verses using Web Speech API
  speakSanskrit(text: string) {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // Stop current speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85; // Measured pace for reverent recitation
    utterance.pitch = 1.0;

    // Try finding Hindi / Sanskrit voice if available
    const voices = window.speechSynthesis.getVoices();
    const hiVoice = voices.find(v => v.lang.startsWith('hi') || v.lang.startsWith('sa'));
    if (hiVoice) {
      utterance.voice = hiVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const audioService = new AudioService();
