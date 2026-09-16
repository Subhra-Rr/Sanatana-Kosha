import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const glowingSvgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <style>
      @keyframes divinePulse {
        0%, 100% {
          filter: drop-shadow(0 0 12px #f59e0b) drop-shadow(0 0 28px #d97706);
          opacity: 0.95;
        }
        50% {
          filter: drop-shadow(0 0 22px #fbbf24) drop-shadow(0 0 45px #f59e0b) drop-shadow(0 0 8px #ffffff);
          opacity: 1;
        }
      }
      @keyframes auraBreath {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.08); opacity: 1; }
      }
      @keyframes flameFlicker {
        0%, 100% { transform: scaleY(1); opacity: 0.9; }
        50% { transform: scaleY(1.15) translateY(-2px); opacity: 1; }
      }
      @keyframes binduSparkle {
        0%, 100% { transform: scale(1); opacity: 0.85; }
        50% { transform: scale(1.25); opacity: 1; filter: drop-shadow(0 0 10px #ffffff); }
      }
      .glowing-om-group {
        animation: divinePulse 3.5s ease-in-out infinite;
        transform-origin: 256px 256px;
      }
      .aura-layer {
        animation: auraBreath 4s ease-in-out infinite;
        transform-origin: 256px 256px;
      }
      .bindu-glow {
        animation: binduSparkle 2.5s ease-in-out infinite;
        transform-origin: 356px 132px;
      }
      .flame-glow {
        animation: flameFlicker 1.8s ease-in-out infinite;
        transform-origin: 256px 390px;
      }
    </style>

    <!-- Deep Temple Obsidian Background with Warm Core -->
    <radialGradient id="deepBg" cx="50%" cy="50%" r="70%" fx="50%" fy="45%">
      <stop offset="0%" stop-color="#2a1406" />
      <stop offset="35%" stop-color="#190b02" />
      <stop offset="70%" stop-color="#0e0601" />
      <stop offset="100%" stop-color="#040201" />
    </radialGradient>

    <!-- Celestial Corona Rays Radiance -->
    <radialGradient id="coronaGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="0.85" />
      <stop offset="25%" stop-color="#f59e0b" stop-opacity="0.65" />
      <stop offset="55%" stop-color="#ea580c" stop-opacity="0.3" />
      <stop offset="85%" stop-color="#b45309" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Outer Shield Border Gold Gradient -->
    <linearGradient id="shieldRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="20%" stop-color="#fef08a" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="80%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#78350f" />
    </linearGradient>

    <!-- Glowing Radiant Gold for Sacred AUM -->
    <linearGradient id="luminousAumGrad" x1="15%" y1="5%" x2="85%" y2="95%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="15%" stop-color="#fffbeb" />
      <stop offset="30%" stop-color="#fef08a" />
      <stop offset="55%" stop-color="#fbbf24" />
      <stop offset="80%" stop-color="#f59e0b" />
      <stop offset="95%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#9a3412" />
    </linearGradient>

    <!-- Inner Core Pure White-Gold Laser Light Line -->
    <linearGradient id="innerLightCore" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="60%" stop-color="#fef08a" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.2" />
    </linearGradient>

    <!-- Lotus Blooming Petals Gradient -->
    <linearGradient id="lotusPetalGrad" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="25%" stop-color="#fde68a" />
      <stop offset="60%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>

    <!-- Rising Sacred Diya Flame Gradient -->
    <linearGradient id="divineFlameGrad" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="20%" stop-color="#fef08a" />
      <stop offset="55%" stop-color="#f97316" />
      <stop offset="90%" stop-color="#dc2626" />
      <stop offset="100%" stop-color="#7f1d1d" />
    </linearGradient>

    <!-- Multi-stage Neon Glow Filter -->
    <filter id="hyperGlow" x="-40%" y="-40%" width="180%" height="180%">
      <!-- Wide ethereal ambient aura -->
      <feDropShadow dx="0" dy="0" stdDeviation="24" flood-color="#f59e0b" flood-opacity="0.85" />
      <!-- Mid-tier intense warm fire glow -->
      <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#ea580c" flood-opacity="0.9" />
      <!-- Close intense golden radiance -->
      <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#fef08a" flood-opacity="1" />
      <!-- Sharp core diamond glow -->
      <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#ffffff" flood-opacity="0.95" />
    </filter>

    <filter id="softCorona">
      <feGaussianBlur stdDeviation="16" />
    </filter>
  </defs>

  <!-- ============================================== -->
  <!-- 1. SQUIRCLE ICON SHIELD (App Icon Canvas)     -->
  <!-- ============================================== -->
  <rect x="10" y="10" width="492" height="492" rx="124" ry="124" fill="url(#deepBg)" stroke="url(#shieldRim)" stroke-width="5" />

  <!-- Outer Divine Halo Inset Ring -->
  <rect x="26" y="26" width="460" height="460" rx="108" ry="108" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.4" stroke-dasharray="10 8" />

  <!-- ============================================== -->
  <!-- 2. RADIANT SUNBURST CORONA (Rays of Surya)     -->
  <!-- ============================================== -->
  <!-- Pulsing Backdrop Aura -->
  <circle cx="256" cy="245" r="195" fill="url(#coronaGlow)" class="aura-layer" />

  <!-- 24 Sacred Luminous Light Rays -->
  <g opacity="0.32" stroke="url(#shieldRim)" stroke-width="1.5">
    <!-- 0 deg, 90 deg, 180 deg, 270 deg -->
    <line x1="256" y1="65" x2="256" y2="425" stroke-width="2" />
    <line x1="76" y1="245" x2="436" y2="245" stroke-width="2" />
    <!-- 45 deg diagonals -->
    <line x1="128" y1="117" x2="384" y2="373" stroke-width="2" />
    <line x1="128" y1="373" x2="384" y2="117" stroke-width="2" />
    <!-- Intermediary rays -->
    <line x1="185" y1="84" x2="327" y2="406" />
    <line x1="327" y1="84" x2="185" y2="406" />
    <line x1="84" y1="185" x2="428" y2="305" />
    <line x1="84" y1="305" x2="428" y2="185" />
  </g>

  <!-- Sacred Geometry Concentric Rings of Truth (Satya Chakra) -->
  <circle cx="256" cy="245" r="162" fill="none" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.35" stroke-dasharray="6 6" />
  <circle cx="256" cy="245" r="115" fill="none" stroke="#fef08a" stroke-width="1" stroke-opacity="0.45" />

  <!-- 8 Cardinal Dikpala Bindus (Luminous Golden Orbs) -->
  <g fill="#ffffff" filter="drop-shadow(0 0 6px #f59e0b)">
    <circle cx="256" cy="38" r="4.5" />
    <circle cx="256" cy="474" r="4.5" />
    <circle cx="38" cy="256" r="4.5" />
    <circle cx="474" cy="256" r="4.5" />
    <circle cx="102" cy="102" r="3.5" fill="#fef08a" />
    <circle cx="410" cy="102" r="3.5" fill="#fef08a" />
    <circle cx="102" cy="410" r="3.5" fill="#fef08a" />
    <circle cx="410" cy="410" r="3.5" fill="#fef08a" />
  </g>

  <!-- ============================================== -->
  <!-- 3. GLOWING MASTER AUM & BLOOMING LOTUS GROUP   -->
  <!-- ============================================== -->
  <g class="glowing-om-group" filter="url(#hyperGlow)">

    <!-- A. BLOOMING GOLDEN LOTUS BASE (Padmasana) -->
    <g id="lotusBase">
      <!-- Outermost Left & Right Petals -->
      <path d="M 256 422 C 205 418 142 396 130 354 C 170 348 218 382 256 422 Z" fill="url(#lotusPetalGrad)" opacity="0.9" />
      <path d="M 256 422 C 307 418 370 396 382 354 C 342 348 294 382 256 422 Z" fill="url(#lotusPetalGrad)" opacity="0.9" />

      <!-- Mid Left & Right Petals -->
      <path d="M 256 426 C 200 412 165 372 166 326 C 210 340 240 385 256 426 Z" fill="url(#lotusPetalGrad)" />
      <path d="M 256 426 C 312 412 347 372 346 326 C 302 340 272 385 256 426 Z" fill="url(#lotusPetalGrad)" />

      <!-- Central Sacred Petal -->
      <path d="M 256 312 C 230 355 218 396 256 434 C 294 396 282 355 256 312 Z" fill="url(#luminousAumGrad)" />

      <!-- Golden Diya Vessel Base -->
      <path d="M 216 425 C 236 442 276 442 296 425 C 280 430 232 430 216 425 Z" fill="#ffffff" />

      <!-- Living Sacred Flame (Jyoti) Rising from Lotus Center -->
      <path class="flame-glow" d="M 256 335 C 246 360 238 378 246 394 C 252 404 260 404 266 394 C 274 378 266 360 256 335 Z" fill="url(#divineFlameGrad)" />
    </g>

    <!-- B. THE SUPREME SACRED AUM (ॐ) CALLIGRAPHY -->
    <!-- 
      1. Upper curve (Jagrat / Waking state)
      2. Lower belly curve (Svapna / Dreaming state)
      3. Deep sleep knot and sweeping tail (Sushupti / Deep sleep state)
    -->
    <path d="
      M 194 136
      C 224 136, 250 152, 250 184
      C 250 208, 236 226, 214 236
      C 248 244, 270 274, 270 310
      C 270 358, 226 388, 172 388
      C 134 388, 102 368, 92 344
      C 88 334, 94 322, 106 320
      C 118 318, 126 326, 132 336
      C 142 352, 156 362, 174 362
      C 208 362, 234 340, 234 308
      C 234 274, 204 250, 168 250
      C 156 250, 148 244, 148 234
      C 148 224, 156 218, 168 218
      C 198 218, 218 202, 218 182
      C 218 164, 204 156, 192 156
      C 176 156, 162 166, 154 180
      C 148 190, 136 194, 126 188
      C 116 182, 114 170, 120 160
      C 136 136, 162 136, 194 136
      Z
    " fill="url(#luminousAumGrad)" stroke="#ffffff" stroke-width="1.5" />

    <!-- Sweeping Tail (Makhara cosmic loop) -->
    <path d="
      M 218 238
      C 254 238, 290 262, 312 292
      C 334 322, 346 358, 386 358
      C 416 358, 436 332, 436 302
      C 436 290, 426 282, 414 284
      C 404 286, 396 294, 396 304
      C 396 318, 388 328, 376 328
      C 356 328, 342 298, 324 272
      C 302 238, 264 214, 222 214
      C 214 214, 210 220, 210 226
      C 210 232, 214 238, 218 238
      Z
    " fill="url(#luminousAumGrad)" stroke="#ffffff" stroke-width="1.5" />

    <!-- CHANDRABINDU CRESCENT (Maya / The Veil of Creation) -->
    <path d="
      M 302 162
      C 328 196, 384 196, 410 162
      C 390 178, 322 178, 302 162
      Z
    " fill="url(#luminousAumGrad)" stroke="#ffffff" stroke-width="1.5" />

    <!-- GLOWING BINDU (Turiya / Pure Infinite Consciousness) -->
    <circle cx="356" cy="132" r="17" fill="url(#luminousAumGrad)" stroke="#ffffff" stroke-width="2" class="bindu-glow" />
    
    <!-- Pure White Diamond Core Light in Bindu -->
    <circle cx="354" cy="129" r="6" fill="#ffffff" />

    <!-- C. LUMINOUS INNER FILAMENT LINES (Intense 3D Neon Edge Highlight) -->
    <path d="
      M 194 140
      C 218 140, 242 154, 242 182
      C 242 198, 232 214, 212 226
    " fill="none" stroke="url(#innerLightCore)" stroke-width="4.5" stroke-linecap="round" />

    <path d="
      M 172 254
      C 204 254, 232 276, 232 308
      C 232 336, 212 356, 180 360
    " fill="none" stroke="url(#innerLightCore)" stroke-width="4.5" stroke-linecap="round" />

    <path d="
      M 314 286
      C 334 316, 350 350, 384 350
    " fill="none" stroke="url(#innerLightCore)" stroke-width="3.5" stroke-linecap="round" />
  </g>

  <!-- Divine 4-Point Star Burst (Divya Tejas) Sparkles -->
  <g fill="#ffffff" filter="drop-shadow(0 0 8px #fef08a)">
    <!-- Top right sparkle -->
    <path d="M 408 108 Q 408 126 422 126 Q 408 126 408 144 Q 408 126 394 126 Q 408 126 408 108 Z" />
    <!-- Bottom left sparkle -->
    <path d="M 120 274 Q 120 286 130 286 Q 120 286 120 298 Q 120 286 110 286 Q 120 286 120 274 Z" opacity="0.9" />
    <!-- Subtle third celestial sparkle near crest -->
    <path d="M 285 96 Q 285 104 292 104 Q 285 104 285 112 Q 285 104 278 104 Q 285 104 285 96 Z" opacity="0.85" />
  </g>
</svg>
`;

async function generateGlowingIcons() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Write the glowing SVG favicon
  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, glowingSvgContent, 'utf-8');
  console.log('Created glowing favicon:', svgPath);

  // Also write as brand-icon.svg
  fs.writeFileSync(path.join(publicDir, 'brand-icon.svg'), glowingSvgContent, 'utf-8');

  // Convert SVG buffer for sharp to render high-contrast luminous PNGs
  const svgBuffer = Buffer.from(glowingSvgContent);

  // 2. 512x512 Master PNG & App Icon
  await sharp(svgBuffer)
    .resize(512, 512)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('Created: icon-512.png');

  // 3. 192x192 PWA Icon
  await sharp(svgBuffer)
    .resize(192, 192)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('Created: icon-192.png');

  // 4. 180x180 Apple Touch Icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created: apple-touch-icon.png');

  // 5. 64x64 & 32x32 Favicon PNG
  await sharp(svgBuffer)
    .resize(64, 64)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'favicon-64.png'));
  console.log('Created: favicon-64.png');

  await sharp(svgBuffer)
    .resize(32, 32)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Created: favicon.png');

  // 6. Favicon ICO (Standard 32x32 PNG-based ICO)
  await sharp(svgBuffer)
    .resize(32, 32)
    .toFormat('png')
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Created: favicon.ico');

  // 7. 1024x1024 High-Res og-image.jpg for social previews
  await sharp(svgBuffer)
    .resize(1024, 1024)
    .jpeg({ quality: 94 })
    .toFile(path.join(publicDir, 'og-image.jpg'));
  console.log('Created: og-image.jpg');

  console.log('All glowing sacred AUM icons generated successfully!');
}

generateGlowingIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
