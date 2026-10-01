import fs from 'fs';
import path from 'path';

const filePath = './src/comprehensiveLegalDictionary.ts';
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = 'export const comprehensiveLegalVocab: Record<string, LegalVocabEntry> = {';
const endMarker = '};';

const startIndex = content.indexOf(startMarker);
const endIndex = content.lastIndexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const objectContent = content.substring(startIndex + startMarker.length, endIndex);
  const rawLines = objectContent.split('\n');
  
  let finalLines = [];
  let seenKeys = new Set();
  let currentKey = null;
  let block = [];

  for (let line of rawLines) {
    const match = line.match(/^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*\{/);
    if (match) {
      // New key found
      if (currentKey) {
        if (!seenKeys.has(currentKey)) {
          finalLines.push(...block);
          seenKeys.add(currentKey);
        }
      }
      currentKey = match[1];
      block = [line];
    } else if (currentKey) {
      block.push(line);
    } else {
      finalLines.push(line);
    }
  }
  // push last
  if (currentKey && !seenKeys.has(currentKey)) {
    finalLines.push(...block);
  }

  const newContent = content.substring(0, startIndex + startMarker.length) + 
                     finalLines.join('\n') + 
                     content.substring(endIndex);
  
  fs.writeFileSync(filePath, newContent);
  console.log("Success");
}
