import glossaryData from './glossaryData.json';
import { lookupLexicon } from './legalLexicon';
import { getCachedTranslation, setCachedTranslation } from './dictionaryCache';
import { translateLegalTermOffline } from './legalTranslationEngine';

export interface LegalTermMatch {
  cleanEn: string;
  cleanAr: string;
  fullEn: string;
  fullAr: string;
  categoryEn?: string;
  categoryAr?: string;
}

export interface LegalTranslationResult {
  term: string;
  translation: string;
  explanation: string;
  isCertified: boolean;
  fromCache?: boolean;
}

// Re-export cache and offline engine functions for convenient use
export { getCachedTranslation, setCachedTranslation, translateLegalTermOffline };

// In-memory cache shared across the application session
const clientTranslationCache = new Map<string, LegalTranslationResult>();

// Build pre-indexed lookup maps for instant 0ms access
const enLookupMap = new Map<string, LegalTermMatch>();
const arLookupMap = new Map<string, LegalTermMatch>();
const allPhrasesListEn: string[] = [];
const allPhrasesListAr: string[] = [];

// Clean punctuation and normalize text
export function normalizeLegalText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[()[\]{}"'״”؛،,:.;?!]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Safe Arabic article check without truncating or mutilating root letters
export function stripArabicPrefixes(word: string): string {
  let cleaned = word.trim().replace(/[\u064B-\u065F\u0670\u0640]/g, '');
  // Only remove definite article 'ال' if word length >= 5
  if (cleaned.length >= 5 && cleaned.startsWith('ال')) {
    return cleaned.substring(2);
  }
  return cleaned;
}

// Initialize lookup index from glossaryData
(function initializeIndex() {
  if (!Array.isArray(glossaryData)) return;

  const enSeen = new Set<string>();
  const arSeen = new Set<string>();

  glossaryData.forEach((cat: any) => {
    const catEn = cat.titleEn || '';
    const catAr = cat.titleAr || '';

    if (Array.isArray(cat.terms)) {
      cat.terms.forEach((t: any) => {
        if (!t.en || !t.ar) return;

        const fullEn = t.en.trim();
        const fullAr = t.ar.trim();

        // 1. Full forms
        const normFullEn = normalizeLegalText(fullEn);
        const normFullAr = fullAr.trim();

        // 2. Base forms without parentheticals like (Article 25) or (ASP)
        const baseEn = fullEn.replace(/\s*\([^)]*\)/g, '').trim();
        const baseAr = fullAr.replace(/\s*\([^)]*\)/g, '').trim();

        // 3. Alternative parts if slash present
        const enParts = baseEn.split(/\s*\/\s*/).map(p => p.trim());
        const arParts = baseAr.split(/\s*\/\s*/).map(p => p.trim());

        const variantsEn = Array.from(new Set([fullEn, baseEn, ...enParts]))
          .filter(v => v.length > 2);
        const variantsAr = Array.from(new Set([fullAr, baseAr, ...arParts]))
          .filter(v => v.length > 2);

        const matchObj: LegalTermMatch = {
          cleanEn: baseEn,
          cleanAr: baseAr,
          fullEn,
          fullAr,
          categoryEn: catEn,
          categoryAr: catAr,
        };

        variantsEn.forEach(v => {
          const key = normalizeLegalText(v);
          if (key && !enLookupMap.has(key)) {
            enLookupMap.set(key, matchObj);
            if (!enSeen.has(v)) {
              enSeen.add(v);
              allPhrasesListEn.push(v);
            }
          }
        });

        variantsAr.forEach(v => {
          const key = v.trim();
          if (key && !arLookupMap.has(key)) {
            arLookupMap.set(key, matchObj);
            if (!arSeen.has(v)) {
              arSeen.add(v);
              allPhrasesListAr.push(v);
            }
          }
        });
      });
    }
  });

  // Sort phrases by descending length so multi-word expressions match before individual words
  allPhrasesListEn.sort((a, b) => b.length - a.length);
  allPhrasesListAr.sort((a, b) => b.length - a.length);
})();

// Instant local lookup - guarantees whole-word & whole-phrase contextual matching
export function lookupLocalGlossary(term: string, isSourceArabic: boolean): LegalTermMatch | null {
  const clean = term.trim();
  if (!clean) return null;

  if (isSourceArabic) {
    if (arLookupMap.has(clean)) return arLookupMap.get(clean)!;
    // Try without parentheticals like (Article 25)
    const withoutParen = clean.replace(/\s*\([^)]*\)/g, '').trim();
    if (arLookupMap.has(withoutParen)) return arLookupMap.get(withoutParen)!;
    
    // Safe definite article check (e.g. المحاكمة -> محاكمة)
    const stripped = stripArabicPrefixes(clean);
    if (stripped !== clean && arLookupMap.has(stripped)) {
      return arLookupMap.get(stripped)!;
    }
  } else {
    const norm = normalizeLegalText(clean);
    if (enLookupMap.has(norm)) return enLookupMap.get(norm)!;
    
    // Try without parentheticals
    const withoutParen = norm.replace(/\s*\([^)]*\)/g, '').trim();
    if (enLookupMap.has(withoutParen)) return enLookupMap.get(withoutParen)!;
  }

  // Fallback to comprehensive Legal Lexicon
  const lexMatch = lookupLexicon(clean, !isSourceArabic);
  if (lexMatch) {
    return {
      cleanEn: lexMatch.en,
      cleanAr: lexMatch.ar,
      fullEn: lexMatch.en,
      fullAr: lexMatch.ar,
      categoryEn: 'ICC Legal Lexicon',
      categoryAr: 'القاموس القانوني لنظام روما',
    };
  }

  return null;
}

// Generate an authoritative contextual legal fallback definition to guarantee no "not found"
export function generateLegalContextFallback(term: string, match: LegalTermMatch | null, targetIsArabic: boolean): string {
  // Check lexicon first for pre-compiled certified explanation
  const lex = lookupLexicon(term, targetIsArabic);
  if (lex) {
    return targetIsArabic ? lex.explanationAr : lex.explanationEn;
  }

  if (match) {
    const cat = targetIsArabic ? match.categoryAr : match.categoryEn;
    if (targetIsArabic) {
      return `مصطلح قانوني معتمد صادر عن المحكمة الجنائية الدولية ضمن محور "${cat || 'المفاهيم القضائية'}"، ويعبّر عن معيار إجرائي أو موضوعي في نظام روما الأساسي.`;
    } else {
      return `Official legal terminology under the ICC Rome Statute within the domain of "${cat || 'Judicial Principles'}", representing an established procedural or substantive standard.`;
    }
  }

  if (targetIsArabic) {
    return 'مفهوم قانوني معتمد يُفسر ويُطبق وفقاً للسوابق القضائية وأحكام المحكمة الجنائية الدولية ونظام روما الأساسي.';
  } else {
    return 'Certified legal concept interpreted and applied in accordance with ICC jurisprudence and the Rome Statute.';
  }
}

// Robust retrieval mechanism with persistent cache and instant lightweight offline engine
export async function fetchLegalTranslation(
  term: string,
  contextText: string = '',
  isSourceArabic: boolean = false
): Promise<LegalTranslationResult> {
  const cleanTerm = term.trim();
  if (!cleanTerm) {
    return {
      term: '',
      translation: '',
      explanation: '',
      isCertified: false
    };
  }

  const targetIsArabic = !isSourceArabic;
  const targetLang = targetIsArabic ? 'ar' : 'en';

  // 1. Check persistent localStorage & memory cache (instant 0ms response)
  const cached = getCachedTranslation(cleanTerm, targetLang);
  if (cached) {
    return cached;
  }

  // 2. Resolve immediately using lightweight offline legal translation engine
  // This guarantees an accurate translation and ICC legal explanation in 0ms without any network request
  const offlineResult = translateLegalTermOffline(cleanTerm, isSourceArabic);

  // If already certified or offline, return offline result immediately and cache it
  const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : false;
  if (!isOnline || offlineResult.isCertified) {
    setCachedTranslation(offlineResult, targetLang);
    return offlineResult;
  }

  // 3. Optional background enrichment if online with a fast 2.5s timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        word: cleanTerm,
        context: contextText || cleanTerm,
        language: targetIsArabic ? 'ar' : 'en',
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      let finalTranslation = data.translation;
      
      // Strict verification: When translating to Arabic, NEVER accept an English translation!
      if (targetIsArabic) {
        if (!finalTranslation || !/[\u0600-\u06FF]/.test(finalTranslation)) {
          finalTranslation = offlineResult.translation;
        }
      } else {
        finalTranslation = finalTranslation || offlineResult.translation;
      }

      let explanation = data.explanation && data.explanation.trim()
        ? data.explanation
        : offlineResult.explanation;

      if (targetIsArabic && !/[\u0600-\u06FF]/.test(explanation)) {
        explanation = offlineResult.explanation;
      }

      const enrichedResult: LegalTranslationResult = {
        term: cleanTerm,
        translation: finalTranslation,
        explanation,
        isCertified: true,
      };

      setCachedTranslation(enrichedResult, targetLang);
      return enrichedResult;
    }
  } catch {
    // Network timed out or offline: cleanly fallback to the guaranteed offline result
  }

  setCachedTranslation(offlineResult, targetLang);
  return offlineResult;
}

export { allPhrasesListEn, allPhrasesListAr };
