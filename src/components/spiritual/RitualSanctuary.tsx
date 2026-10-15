import React, { useState, useEffect, useRef } from 'react';
import { Diya } from '../common/Diya';
import { audioService } from '../../services/audioService';
import { useReducedMotion } from '../../utils/spiritualMotion';
import {
  Bell,
  Sparkles,
  Flame,
  Droplets,
  RotateCcw,
  Play,
  Pause,
  ChevronRight,
  Info,
  CheckCircle2,
  Wind
} from 'lucide-react';

type RitualType = 'aarti' | 'upachara' | 'bell' | 'japa';

export const RitualSanctuary: React.FC<{ className?: string }> = ({ className = '' }) => {
  const isReduced = useReducedMotion();
  const [activeRitual, setActiveRitual] = useState<RitualType>('aarti');

  // ---------- AARTI STATE ----------
  const [isAartiActive, setIsAartiActive] = useState<boolean>(false);
  const [aartiRounds, setAartiRounds] = useState<number>(0);
  const aartiAngleRef = useRef<number>(0);
  const [aartiPos, setAartiPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!isAartiActive || isReduced) {
      setAartiPos({ x: 0, y: 0 });
      return;
    }

    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      
      // Deliberate, graceful traditional clockwise rotation (approx 7 seconds per cycle)
      aartiAngleRef.current += dt * (Math.PI * 2 / 7);
      if (aartiAngleRef.current >= Math.PI * 2) {
        aartiAngleRef.current -= Math.PI * 2;
        setAartiRounds(r => r + 1);
      }

      // Elliptical gentle path simulating the priest's respectful circular waving
      const radiusX = 64;
      const radiusY = 28;
      const x = Math.sin(aartiAngleRef.current) * radiusX;
      const y = -Math.cos(aartiAngleRef.current) * radiusY;

      setAartiPos({ x, y });
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isAartiActive, isReduced]);

  // ---------- PANCHA UPACHARA STATE ----------
  const UPACHARAS = [
    {
      id: 'gandha',
      sanskrit: 'गन्ध (Gandha)',
      name: 'Sandalwood Paste',
      tattva: 'Prithvi (Earth / Smell)',
      mantra: 'ॐ पृथिव्यात्मकं गन्धं समर्पयामि',
      meaning: 'Offering cooling Chandana, acknowledging Mother Earth and grounding the senses in sacred fragrance.'
    },
    {
      id: 'pushpa',
      sanskrit: 'पुष्प (Pushpa)',
      name: 'Fresh Flowers',
      tattva: 'Akasha (Ether / Space)',
      mantra: 'ॐ आकाशात्मकं पुष्पं समर्पयामि',
      meaning: 'Offering fragrant lotus and jasmine petals, symbolizing the blossom of the pure spiritual heart.'
    },
    {
      id: 'dhoopa',
      sanskrit: 'धूप (Dhoopa)',
      name: 'Incense Smoke',
      tattva: 'Vayu (Air / Prana)',
      mantra: 'ॐ वाय्वात्मकं धूपम् आघ्रापयामि',
      meaning: 'Offering subtle rising dhoopa, purifying the mind as prayer ascends gracefully upward.'
    },
    {
      id: 'deepa',
      sanskrit: 'दीप (Deepa)',
      name: 'Sacred Oil Lamp',
      tattva: 'Tejas (Fire / Light)',
      mantra: 'ॐ तेजात्मकं दीपं दर्शयामि',
      meaning: 'Offering the luminous flame of the Deepam, dispelling inner darkness and ignorance (Avidya).'
    },
    {
      id: 'naivedya',
      sanskrit: 'नैवेद्य (Naivedya)',
      name: 'Devotional Offering',
      tattva: 'Jala & Amrita (Water / Taste)',
      mantra: 'ॐ अमृतात्मकं नैवेद्यं निवेदयामि',
      meaning: 'Offering pure fruit and satvic food, dedicating all sustenance back to the Divine Source.'
    }
  ];

  const [activeUpacharaIdx, setActiveUpacharaIdx] = useState<number>(0);
  const [offeringAnimationKey, setOfferingAnimationKey] = useState<number>(0);

  const handleNextUpachara = () => {
    setActiveUpacharaIdx((prev) => (prev + 1) % UPACHARAS.length);
    setOfferingAnimationKey(k => k + 1);
  };

  // ---------- TEMPLE BELL STATE ----------
  const [isBellRinging, setIsBellRinging] = useState<boolean>(false);

  const handleRingBell = () => {
    audioService.playTempleBell();
    setIsBellRinging(true);
    setTimeout(() => setIsBellRinging(false), 2400);
  };

  // ---------- JAPA MALA STATE ----------
  const [japaCount, setJapaCount] = useState<number>(0);
  const [selectedMantra, setSelectedMantra] = useState<{ name: string; text: string }>({
    name: 'Maha Mrityunjaya Mantra',
    text: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥'
  });

  const handleNextBead = () => {
    setJapaCount(prev => (prev < 108 ? prev + 1 : 1));
  };

  const handleResetJapa = () => {
    setJapaCount(0);
  };

  return (
    <div className={`w-full bg-gradient-to-br from-stone-900 via-stone-900/90 to-stone-950 border border-amber-800/30 rounded-3xl p-5 sm:p-8 shadow-2xl space-y-6 ${className}`}>
      {/* Sanctuary Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-900/20 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-600/30 text-amber-200 text-xs font-serif font-semibold">
            <Diya size="sm" />
            <span>नित्यकर्म व उपासन • Sacred Ritual Sanctuary & Contemplation</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100 sanskrit-font">
            Vedic Rituals, Offerings & Meditative Chanting
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-serif max-w-2xl leading-relaxed">
            Experience documented Hindu ritual traditions: clockwise Aarti, five cosmic offerings (Pancha Upachara), resonant temple bells, and 108-bead Japa meditation.
          </p>
        </div>

        {/* Ritual Selector Tabs */}
        <div className="flex items-center gap-1.5 bg-stone-950/80 p-1.5 rounded-2xl border border-amber-800/20 text-xs font-serif font-medium w-full md:w-auto overflow-x-auto scrollbar-none pb-1 md:pb-1.5 shrink-0">
          {[
            { id: 'aarti', label: 'Aarti (आरती)', icon: Flame },
            { id: 'upachara', label: 'Upachara (उपचार)', icon: Sparkles },
            { id: 'bell', label: 'Temple Bell (घण्टा)', icon: Bell },
            { id: 'japa', label: 'Japa Mala (जपमाला)', icon: Droplets }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeRitual === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveRitual(tab.id as RitualType)}
                className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap min-h-[38px] ${
                  isActive
                    ? 'bg-amber-700 text-white font-bold shadow-md border border-amber-500/30'
                    : 'text-stone-300 hover:bg-stone-800 hover:text-amber-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= 1. AARTI ANIMATION CHAMBER ================= */}
      {activeRitual === 'aarti' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Visual Stage */}
          <div className="lg:col-span-7 relative h-72 sm:h-80 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 rounded-2xl border border-amber-800/25 p-6 flex flex-col items-center justify-center overflow-hidden shadow-inner">
            {/* Center Sacred Focus (Subtle Deity / Sanctum Shrine Light) */}
            <div className="absolute top-8 flex flex-col items-center pointer-events-none opacity-85">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                <span className="font-serif text-2xl font-bold text-amber-200 sanskrit-font select-none">ॐ</span>
              </div>
              <span className="text-[10px] text-amber-300/80 font-serif mt-1 tracking-widest uppercase">गर्भगृह • Sanctum Sanctorum</span>
            </div>

            {/* Aarti Lamp moving in slow graceful clockwise orbit */}
            <div
              className="relative z-10 transition-transform duration-75 flex flex-col items-center"
              style={{
                transform: `translate3d(${aartiPos.x}px, ${aartiPos.y + 40}px, 0)`
              }}
            >
              <div className="relative">
                {/* Five-wick Pancha Pradeep Aarti Lamp representation */}
                <div className="flex items-end justify-center -space-x-1.5 mb-[-2px]">
                  <Diya size="sm" showAura={false} />
                  <Diya size="md" showAura={true} />
                  <Diya size="sm" showAura={false} />
                </div>
                {/* Traditional Brass Aarti Handle */}
                <div className="w-12 h-2 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-800 rounded-full mx-auto shadow-sm" />
                <div className="w-1.5 h-6 bg-gradient-to-b from-amber-600 to-amber-900 mx-auto rounded-b" />
              </div>

              {/* Orbit tracer guide (subtle, peaceful, not overwhelming) */}
              {isAartiActive && (
                <div
                  aria-hidden="true"
                  className="absolute -inset-10 rounded-full border border-amber-500/10 pointer-events-none"
                  style={{ width: 140, height: 70, left: -46, top: -20 }}
                />
              )}
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-4 inset-x-6 flex items-center justify-between text-xs font-serif text-stone-400 border-t border-amber-900/15 pt-2">
              <span>Aarti Cycle: <strong className="text-amber-300">{aartiRounds} Pradakshinas</strong></span>
              <span className="text-[11px] text-amber-400">
                {isAartiActive ? 'Clockwise Devotional Rotation' : 'Resting in Sacred Stillness'}
              </span>
            </div>
          </div>

          {/* Educational & Controls Side */}
          <div className="lg:col-span-5 space-y-4 font-serif">
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-800/20 space-y-2">
              <span className="text-xs font-bold text-amber-300 block uppercase tracking-wider">
                The Sacred Science of Aarti (आरती विज्ञानम्)
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                Aarti derives from the Sanskrit <em>Ārātrika</em> (आरात्रिक), meaning "that which removes the night of darkness." The five-flame lamp (Pancha-Pradeep) represents the five senses dedicated unconditionally to divine light.
              </p>
              <p className="text-xs text-stone-400 leading-relaxed pt-1">
                The clockwise circular movement mirrors the cosmic revolution of celestial bodies around the Supreme Center, instilling tranquility and devotional focus.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAartiActive(!isAartiActive)}
                className={`flex-1 py-3 px-4 rounded-xl font-serif text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                  isAartiActive
                    ? 'bg-amber-600 hover:bg-amber-500 text-white'
                    : 'bg-gradient-to-r from-amber-700 to-amber-900 text-amber-100 hover:from-amber-600 hover:to-amber-800 border border-amber-400/30'
                }`}
              >
                {isAartiActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isAartiActive ? 'Pause Aarti' : 'Perform Sacred Aarti'}</span>
              </button>

              <button
                onClick={() => {
                  setAartiRounds(0);
                  setIsAartiActive(false);
                }}
                title="Reset Aarti"
                className="p-3 rounded-xl bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white transition-all border border-amber-900/20"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= 2. PANCHA UPACHARA (FIVE COSMIC OFFERINGS) ================= */}
      {activeRitual === 'upachara' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Visual Offering Stage */}
          <div className="lg:col-span-7 relative h-72 sm:h-80 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 rounded-2xl border border-amber-800/25 p-6 flex flex-col items-center justify-center overflow-hidden shadow-inner">
            {/* Sacred Altar Pedestal */}
            <div className="relative flex flex-col items-center z-10">
              {/* Contextual Visual Offering Rendering */}
              <div className="h-28 flex items-center justify-center relative">
                {UPACHARAS[activeUpacharaIdx].id === 'gandha' && (
                  <div className="flex flex-col items-center animate-sacred-reveal" key={offeringAnimationKey}>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-300 via-amber-600 to-amber-900 border-2 border-amber-200/50 shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center">
                      <span className="text-xl">🪔</span>
                    </div>
                    <span className="text-[11px] font-serif text-amber-200 font-bold mt-2">चन्दन लेपनम् • Fragrant Sandalwood</span>
                  </div>
                )}

                {UPACHARAS[activeUpacharaIdx].id === 'pushpa' && (
                  <div className="relative flex flex-col items-center" key={offeringAnimationKey}>
                    {/* Falling sacred petals */}
                    {!isReduced && (
                      <>
                        <div className="absolute -top-6 -left-8 text-amber-300 animate-pushpa text-base">🌸</div>
                        <div className="absolute -top-8 right-6 text-rose-300 animate-pushpa text-base" style={{ animationDelay: '300ms' }}>🌺</div>
                        <div className="absolute -top-4 left-4 text-yellow-200 animate-pushpa text-base" style={{ animationDelay: '600ms' }}>🌼</div>
                      </>
                    )}
                    <div className="w-14 h-14 rounded-full bg-amber-900/60 border border-amber-500/40 flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🪷</span>
                    </div>
                    <span className="text-[11px] font-serif text-amber-200 font-bold mt-2">पुष्प समर्पणम् • Sacred Lotus & Jasmine</span>
                  </div>
                )}

                {UPACHARAS[activeUpacharaIdx].id === 'dhoopa' && (
                  <div className="flex flex-col items-center relative" key={offeringAnimationKey}>
                    {/* Naturally rising wisp of incense smoke */}
                    <div className="absolute -top-8 w-12 h-16 pointer-events-none flex justify-center">
                      <div className="w-1.5 h-12 bg-gradient-to-t from-stone-400/40 to-transparent rounded-full animate-dhoopa blur-[1px]" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-stone-800 border border-amber-600/40 flex items-center justify-center shadow-md">
                      <Wind className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-[11px] font-serif text-amber-200 font-bold mt-2">धूप आघ्रापणम् • Ascending Incense Smoke</span>
                  </div>
                )}

                {UPACHARAS[activeUpacharaIdx].id === 'deepa' && (
                  <div className="flex flex-col items-center animate-sacred-reveal" key={offeringAnimationKey}>
                    <Diya size="lg" showAura={true} />
                    <span className="text-[11px] font-serif text-amber-200 font-bold mt-2">दीप दर्शनम् • Radiant Lamp Flame</span>
                  </div>
                )}

                {UPACHARAS[activeUpacharaIdx].id === 'naivedya' && (
                  <div className="flex flex-col items-center animate-sacred-reveal" key={offeringAnimationKey}>
                    <div className="w-14 h-14 rounded-full bg-amber-950/80 border border-amber-500/30 flex items-center justify-center shadow-md">
                      <span className="text-2xl">🍯</span>
                    </div>
                    <span className="text-[11px] font-serif text-amber-200 font-bold mt-2">नैवेद्य समर्पणम् • Sweet Pure Offering</span>
                  </div>
                )}
              </div>

              {/* Traditional Offering Stepper Dots */}
              <div className="flex items-center gap-2 mt-4">
                {UPACHARAS.map((u, idx) => (
                  <button
                    key={u.id}
                    onClick={() => {
                      setActiveUpacharaIdx(idx);
                      setOfferingAnimationKey(k => k + 1);
                    }}
                    title={u.name}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeUpacharaIdx === idx
                        ? 'bg-amber-400 w-6 shadow-[0_0_8px_rgba(245,158,11,0.8)]'
                        : 'bg-stone-700 hover:bg-stone-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sacred Mantra Bar */}
            <div className="absolute bottom-3 inset-x-6 text-center text-xs font-serif text-amber-300/90 border-t border-amber-900/15 pt-2 sanskrit-font">
              {UPACHARAS[activeUpacharaIdx].mantra}
            </div>
          </div>

          {/* Educational Side Panel */}
          <div className="lg:col-span-5 space-y-4 font-serif">
            <div className="p-4 rounded-2xl bg-stone-950/70 border border-amber-800/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  Cosmic Element: {UPACHARAS[activeUpacharaIdx].tattva}
                </span>
                <span className="text-[10px] text-stone-400">
                  Step {activeUpacharaIdx + 1} of 5
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-amber-100">
                {UPACHARAS[activeUpacharaIdx].sanskrit} — {UPACHARAS[activeUpacharaIdx].name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {UPACHARAS[activeUpacharaIdx].meaning}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleNextUpachara}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 text-white font-serif text-xs font-bold shadow-md hover:from-amber-600 hover:to-amber-800 border border-amber-400/30 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Offer Next Upachara</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= 3. TEMPLE BELL RESONANCE ================= */}
      {activeRitual === 'bell' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Bell Stage */}
          <div className="lg:col-span-7 relative h-72 sm:h-80 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 rounded-2xl border border-amber-800/25 p-6 flex flex-col items-center justify-center overflow-hidden shadow-inner">
            {/* Top Chain / Beam */}
            <div className="w-1.5 h-16 bg-gradient-to-b from-amber-900 via-amber-600 to-amber-400 rounded-t-full shadow-sm" />

            {/* Brass Bell with Swing Physics */}
            <div className={`relative flex flex-col items-center cursor-pointer ${isBellRinging ? 'animate-bell-swing' : ''}`} onClick={handleRingBell}>
              {/* Bell Body */}
              <div className="w-24 h-24 bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 rounded-t-[50%] rounded-b-2xl border border-amber-300/40 shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex flex-col items-center justify-between p-3 relative overflow-hidden">
                {/* Traditional Sacred Carving Band */}
                <div className="w-full h-1 border-t border-b border-amber-300/40 mt-4" />
                <span className="font-serif text-sm font-bold text-amber-200 sanskrit-font select-none">ॐ</span>
                <div className="w-full h-2 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-800 rounded-full" />
              </div>

              {/* Clapper (Lolak) */}
              <div className="w-3 h-5 bg-amber-900 rounded-full -mt-1 shadow" />

              {/* Acoustic Wave Resonance Rings (when ringing) */}
              {isBellRinging && !isReduced && (
                <div className="absolute -inset-8 rounded-full border border-amber-400/30 animate-ping pointer-events-none" />
              )}
            </div>

            <p className="text-[11px] text-amber-400 font-serif mt-4">
              {isBellRinging ? 'Resonating with Cosmic Frequency...' : 'Tap bell or click Ring button below'}
            </p>
          </div>

          {/* Educational Side Panel */}
          <div className="lg:col-span-5 space-y-4 font-serif">
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-800/20 space-y-2">
              <span className="text-xs font-bold text-amber-300 block uppercase tracking-wider">
                Significance of the Temple Ghanta (घण्टा विज्ञानम्)
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                As stated in the Agamas: <em>"आगमार्थं तु देवानां गमनार्थं तु रक्षसाम्"</em> — ringing the bell welcomes divine energies while dispelling discord and distraction.
              </p>
              <p className="text-xs text-stone-400 leading-relaxed pt-1">
                The acoustic sustain of bell bronze creates an auditory wave that synchronizes the left and right hemispheres of the human brain, preparing the consciousness for prayer.
              </p>
            </div>

            <button
              onClick={handleRingBell}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 text-white font-serif text-xs font-bold shadow-lg hover:from-amber-600 hover:to-amber-800 border border-amber-400/40 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Bell className="w-4 h-4 text-amber-300" />
              <span>Ring Temple Bell (घण्टानाद)</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= 4. JAPA MALA & MEDITATION ================= */}
      {activeRitual === 'japa' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Japa Bead Circular Progress Stage */}
          <div className="lg:col-span-7 relative h-72 sm:h-80 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 rounded-2xl border border-amber-800/25 p-6 flex flex-col items-center justify-center overflow-hidden shadow-inner">
            {/* Visual Mala Ring */}
            <div className="relative w-44 h-44 rounded-full border-2 border-dashed border-amber-800/30 flex items-center justify-center">
              {/* Central Count */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl font-bold text-amber-100 tabular-nums">
                  {japaCount}
                </span>
                <span className="text-[10px] text-amber-400/80 font-serif uppercase tracking-widest">
                  of 108 Beads
                </span>
                {japaCount === 108 && (
                  <span className="text-[10px] text-green-400 font-bold mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Mala Complete!
                  </span>
                )}
              </div>

              {/* Progress Indicator Arc */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(245, 158, 11, 0.7)"
                  strokeWidth="3.5"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * (japaCount / 108))}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              </svg>

              {/* Meru Bead (Head Bead) at top */}
              <div className="absolute -top-2 w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 shadow border border-amber-200" title="Guru / Meru Bead" />
            </div>

            {/* Active Chanting Verse */}
            <div className="text-center mt-3 max-w-sm">
              <p className="font-serif text-xs text-amber-200/95 sanskrit-font line-clamp-1">
                {selectedMantra.text}
              </p>
            </div>
          </div>

          {/* Controls & Meditation Settings */}
          <div className="lg:col-span-5 space-y-4 font-serif">
            <div className="p-4 rounded-2xl bg-stone-950/70 border border-amber-800/20 space-y-2">
              <span className="text-xs font-bold text-amber-300 block uppercase tracking-wider">
                The Sacred 108 Repetitions (अष्टोत्तरशत)
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                In Vedic astronomy, the distance between the Earth and the Sun is approximately 108 times the Sun's diameter. The 108 beads connect individual microcosm to cosmic macrocosm.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleNextBead}
                className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 text-white font-serif text-xs font-bold shadow-lg hover:from-amber-600 hover:to-amber-800 border border-amber-400/40 flex items-center justify-center gap-1.5 transition-all active:scale-95"
              >
                <span>Chant Next Bead ({japaCount + 1})</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleResetJapa}
                title="Reset Mala Count"
                className="p-3.5 rounded-xl bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white transition-all border border-amber-900/20"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
