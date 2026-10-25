import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Refined, ultra-light, modern monochrome legal emblem
// Perfectly centered with 100% Android Adaptive Icon & iOS Safe Zone compliance
// Pure iconic geometry, no noisy text, perfectly balanced scales of international justice

function getScalesSvg({ background = 'transparent', color = '#171717' }) {
  // 512x512 canvas. Center is (256, 256).
  // Emblem is scaled by 0.85 around center (256, 256)
  // Max radius from center is ~146px (Official Android safe zone is 168px radius)
  // Guaranteed zero clipping across all phone launchers and masks.

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  ${background !== 'transparent' ? `<rect width="512" height="512" fill="${background}"/>` : ''}
  
  <g transform="translate(256, 256) scale(0.85) translate(-256, -256)">
    <!-- Central Law Pillar / Axis of Justice -->
    <!-- Finial Diamond Apex -->
    <path d="M 256 98 L 265 114 L 256 122 L 247 114 Z" fill="${color}"/>
    
    <!-- Central Pivot Ring -->
    <circle cx="256" cy="136" r="8.5" fill="none" stroke="${color}" stroke-width="4.5"/>
    
    <!-- Vertical Pillar Shaft -->
    <line x1="256" y1="145" x2="256" y2="356" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
    
    <!-- Pedestal Plinth -->
    <path d="M 238 356 L 274 356" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
    <path d="M 222 370 L 290 370" stroke="${color}" stroke-width="7" stroke-linecap="round"/>
    <rect x="204" y="380" width="104" height="12" rx="6" fill="${color}"/>

    <!-- Balance Fulcrum -->
    <circle cx="256" cy="180" r="13" fill="${color}"/>
    <circle cx="256" cy="180" r="5" fill="${background === 'transparent' ? '#ffffff' : background}"/>

    <!-- Balance Beam (Sleek aerodynamic parabolic arch) -->
    <path d="M 134 192 C 188 174, 230 178, 256 180 C 282 178, 324 174, 378 192" 
          fill="none" stroke="${color}" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Left Pivot Ring -->
    <circle cx="134" cy="192" r="5.5" fill="${color}"/>
    
    <!-- Right Pivot Ring -->
    <circle cx="378" cy="192" r="5.5" fill="${color}"/>

    <!-- Left Pan Suspension Cords -->
    <line x1="134" y1="192" x2="94" y2="280" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.8"/>
    <line x1="134" y1="192" x2="174" y2="280" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.8"/>

    <!-- Left Pan (Curved Dish with fine rim) -->
    <path d="M 88 280 Q 134 314 180 280" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round"/>
    <path d="M 92 280 Q 134 310 176 280 Z" fill="${color}" fill-opacity="0.12"/>
    <line x1="86" y1="280" x2="182" y2="280" stroke="${color}" stroke-width="3" stroke-linecap="round"/>

    <!-- Right Pan Suspension Cords -->
    <line x1="378" y1="192" x2="338" y2="280" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.8"/>
    <line x1="378" y1="192" x2="418" y2="280" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.8"/>

    <!-- Right Pan (Curved Dish with fine rim) -->
    <path d="M 332 280 Q 378 314 424 280" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round"/>
    <path d="M 336 280 Q 378 310 420 280 Z" fill="${color}" fill-opacity="0.12"/>
    <line x1="330" y1="280" x2="426" y2="280" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>
  `.trim();
}

async function run() {
  const publicDir = path.resolve('public');
  
  // 1. Vector SVG icon (clean, transparent)
  const vectorSvg = getScalesSvg({ background: 'transparent', color: '#171717' });
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), vectorSvg);

  // 2. White clean solid background SVG for Maskable and iOS Apple Touch Icon
  const solidWhiteSvg = getScalesSvg({ background: '#ffffff', color: '#171717' });

  // 3. Maskable Icon 512x512 (Android launcher adaptive icon)
  await sharp(Buffer.from(solidWhiteSvg))
    .resize(512, 512)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));

  // 4. Standard PWA 512x512
  await sharp(Buffer.from(solidWhiteSvg))
    .resize(512, 512)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'pwa-512x512.png'));

  // 5. Standard PWA 192x192
  await sharp(Buffer.from(solidWhiteSvg))
    .resize(192, 192)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'pwa-192x192.png'));

  // 6. Apple Touch Icon 180x180
  await sharp(Buffer.from(solidWhiteSvg))
    .resize(180, 180)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 7. Favicon 48x48
  await sharp(Buffer.from(solidWhiteSvg))
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('Successfully generated sleek, minimalist monochrome icons with safe-zone compliance!');
}

run().catch(console.error);
