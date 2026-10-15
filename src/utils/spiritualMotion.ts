import { useState, useEffect } from 'react';

/**
 * SANATANA KOSHA — SPIRITUAL MOTION ARCHITECTURE
 * 
 * Centralized motion tokens, easing functions, and lifecycle coordination.
 * Enforces restraint, dignity, compositor-only properties, and reduced-motion compliance.
 */

export const SPIRITUAL_MOTION = {
  // Timing tokens (ms)
  duration: {
    micro: 140,        // Button taps, bookmark clicks, badge changes
    fast: 220,         // Dropdowns, tabs, filter selections
    standard: 320,     // Card expansions, modal reveals, tab panels
    sacredReveal: 480, // Verse lines, Sanskrit unveils, manuscript displays
    contemplation: 650 // Meditative stillness transitions
  },

  // Culturally grounded easing curves (subtle deceleration mimicking temple lamps and silk manuscripts)
  easing: {
    templeGentle: 'cubic-bezier(0.16, 1, 0.3, 1)',       // Smooth entrance without mechanical snap
    sacredReveal: 'cubic-bezier(0.22, 1, 0.36, 1)',       // Natural manuscript unrolling
    flameFlicker: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)', // Organic flame rhythm
    bellSwing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'        // Resonant pendulum swing
  },

  // Color values for warm spiritual illumination
  light: {
    amberAura: 'rgba(245, 158, 11, 0.12)',
    deepamGlow: 'rgba(217, 119, 6, 0.22)',
    sacredGold: 'rgba(212, 175, 55, 0.3)',
    brassReflection: 'rgba(254, 243, 199, 0.18)'
  }
} as const;

/**
 * Checks if the user or device prefers reduced motion.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * React hook for reactive reduced-motion preference awareness.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => prefersReducedMotion());

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/**
 * Hook to pause continuous animations when browser tab or document is hidden.
 */
export function useDocumentVisibility(): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(() => 
    typeof document !== 'undefined' ? document.visibilityState === 'visible' : true
  );

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return isVisible;
}
