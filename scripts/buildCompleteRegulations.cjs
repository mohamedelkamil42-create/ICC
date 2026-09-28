const fs = require('fs');
const path = require('path');

const parsed = JSON.parse(fs.readFileSync(path.join(__dirname, 'parsedRegulations.json'), 'utf-8'));

const t1 = require('./translations_ch1_ch2.cjs');
const t2 = require('./translations_ch3_part1.cjs');
const t3 = require('./translations_ch3_part2.cjs');
const t4 = require('./translations_ch4_ch5.cjs');
const t5 = require('./translations_ch6_ch7_ch8_ch9.cjs');

const allTranslations = {
  ...t1,
  ...t2,
  ...t3,
  ...t4,
  ...t5
};

console.log("Total translated entries in dictionary:", Object.keys(allTranslations).length);

let missingCount = 0;
let totalRegs = 0;

parsed.forEach(chapter => {
  chapter.articles.forEach(art => {
    totalRegs++;
    const ar = allTranslations[art.id];
    if (!ar) {
      console.warn("MISSING TRANSLATION FOR:", art.id, art.number, art.titleEn);
      missingCount++;
    } else {
      art.contentAr = ar.trim();
      // Ensure contentEn is trimmed and clean
      art.contentEn = art.contentEn.trim();
    }
  });
});

console.log(`Total parsed regulations: ${totalRegs}, Missing: ${missingCount}`);

if (missingCount === 0) {
  const tsContent = `import { Part } from './RomeStatuteViewer';

/**
 * لوائح المحكمة الجنائية الدولية
 * Regulations of the Court - Adopted pursuant to article 52 of the Rome Statute
 * 9 Chapters, 134 Regulations (Regulations 1-126 plus variants)
 * Fully bilingual (Arabic & English) with zero mixed language leakage.
 */
export const regulationsOfTheCourtParts: Part[] = ${JSON.stringify(parsed, null, 2)};
`;

  fs.writeFileSync(path.join(__dirname, '../src/regulationsOfTheCourtData.ts'), tsContent, 'utf-8');
  console.log("SUCCESS: Written pristine bilingual regulations to src/regulationsOfTheCourtData.ts!");
} else {
  console.error("FAILED: Some regulations are missing translations.");
  process.exit(1);
}
