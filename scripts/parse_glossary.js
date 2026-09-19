import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = process.argv[2];
const outputPath = path.join(__dirname, '../src/glossaryData.json');

if (!inputPath) {
  console.error('Please provide input file path');
  process.exit(1);
}

const content = fs.readFileSync(inputPath, 'utf-8');
const lines = content.split('\n');

const sections = [];
let currentSection = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line.startsWith('## ')) {
    if (currentSection) {
      sections.push(currentSection);
    }
    const titleLine = line.substring(3).trim();
    
    // Find the first Arabic character
    const arabicMatch = titleLine.match(/[\u0600-\u06FF]/);
    
    let titleEn = titleLine;
    let titleAr = titleLine;
    
    if (arabicMatch) {
      const arabicIndex = arabicMatch.index;
      // Search backwards from the first Arabic character to find the separator
      const separatorIndex = titleLine.lastIndexOf('—', arabicIndex);
      if (separatorIndex !== -1) {
        titleEn = titleLine.substring(0, separatorIndex).trim();
        titleAr = titleLine.substring(separatorIndex + 1).trim();
      } else {
        const altSeparatorIndex = titleLine.lastIndexOf('-', arabicIndex);
        if (altSeparatorIndex !== -1) {
          titleEn = titleLine.substring(0, altSeparatorIndex).trim();
          titleAr = titleLine.substring(altSeparatorIndex + 1).trim();
        } else {
          titleEn = titleLine.substring(0, arabicIndex).trim();
          titleAr = titleLine.substring(arabicIndex).trim();
        }
      }
    }

    currentSection = {
      titleEn: titleEn,
      titleAr: titleAr,
      terms: []
    };
  } else if (line.startsWith('|') && currentSection) {
    // Skip header and divider rows
    if (line.includes('English Term') || line.includes('---')) continue;
    
    const parts = line.split('|').map(s => s.trim()).filter(Boolean);
    if (parts.length >= 3) {
      currentSection.terms.push({
        en: parts[1],
        ar: parts[2]
      });
    }
  }
}

if (currentSection) {
  sections.push(currentSection);
}

fs.writeFileSync(outputPath, JSON.stringify(sections, null, 2));
console.log(`Successfully parsed ${sections.length} sections into ${outputPath}`);
