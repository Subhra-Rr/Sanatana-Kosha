import React from 'react';
import { useReducedMotion, useDocumentVisibility } from '../../utils/spiritualMotion';

interface DiyaProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showAura?: boolean;
  interactive?: boolean;
  onIgnite?: () => void;
  title?: string;
}

export const Diya: React.FC<DiyaProps> = ({
  size = 'md',
  className = '',
  showAura = true,
  interactive = false,
  onIgnite,
  title = 'Deepam - Sacred Oil Lamp'
}) => {
  const isReducedMotion = useReducedMotion();
  const isVisible = useDocumentVisibility();

  // Dimension scaling
  const dimensions = {
    sm: { width: 28, height: 32, flameW: 7, flameH: 14, bowlH: 14 },
    md: { width: 44, height: 48, flameW: 10, flameH: 22, bowlH: 20 },
    lg: { width: 64, height: 70, flameW: 14, flameH: 30, bowlH: 28 },
    xl: { width: 88, height: 96, flameW: 18, flameH: 40, bowlH: 38 }
  }[size];

  const shouldAnimate = !isReducedMotion && isVisible;

  return (
    <div
      role={interactive ? 'button' : 'img'}
      tabIndex={interactive ? 0 : -1}
      aria-label={title}
      title={title}
      onClick={interactive ? onIgnite : undefined}
      onKeyDown={interactive ? (e) => (e.key === 'Enter' || e.key === ' ') && onIgnite?.() : undefined}
      className={`inline-flex flex-col items-center justify-end relative select-none shrink-0 ${
        interactive ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl p-1' : ''
      } ${className}`}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      {/* Restrained Golden Ambient Warmth (Breathes gently) */}
      {showAura && (
        <div
          aria-hidden="true"
          className={`absolute -top-1 pointer-events-none rounded-full transition-opacity duration-700 ${
            shouldAnimate ? 'animate-diya-aura' : 'opacity-60'
          }`}
          style={{
            width: dimensions.width * 1.6,
            height: dimensions.height * 1.3,
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.08) 50%, transparent 75%)'
          }}
        />
      )}

      {/* Flame Container with Organic Teardrop Movement */}
      <div
        className={`relative flex items-center justify-center z-10 ${
          shouldAnimate ? 'animate-sacred-flame' : ''
        }`}
        style={{
          width: dimensions.flameW * 1.5,
          height: dimensions.flameH,
          marginBottom: -dimensions.bowlH * 0.15,
          transformOrigin: '50% 90%'
        }}
      >
        {/* Outer Warm Golden Amber Flame */}
        <div
          className="absolute inset-0 rounded-[50%_50%_40%_40%/70%_70%_30%_30%] bg-gradient-to-t from-amber-600 via-amber-400 to-amber-200 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
          style={{ filter: 'drop-shadow(0 0 4px rgba(245, 158, 11, 0.5))' }}
        />

        {/* Inner Luminous Teardrop Core (Hot Flame Center) */}
        <div
          className="absolute rounded-[50%_50%_35%_35%/75%_75%_25%_25%] bg-gradient-to-t from-amber-200 via-yellow-100 to-white"
          style={{
            width: '45%',
            height: '65%',
            bottom: '12%',
            filter: 'drop-shadow(0 0 2px rgba(254, 243, 199, 0.9))'
          }}
        />

        {/* Cotton Wick Root (Vartti) */}
        <div
          className="absolute bottom-0 w-[1.5px] bg-stone-900/80 rounded-full"
          style={{ height: dimensions.flameH * 0.28 }}
        />
      </div>

      {/* Crafted Traditional Brass / Terracotta Deepam Lamp Bowl */}
      <div
        className="relative z-10 w-full flex flex-col items-center"
        style={{ height: dimensions.bowlH }}
      >
        {/* Upper Rim with Subtle Brass Bevel Highlight */}
        <div className="w-[88%] h-1 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-700 rounded-t-full shadow-sm" />

        {/* Main Resonant Lamp Bowl (Terracotta-to-Brass Gradient) */}
        <div className="w-full h-full bg-gradient-to-b from-amber-700 via-amber-800 to-stone-900 rounded-b-[45%] border-t border-amber-400/40 shadow-[0_3px_6px_rgba(0,0,0,0.5)] flex flex-col items-center justify-between overflow-hidden relative">
          {/* Subtle Brass Sheen Reflection */}
          <div className="absolute top-0.5 inset-x-2 h-0.5 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
          
          {/* Traditional Engraved Geometric Belt Motif */}
          <div className="w-3/4 mt-1.5 h-0.5 border-b border-amber-500/25 border-dashed" />
          
          {/* Stable Solid Lamp Footing / Pedestal */}
          <div className="w-2/5 h-1 bg-gradient-to-r from-amber-900 via-amber-700 to-amber-950 rounded-b-sm border-t border-amber-950/40 mb-0.5" />
        </div>
      </div>
    </div>
  );
};
