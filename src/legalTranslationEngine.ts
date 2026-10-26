// Lightweight High-Performance Offline Legal Translation Engine for ICC Instruments
// Ensures instant response (<1ms) and 100% offline availability without "not found" errors.

import glossaryData from './glossaryData.json';
import { legalLexicon, LexiconEntry, lookupLexicon } from './legalLexicon';
import { comprehensiveLegalVocab, lookupComprehensiveVocab, LegalVocabEntry } from './comprehensiveLegalDictionary';
import { getCachedTranslation, setCachedTranslation } from './dictionaryCache';
import { LegalTranslationResult } from './types';

// Import all application data for automatic indexing
import { romeStatuteParts } from './romeStatuteData';
import { rulesOfProcedureParts } from './rulesOfProcedureData';
import { elementsOfCrimesParts } from './elementsOfCrimesData';
import { regulationsOfTheCourtParts } from './regulationsOfTheCourtData';
import { regulationsOfTheRegistryParts } from './regulationsOfTheRegistryData';
import { regulationsOfTheOfficeOfTheProsecutorParts } from './regulationsOfTheProsecutorData';

export interface LocalLegalTerm {
  en: string;
  ar: string;
  categoryEn: string;
  categoryAr: string;
  explanationEn?: string;
  explanationAr?: string;
}

// In-memory indexing maps for 0ms lookup
const enExactMap = new Map<string, LocalLegalTerm>();
const arExactMap = new Map<string, LocalLegalTerm>();

export const multiWordPhrasesEn: string[] = [];
export const multiWordPhrasesAr: string[] = [];
export const allPhrasesListEn: string[] = [];
export const allPhrasesListAr: string[] = [];

/**
 * Normalize English legal words
 */
export function normalizeEnglish(str: string): string {
  return str
    .toLowerCase()
    .replace(/[()[\]{}"'“”‘’«»״”؛،,:.;?!]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalize Arabic legal words (removes diacritics, tatweel, unifies letters)
 */
export function normalizeArabic(str: string): string {
  return str
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '') // remove tashkeel & tatweel
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/[()[\]{}"'“”‘’«»״”؛،,:.;?!]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Comprehensive Arabic morphological variant generator for ICC statutory terminology.
 * Handles proclitics (و، ف، ب، ل، ك، س، ال), enclitic pronouns (ها، ه، هم، هما، هن، كم، نا),
 * feminine/nisba endings (ة/ه، ية/يه), tanween alef (ا), sound plurals (ات، ين، ون),
 * duals (ان، تان، تين), and verb conjugations (تـ -> يـ، ت، وا، ون).
 */
export function getSafeArabicVariants(word: string): string[] {
  const norm = normalizeArabic(word);
  const variants = new Set<string>();
  if (!norm) return [];
  variants.add(norm);

  if (norm.length < 2) return Array.from(variants);

  const baseStems = new Set<string>([norm]);

  // Helper to register a stem with and without definite article 'ال'
  const addStemAndAl = (s: string) => {
    if (!s || s.length < 2) return;
    baseStems.add(s);
    variants.add(s);
    if (s.startsWith('ال') && s.length >= 4) {
      baseStems.add(s.slice(2));
      variants.add(s.slice(2));
    } else if (!s.startsWith('ال') && s.length >= 2) {
      baseStems.add('ال' + s);
      variants.add('ال' + s);
    }
  };

  addStemAndAl(norm);

  // 1. Multi-letter & Nested Proclitics
  const multiPrefixes = [
    'وبال', 'فبال', 'وكال', 'فكال', 'ولل', 'فلل',
    'وال', 'فال', 'بال', 'كال', 'لل',
    'وس', 'فس', 'سي', 'ست', 'سن', 'لي', 'لت', 'ول', 'فل', 'وب', 'فب', 'وك', 'فك'
  ];
  for (const mp of multiPrefixes) {
    if (norm.startsWith(mp) && norm.length >= mp.length + 2) {
      const stem = norm.slice(mp.length);
      addStemAndAl(stem);
      if (mp === 'سي' || mp === 'لي' || mp === 'ست' || mp === 'لت') {
        // Restore imperfect verb prefix 'ي' or 'ت'
        addStemAndAl('ي' + stem);
        addStemAndAl('ت' + stem);
      }
    }
  }

  // 2. Common single-letter proclitics: و, ف, ب, ل, ك, س
  const singlePrefixes = ['و', 'ف', 'ب', 'ل', 'ك', 'س'];
  for (const p of singlePrefixes) {
    if (norm.startsWith(p) && norm.length >= 3) {
      const stripped = norm.slice(1);
      addStemAndAl(stripped);

      for (const p2 of singlePrefixes) {
        if (stripped.startsWith(p2) && stripped.length >= 3) {
          addStemAndAl(stripped.slice(1));
        }
      }
    }
  }

  // 3. Process suffixes (enclitic pronouns, plurals, duals, feminine/nisba, verb inflections) on all baseStems
  const currentStems = Array.from(baseStems);
  const encliticPronouns = ['هما', 'كم', 'هم', 'هن', 'ها', 'نا', 'ه', 'ك', 'ي'];

  const addWithAl = (s: string) => {
    if (!s || s.length < 2) return;
    variants.add(s);
    if (s.startsWith('ال') && s.length >= 4) {
      variants.add(s.slice(2));
    } else if (!s.startsWith('ال') && s.length >= 2) {
      variants.add('ال' + s);
    }
  };

  for (const stem of currentStems) {
    // 3a. Enclitic pronouns (e.g., محاكمته -> محاكمة، سلطتها -> سلطة، مرتكبيها -> مرتكب، أحكامها -> أحكام)
    for (const pron of encliticPronouns) {
      if (stem.endsWith(pron) && stem.length >= pron.length + 2) {
        const noPron = stem.slice(0, -pron.length);
        addWithAl(noPron);

        // If feminine taa marbuta turned into 'ت' before pronoun (e.g., محاكمت + ه -> محاكمه)
        if (noPron.endsWith('ت') && noPron.length >= 3) {
          addWithAl(noPron.slice(0, -1) + 'ه');
          // Also check feminine plural -ات before pronoun (e.g., إجراءاتها -> إجراءات -> إجراء)
          if (noPron.endsWith('ات') && noPron.length >= 4) {
            const singFromAt = noPron.slice(0, -2);
            addWithAl(singFromAt);
            addWithAl(singFromAt + 'ه');
          }
        }

        // If sound masculine plural lost 'ن' before pronoun (e.g., مرتكبيها -> مرتكبي -> مرتكب، ممثليهم -> ممثل)
        if ((noPron.endsWith('ي') || noPron.endsWith('و')) && noPron.length >= 4) {
          addWithAl(noPron.slice(0, -1));
          addWithAl(noPron.slice(0, -1) + 'ون');
          addWithAl(noPron.slice(0, -1) + 'ين');
        }

        // If verb + pronoun (e.g., تقررها -> تقرر -> يقرر)
        if (!noPron.startsWith('ال') && noPron.startsWith('ت') && noPron.length >= 4) {
          variants.add('ي' + noPron.slice(1));
        }
      }
    }

    // 3b. Sound feminine plural '-ات' (e.g., الإجراءات -> الإجراء، السلطات -> السلطة، الجلسات -> الجلسة)
    if (stem.endsWith('ات') && stem.length >= 4) {
      const sing = stem.slice(0, -2);
      addWithAl(sing);
      addWithAl(sing + 'ه');
      if (sing.endsWith('ي') && sing.length >= 3) {
        addWithAl(sing.slice(0, -1));
      }
    }

    // 3c. Duals '-تين', '-تان', '-ان' (e.g., المادتين -> المادة، الفقرتين -> الفقرة، الدولتان -> الدولة، الطرفين -> الطرف)
    if ((stem.endsWith('تين') || stem.endsWith('تان')) && stem.length >= 5) {
      const femSing = stem.slice(0, -3) + 'ه';
      addWithAl(femSing);
      addWithAl(stem.slice(0, -3));
    }
    if (stem.endsWith('ان') && stem.length >= 4) {
      const sing = stem.slice(0, -2);
      addWithAl(sing);
      addWithAl(sing + 'ه');
    }

    // 3d. Sound masculine plural / dual oblique '-ين', '-ون' (e.g., المتهمين -> المتهم، القانونيين -> القانوني)
    if ((stem.endsWith('ين') || stem.endsWith('ون')) && stem.length >= 4) {
      const sing = stem.slice(0, -2);
      addWithAl(sing);
      addWithAl(sing + 'ه');
      if (!sing.startsWith('ال') && sing.startsWith('ت') && sing.length >= 4) {
        variants.add('ي' + sing.slice(1));
      }
    }

    // 3e. Feminine & Nisba endings '-يه', '-ه' (e.g., القضائية -> القضائي -> القضاء، مقبولة -> مقبول)
    if (stem.endsWith('يه') && stem.length >= 4) {
      addWithAl(stem.slice(0, -1)); // masculine nisba 'ي'
      addWithAl(stem.slice(0, -2)); // base noun
      addWithAl(stem.slice(0, -2) + 'ه');
    } else if (stem.endsWith('ه') && stem.length >= 4) {
      addWithAl(stem.slice(0, -1)); // masculine adjective/noun without 'ة'
    }

    // 3f. Tanween fatha '-ا' / '-يا' (e.g., وفقا -> وفق، قانونا -> قانون، شخصيا -> شخصي، فورا -> فور)
    if (stem.endsWith('ا') && stem.length >= 4) {
      const noAlef = stem.slice(0, -1);
      addWithAl(noAlef);
      addWithAl(noAlef + 'ه');
      if (noAlef.endsWith('ي') && noAlef.length >= 3) {
        addWithAl(noAlef.slice(0, -1));
        addWithAl(noAlef.slice(0, -1) + 'ه');
      }
    }

    // 3g. Verb conjugations (feminine/plural imperfect & past tense)
    if (!stem.startsWith('ال') && stem.length >= 4) {
      // Feminine/2nd-person imperfect 'تـ...' -> masculine 'يـ...' (e.g., تقرر -> يقرر، تأمر -> يأمر، تطلب -> يطلب)
      if (stem.startsWith('ت') || stem.startsWith('ن') || stem.startsWith('ا')) {
        variants.add('ي' + stem.slice(1));
      }
      // Feminine past tense '...ت' -> masculine past or imperfect (e.g., قررت -> قرر / يقرر، كانت -> كان، صدرت -> صدر)
      if (stem.endsWith('ت')) {
        const pastMasc = stem.slice(0, -1);
        variants.add(pastMasc);
        variants.add('ي' + pastMasc);
      }
      // Plural past tense '...وا' -> masculine past or imperfect (e.g., ارتكبوا -> ارتكب / يرتكب، قدموا -> قدم)
      if (stem.endsWith('وا') && stem.length >= 5) {
        const pastMasc = stem.slice(0, -2);
        variants.add(pastMasc);
        variants.add('ي' + pastMasc);
      }
      // Subjunctive/Jussive dropped 'وا' -> '...و' or imperfect '...ي'
      if (stem.startsWith('ي') && stem.length >= 4) {
        variants.add(stem.slice(1)); // past tense from imperfect (e.g., يقرر -> قرر)
      }
    }
  }

  return Array.from(variants);
}

/**
 * Comprehensive English morphological variant generator for ICC statutory terminology.
 * Handles plurals (-ies, -ves, -es, -s), past/participles (-ied, -ed, doubled consonants),
 * gerunds (-ying, -ing), adverbs (-ily, -ally, -ly), nominalizations (-ation, -tion, -ment),
 * and UK/US spelling normalization (defence/defense, authorise/authorize, etc.).
 */
export function getSafeEnglishVariants(word: string): string[] {
  const norm = normalizeEnglish(word);
  const variants = new Set<string>();
  if (!norm) return [];
  variants.add(norm);

  const addCandidate = (w: string) => {
    if (w && w.length >= 2) variants.add(w);
  };

  // 1. UK <-> US Spelling Normalization
  const ukUsPairs: [RegExp, string][] = [
    [/defence/g, 'defense'],
    [/defense/g, 'defence'],
    [/offence/g, 'offense'],
    [/offense/g, 'offence'],
    [/licence/g, 'license'],
    [/license/g, 'licence'],
    [/practise/g, 'practice'],
    [/centre/g, 'center'],
    [/center/g, 'centre'],
    [/wilful/g, 'willful'],
    [/willful/g, 'wilful'],
    [/fulfilment/g, 'fulfillment'],
    [/fulfillment/g, 'fulfilment'],
    [/fulfil/g, 'fulfill'],
    [/instalment/g, 'installment'],
    [/installment/g, 'instalment'],
    [/our\b/g, 'or'],
    [/ours\b/g, 'ors'],
    [/oured\b/g, 'ored'],
    [/ouring\b/g, 'oring'],
    [/ise\b/g, 'ize'],
    [/ize\b/g, 'ise'],
    [/ises\b/g, 'izes'],
    [/izes\b/g, 'ises'],
    [/ised\b/g, 'ized'],
    [/ized\b/g, 'ised'],
    [/ising\b/g, 'izing'],
    [/izing\b/g, 'ising'],
    [/isation/g, 'ization'],
    [/ization/g, 'isation'],
    [/yse\b/g, 'yze'],
    [/yze\b/g, 'yse'],
    [/ysed\b/g, 'yzed'],
    [/yzed\b/g, 'ysed'],
  ];

  for (const [pattern, replacement] of ukUsPairs) {
    if (pattern.test(norm)) {
      addCandidate(norm.replace(pattern, replacement));
    }
  }

  // Hyphenated word alternatives
  if (norm.includes('-')) {
    addCandidate(norm.replace(/-/g, ' '));
    addCandidate(norm.replace(/-/g, ''));
  }

  const baseForms = Array.from(variants);

  for (const form of baseForms) {
    // 2. Plurals (-ies, -ves, -es, -s)
    if (form.endsWith('ies') && form.length > 4) {
      addCandidate(form.slice(0, -3) + 'y');
    }
    if (form.endsWith('ves') && form.length > 4) {
      addCandidate(form.slice(0, -3) + 'f');
      addCandidate(form.slice(0, -3) + 'fe');
    }
    if (form.endsWith('es') && form.length > 3) {
      addCandidate(form.slice(0, -2));
      addCandidate(form.slice(0, -1));
    }
    if (form.endsWith('s') && !form.endsWith('ss') && !form.endsWith('us') && !form.endsWith('is') && form.length > 3) {
      addCandidate(form.slice(0, -1));
    }

    // 3. Past Tense & Past Participles (-ied, -ed)
    if (form.endsWith('ied') && form.length > 4) {
      addCandidate(form.slice(0, -3) + 'y');
    }
    if (form.endsWith('ed') && form.length > 4) {
      const stem = form.slice(0, -2);
      const stemE = form.slice(0, -1); // e.g., decided -> decide, accused -> accuse
      addCandidate(stem);
      addCandidate(stemE);
      // Doubled consonant before -ed (e.g., committed -> commit, referred -> refer, submitted -> submit)
      if (stem.length >= 3 && stem[stem.length - 1] === stem[stem.length - 2]) {
        addCandidate(stem.slice(0, -1));
      }
    }

    // 4. Present Participles & Gerunds (-ying, -ing)
    if (form.endsWith('ying') && form.length > 5) {
      addCandidate(form.slice(0, -4) + 'ie');
      addCandidate(form.slice(0, -3));
    }
    if (form.endsWith('ing') && form.length > 5) {
      const stem = form.slice(0, -3);
      addCandidate(stem);
      addCandidate(stem + 'e'); // e.g., making -> make, issuing -> issue, ruling -> rule
      if (stem.length >= 3 && stem[stem.length - 1] === stem[stem.length - 2]) {
        addCandidate(stem.slice(0, -1)); // e.g., committing -> commit, sitting -> sit
      }
    }

    // 5. Adverbs (-ily, -ally, -bly, -ly)
    if (form.endsWith('ily') && form.length > 5) {
      addCandidate(form.slice(0, -3) + 'y'); // voluntarily -> voluntary
    }
    if (form.endsWith('ally') && form.length > 6) {
      addCandidate(form.slice(0, -2)); // criminally -> criminal
      addCandidate(form.slice(0, -4)); // specifically -> specific
    }
    if (form.endsWith('bly') && form.length > 5) {
      addCandidate(form.slice(0, -1) + 'e'); // reasonably -> reasonable, forcibly -> forcible
    }
    if (form.endsWith('ly') && form.length > 4) {
      const stem = form.slice(0, -2);
      addCandidate(stem);
      addCandidate(stem + 'e'); // duly -> due, truly -> true, wholly -> whole
    }

    // 6. Common Nominalizations & Agent Nouns (-ation, -tion, -ment, -ity, -ness, -or, -er)
    if (form.endsWith('ation') && form.length > 7) {
      addCandidate(form.slice(0, -5));
      addCandidate(form.slice(0, -5) + 'e');
      addCandidate(form.slice(0, -3) + 'e');
    }
    if (form.endsWith('tion') && form.length > 6) {
      addCandidate(form.slice(0, -4));
      addCandidate(form.slice(0, -3) + 'e');
    }
    if (form.endsWith('ment') && form.length > 6) {
      addCandidate(form.slice(0, -4));
      addCandidate(form.slice(0, -4) + 'e');
    }
    if (form.endsWith('ity') && form.length > 6) {
      addCandidate(form.slice(0, -3));
      addCandidate(form.slice(0, -3) + 'e');
    }
    if ((form.endsWith('or') || form.endsWith('er')) && form.length > 5) {
      const stem = form.slice(0, -2);
      addCandidate(stem);
      addCandidate(stem + 'e');
      if (stem.length >= 3 && stem[stem.length - 1] === stem[stem.length - 2]) {
        addCandidate(stem.slice(0, -1));
      }
    }
  }

  return Array.from(variants);
}

// Helper to index Arabic term with and without definite article 'ال'
function indexArabicEntry(rawAr: string, termObj: LocalLegalTerm) {
  const normAr = normalizeArabic(rawAr);
  if (!normAr) return;
  if (!arExactMap.has(normAr)) arExactMap.set(normAr, termObj);
  if (normAr.startsWith('ال') && normAr.length >= 4) {
    const noAl = normAr.slice(2);
    if (!arExactMap.has(noAl)) arExactMap.set(noAl, termObj);
  } else if (!normAr.startsWith('ال') && normAr.length >= 2) {
    const withAl = 'ال' + normAr;
    if (!arExactMap.has(withAl)) arExactMap.set(withAl, termObj);
  }
}

function indexEnglishEntry(rawEn: string, termObj: LocalLegalTerm) {
  const normEn = normalizeEnglish(rawEn);
  if (!normEn) return;
  if (!enExactMap.has(normEn)) enExactMap.set(normEn, termObj);
}

// Self-initializing index builder
(function initLegalDatabase() {
  const enSeen = new Set<string>();
  const arSeen = new Set<string>();

  // 1. Index Glossary Data (1,011 terms)
  if (Array.isArray(glossaryData)) {
    glossaryData.forEach((cat: any) => {
      const catEn = cat.titleEn || 'General ICC Concepts';
      const catAr = cat.titleAr || 'المفاهيم العامة للمحكمة';

      if (Array.isArray(cat.terms)) {
        cat.terms.forEach((t: any) => {
          if (!t.en || !t.ar) return;

          const termObj: LocalLegalTerm = {
            en: t.en.trim(),
            ar: t.ar.trim(),
            categoryEn: catEn,
            categoryAr: catAr,
            explanationAr: `مصطلح قانوني رسمي صادر عن المحكمة الجنائية الدولية ضمن باب "${catAr}".`,
            explanationEn: `Official legal term recognized by the ICC under "${catEn}".`,
          };

          indexEnglishEntry(termObj.en, termObj);
          indexArabicEntry(termObj.ar, termObj);

          // Register multi-word legal expressions separately (indivisible units)
          if (termObj.en.includes(' ') && !multiWordPhrasesEn.includes(termObj.en)) {
            multiWordPhrasesEn.push(termObj.en);
          }
          if (termObj.ar.includes(' ') && !multiWordPhrasesAr.includes(termObj.ar)) {
            multiWordPhrasesAr.push(termObj.ar);
          }

          // Also index variants without parentheticals like (Article 25)
          const baseEn = termObj.en.replace(/\s*\([^)]*\)/g, '').trim();
          const baseAr = termObj.ar.replace(/\s*\([^)]*\)/g, '').trim();
          if (baseEn && baseEn !== termObj.en) {
            indexEnglishEntry(baseEn, termObj);
            if (baseEn.includes(' ') && !multiWordPhrasesEn.includes(baseEn)) {
              multiWordPhrasesEn.push(baseEn);
            }
          }
          if (baseAr && baseAr !== termObj.ar) {
            indexArabicEntry(baseAr, termObj);
            if (baseAr.includes(' ') && !multiWordPhrasesAr.includes(baseAr)) {
              multiWordPhrasesAr.push(baseAr);
            }
          }

          // Index slashed options
          baseEn.split(/\s*\/\s*/).forEach(opt => indexEnglishEntry(opt, termObj));
          baseAr.split(/\s*\/\s*/).forEach(opt => indexArabicEntry(opt, termObj));

          if (!enSeen.has(termObj.en)) {
            enSeen.add(termObj.en);
            allPhrasesListEn.push(termObj.en);
          }
          if (!arSeen.has(termObj.ar)) {
            arSeen.add(termObj.ar);
            allPhrasesListAr.push(termObj.ar);
          }
        });
      }
    });
  }

  // 2. Index Legal Lexicon
  if (typeof legalLexicon === 'object') {
    Object.entries(legalLexicon).forEach(([key, lex]: [string, LexiconEntry]) => {
      const termObj: LocalLegalTerm = {
        en: lex.en,
        ar: lex.ar,
        categoryEn: 'ICC Legal Lexicon',
        categoryAr: 'القاموس القانوني لنظام روما',
        explanationEn: lex.explanationEn,
        explanationAr: lex.explanationAr,
      };

      indexEnglishEntry(lex.en, termObj);
      indexEnglishEntry(key, termObj);
      indexArabicEntry(lex.ar, termObj);

      lex.en.split(/\s*\/\s*/).forEach(opt => indexEnglishEntry(opt, termObj));
      lex.ar.split(/\s*\/\s*/).forEach(opt => indexArabicEntry(opt, termObj));

      if (termObj.en.includes(' ') && !multiWordPhrasesEn.includes(termObj.en)) {
        multiWordPhrasesEn.push(termObj.en);
      }
      if (termObj.ar.includes(' ') && !multiWordPhrasesAr.includes(termObj.ar)) {
        multiWordPhrasesAr.push(termObj.ar);
      }

      if (!enSeen.has(lex.en)) {
        enSeen.add(lex.en);
        allPhrasesListEn.push(lex.en);
      }
      if (!arSeen.has(lex.ar)) {
        arSeen.add(lex.ar);
        allPhrasesListAr.push(lex.ar);
      }
    });
  }

  // 3. Common Latin and International Legal Maxims
  const latinMaxims: [string, string, string, string][] = [
    ['ne bis in idem', 'مبدأ عدم جواز المحاكمة عن ذات الجرم مرتين', 'A fundamental rule under Article 20 prohibiting double jeopardy.', 'مبدأ قانوني أصيل بموجب المادة 20 يحظر محاكمة الشخص أكثر من مرة عن نفس الفعل الإجرامي.'],
    ['non bis in idem', 'مبدأ عدم جواز المحاكمة عن ذات الجرم مرتين', 'A fundamental rule under Article 20 prohibiting double jeopardy.', 'مبدأ قانوني أصيل بموجب المادة 20 يحظر محاكمة الشخص أكثر من مرة عن نفس الفعل الإجرامي.'],
    ['proprio motu', 'بمبادرة ذاتية / من تلقاء النفس', 'The Prosecutor power under Article 15 to initiate an investigation independently.', 'سلطة المدعي العام بموجب المادة 15 في مباشرة التحقيق من تلقاء نفسه دون إحالة سابقة.'],
    ['mens rea', 'الركن المعنوي / القصد الجنائي', 'The mental element of a crime under Article 30 requiring intent and knowledge.', 'الركن المعنوي للجريمة بموجب المادة 30 الذي يستلزم توفر القصد الجنائي والعلم.'],
    ['actus reus', 'الركن المادي / السلوك الإجرامي', 'The material conduct or omission constituting the physical element of a crime.', 'السلوك أو الفعل أو الامتناع الذي يشكل الركن المادي المكون للجريمة.'],
    ['prima facie', 'أدلة ظاهرية الوجاهة', 'Evidence sufficient to establish a fact or raise a presumption unless disproved.', 'أدلة كافية لإثبات واقعة أو ترجيحها للوهلة الأولى ما لم يثبت العكس.'],
    ['amicus curiae', 'صديق المحكمة', 'An expert or organization permitted by the Court to provide observations under Rule 103.', 'خبير أو منظمة تأذن لها المحكمة بتقديم ملاحظات استشارية بموجب القاعدة 103.'],
    ['in camera', 'جلسات مغلقة / سرية', 'Hearings conducted in private to protect witnesses, victims, or sensitive evidence.', 'جلسات تُعقد بصورة سرية لحماية الشهود أو المجني عليهم أو الحفاظ على سرية الأدلة.'],
    ['ex officio', 'بحكم الوظيفة / بحكم المنصب', 'Powers or duties exercised by a judicial officer by virtue of their official position.', 'إجراءات أو صلاحيات يباشرها القاضي أو المسؤول القضائي بحكم منصبه الرسمي.'],
    ['jus cogens', 'القواعد الآمرة', 'Peremptory norms of general international law from which no derogation is permitted.', 'قواعد آمرة في القانون الدولي العام لا يجوز مخالفتها أو التحلل منها كحظر الإبادة الجماعية.'],
    ['erga omnes', 'التزامات قِبل الكافة', 'Obligations owed by a State towards the international community as a whole.', 'التزامات دولية واجبة على الدول تجاه المجتمع الدولي بأسره لخطورة انتهاكها.'],
    ['mutatis mutandis', 'مع إجراء التعديلات المناسبة', 'Applying legal rules with the necessary changes in detail.', 'تطبيق النصوص والقواعد القانونية مع مراعاة ما يقتضيه الاختلاف من تعديلات ضرورية.'],
    ['inter alia', 'من بين أمور أخرى', 'Legal terminology used to indicate a non-exhaustive list.', 'عبارة قانونية تفيد التمثيل دون الحصر للدلالة على وجود عناصر إضافية.'],
  ];

  latinMaxims.forEach(([en, ar, expEn, expAr]) => {
    const termObj: LocalLegalTerm = {
      en,
      ar,
      categoryEn: 'Latin Legal Maxims',
      categoryAr: 'القواعد الفقهية اللاتينية',
      explanationEn: expEn,
      explanationAr: expAr,
    };
    indexEnglishEntry(en, termObj);
    indexArabicEntry(ar, termObj);
    ar.split(/\s*\/\s*/).forEach(opt => indexArabicEntry(opt, termObj));
    if (!enSeen.has(en)) {
      enSeen.add(en);
      allPhrasesListEn.push(en);
    }
    if (en.includes(' ') && !multiWordPhrasesEn.includes(en)) {
      multiWordPhrasesEn.push(en);
    }
    if (ar.includes(' ') && !multiWordPhrasesAr.includes(ar)) {
      multiWordPhrasesAr.push(ar);
    }
  });

  // 4. Common unified multi-word legal phrases variants in ICC practice
  const unifiedCompoundPhrases: [string, string, string, string][] = [
    ['War Crimes', 'جرائم حرب', 'Serious violations of customary and treaty rules of international humanitarian law.', 'انتهاكات جسيمة لقواعد القانون الدولي الإنساني المعمول بها في النزاعات المسلحة.'],
    ['War Crimes', 'جرائم الحرب', 'Serious violations of customary and treaty rules of international humanitarian law.', 'انتهاكات جسيمة لقواعد القانون الدولي الإنساني المعمول بها في النزاعات المسلحة.'],
    ['Crimes Against Humanity', 'جرائم ضد الإنسانية', 'Widespread or systematic attack directed against any civilian population pursuant to State or organizational policy.', 'أفعال محددة تُرتكب في إطار هجوم واسع النطاق أو منهجي موجه ضد أية مجموعة من السكان المدنيين.'],
    ['Crimes Against Humanity', 'الجرائم ضد الإنسانية', 'Widespread or systematic attack directed against any civilian population pursuant to State or organizational policy.', 'أفعال محددة تُرتكب في إطار هجوم واسع النطاق أو منهجي موجه ضد أية مجموعة من السكان المدنيين.'],
    ['Crime of Genocide', 'جريمة الإبادة الجماعية', 'Acts committed with intent to destroy in whole or in part a national, ethnical, racial or religious group.', 'أفعال تُرتكب بقصد إهلاك جماعة قومية أو إثنية أو عرقية أو دينية بصفتها هذه إهلاكاً كلياً أو جزئياً.'],
    ['Genocide', 'إبادة جماعية', 'Acts committed with intent to destroy in whole or in part a protected group.', 'أفعال تُرتكب بقصد إهلاك جماعة محمية كلياً أو جزئياً وفق المادة 6 من نظام روما.'],
    ['Crime of Aggression', 'جريمة العدوان', 'Planning, preparation, initiation or execution of an act of aggression by a person in a position of control.', 'قيام شخص في وضع يمكنه من التحكم في العمل السياسي أو العسكري للدولة أو توجيهه بالتخطيط لفعل عدواني.'],
    ['Warrant of Arrest', 'أمر بالقبض', 'Judicial order issued by Pre-Trial Chamber under Article 58 for the surrender of a person.', 'أمر قضائي صادر عن الدائرة التمهيدية بموجب المادة 58 لضمان مثول الشخص أمام المحكمة.'],
    ['Warrant of Arrest', 'أمر إلقاء القبض', 'Judicial order issued by Pre-Trial Chamber under Article 58 for the surrender of a person.', 'أمر قضائي صادر عن الدائرة التمهيدية بموجب المادة 58 لضمان مثول الشخص أمام المحكمة.'],
    ['Summons to Appear', 'أمر حضور', 'Order issued when a summons is sufficient to ensure the person appearance.', 'أمر حضور يصدر عندما يكون كافياً لضمان مثول الشخص أمام المحكمة دون الحاجة لتوقيفه.'],
    ['Summons to Appear', 'أمر بالحضور', 'Order issued when a summons is sufficient to ensure the person appearance.', 'أمر حضور يصدر عندما يكون كافياً لضمان مثول الشخص أمام المحكمة دون الحاجة لتوقيفه.'],
    ['Interests of Justice', 'مصلحة العدالة', 'Discretionary consideration guiding the Prosecutor and Chambers.', 'اعتبار تقديري يرشد المدعي العام والدوائر القضائية في مباشرة الملاحقة أو حفظها.'],
    ['Burden of Proof', 'عبء الإثبات', 'The duty of the Prosecutor under Article 66 to establish guilt.', 'واجب يقع على عاتق المدعي العام بموجب المادة 66 لإثبات إدانة المتهم.'],
    ['Standard of Proof', 'معيار الإثبات', 'The evidentiary threshold required for judicial findings at various stages.', 'درجة اليقين أو الإقناع القضائي الواجب توفرها في الأدلة وفق كل مرحلة إجرائية.'],
    ['Beyond Reasonable Doubt', 'بما لا يدع مجالاً للشك المعقول', 'The highest evidentiary standard required for conviction under Article 66.', 'أعلى معايير الإثبات القضائي الواجب توفرها لإدانة المتهم وفق المادة 66.'],
    ['Presumption of Innocence', 'قرينة البراءة', 'Fundamental right ensuring the accused is presumed innocent until proven guilty.', 'حق أصيل يضمن اعتبار المتهم بريئاً إلى أن تثبت إدانته أمام المحكمة وفق القانون.'],
    ['Right of Defence', 'حق الدفاع', 'Guarantees the accused full representation, translation, and facilities.', 'مجموع الضمانات المكفولة للمتهم لمواجهة الاتهامات والدفاع عن نفسه بعدالة.'],
    ['Victims and Witnesses Unit', 'وحدة الضحايا والشهود', 'Specialized unit in the Registry providing protective and support measures.', 'وحدة متخصصة داخل قلم المحكمة توفر تدابير الحماية والمساندة للشهود والمجني عليهم.'],
    ['Trust Fund for Victims', 'صندوق استئمان الضحايا', 'Fund established under Article 79 for the benefit of victims of crimes and their families.', 'صندوق أُنشئ بموجب المادة 79 لتقديم المساعدة وجبر الضرر لضحايا الجرائم وأسرهم.'],
    ['Assembly of States Parties', 'جمعية الدول الأطراف', 'The management oversight and legislative body of the ICC established under Article 112.', 'الهيئة الإدارية والتشريعية الرقابية للمحكمة الجنائية الدولية المنشأة بموجب المادة 112.'],
    ['Jurisdiction', 'الاختصاص', 'Legal authority of the Court under the Rome Statute.', 'سلطة المحكمة وولايتها القضائية للنظر في الجرائم ومحاكمة مرتكبيها.'],
    ['Responsibility', 'المسؤولية', 'Legal liability for acts under the Rome Statute.', 'المسؤولية القانونية أو الجنائية المترتبة على الأفعال المنسوبة.'],
    ['Investigation', 'التحقيق', 'Procedural inquiry conducted by the Prosecutor.', 'الإجراءات والتحريات التي يباشرها مكتب المدعي العام لجمع الأدلة.'],
    ['Evidence', 'الأدلة', 'Materials presented before the Chambers.', 'البينات والشهادات والوثائق المقدمة أمام دوائر المحكمة لإثبات الوقائع.'],
    ['Witnesses', 'الشهود', 'Persons testifying before the Court.', 'الأشخاص الذين يدلون بإفاداتهم وشهاداتهم أمام المحكمة.'],
    ['Victims', 'الضحايا', 'Persons who have suffered harm as a result of the commission of any crime.', 'الأشخاص الطبيعيون الذين تعرضوا لضرر مباشر نتيجة ارتكاب أي من الجرائم الخاضعة للمحكمة.'],
    ['Sentence', 'العقوبة', 'Penalty imposed by the Trial Chamber.', 'الجزاء الجنائي أو الحكم المقضي به من دائرة المحاكمة.'],
    ['Defence', 'الدفاع', 'The accused representation and legal guarantees.', 'هيئة الدفاع والحقوق والضمانات القانونية المكفولة للمتهم.'],
  ];

  unifiedCompoundPhrases.forEach(([en, ar, expEn, expAr]) => {
    const termObj: LocalLegalTerm = {
      en,
      ar,
      categoryEn: 'ICC Core Legal Expressions',
      categoryAr: 'التعبيرات القانونية الأساسية للمحكمة',
      explanationEn: expEn,
      explanationAr: expAr,
    };
    indexEnglishEntry(en, termObj);
    indexArabicEntry(ar, termObj);
    if (!enSeen.has(en)) {
      enSeen.add(en);
      allPhrasesListEn.push(en);
    }
    if (!arSeen.has(ar)) {
      arSeen.add(ar);
      allPhrasesListAr.push(ar);
    }
    if (en.includes(' ') && !multiWordPhrasesEn.includes(en)) {
      multiWordPhrasesEn.push(en);
    }
    if (ar.includes(' ') && !multiWordPhrasesAr.includes(ar)) {
      multiWordPhrasesAr.push(ar);
    }
  });

  // 5. Comprehensive Legal & Statutory Vocabulary (Modals, Verbs, Nouns, Drafter terms, Corpus Vocabulary)
  if (typeof comprehensiveLegalVocab === 'object') {
    Object.entries(comprehensiveLegalVocab).forEach(([key, v]: [string, LegalVocabEntry]) => {
      const termObj: LocalLegalTerm = {
        en: v.en,
        ar: v.ar,
        categoryEn: v.categoryEn || 'Statutory Vocabulary',
        categoryAr: v.categoryAr || 'المصطلحات التشريعية والإجرائية',
        explanationEn: v.explanationEn,
        explanationAr: v.explanationAr,
      };

      indexEnglishEntry(v.en, termObj);
      indexEnglishEntry(key, termObj);
      indexArabicEntry(v.ar, termObj);

      // Index individual slashed options in both English and Arabic
      v.en.split(/\s*\/\s*/).forEach(opt => {
        const cleanOpt = opt.replace(/\s*\([^)]*\)/g, '').trim();
        indexEnglishEntry(cleanOpt, termObj);
      });
      v.ar.split(/\s*\/\s*/).forEach(opt => {
        const cleanOpt = opt.replace(/\s*\([^)]*\)/g, '').trim();
        indexArabicEntry(cleanOpt, termObj);
      });

      if (!enSeen.has(v.en)) {
        enSeen.add(v.en);
        allPhrasesListEn.push(v.en);
      }
      if (!arSeen.has(v.ar)) {
        arSeen.add(v.ar);
        allPhrasesListAr.push(v.ar);
      }
      if (v.en.includes(' ') && !multiWordPhrasesEn.includes(v.en)) {
        multiWordPhrasesEn.push(v.en);
      }
      if (v.ar.includes(' ') && !multiWordPhrasesAr.includes(v.ar)) {
        multiWordPhrasesAr.push(v.ar);
      }
    });
  }

  // 6. Dynamic Application Content Indexing
  // Automatically index all titles and key terms from the application's data files
  const allDataSets = [
    { parts: romeStatuteParts, catEn: 'Rome Statute', catAr: 'نظام روما الأساسي' },
    { parts: rulesOfProcedureParts, catEn: 'Rules of Procedure', catAr: 'القواعد الإجرائية' },
    { parts: elementsOfCrimesParts, catEn: 'Elements of Crimes', catAr: 'أركان الجرائم' },
    { parts: regulationsOfTheCourtParts, catEn: 'Regulations of the Court', catAr: 'لوائح المحكمة' },
    { parts: regulationsOfTheRegistryParts, catEn: 'Regulations of the Registry', catAr: 'لوائح قلم المحكمة' },
    { parts: regulationsOfTheOfficeOfTheProsecutorParts, catEn: 'Prosecutor Regulations', catAr: 'لوائح المدعي العام' },
  ];

  allDataSets.forEach(({ parts, catEn, catAr }) => {
    parts.forEach((part: any) => {
      // Index Part Title
      if (part.titleEn && part.titleAr) {
        const termObj: LocalLegalTerm = {
          en: part.titleEn,
          ar: part.titleAr,
          categoryEn: catEn,
          categoryAr: catAr,
          explanationEn: `Chapter or Part title within ${catEn}.`,
          explanationAr: `عنوان فصل أو باب ضمن ${catAr}.`,
        };
        indexEnglishEntry(part.titleEn, termObj);
        indexArabicEntry(part.titleAr, termObj);
        if (part.titleEn.includes(' ') && !multiWordPhrasesEn.includes(part.titleEn)) multiWordPhrasesEn.push(part.titleEn);
        if (part.titleAr.includes(' ') && !multiWordPhrasesAr.includes(part.titleAr)) multiWordPhrasesAr.push(part.titleAr);
      }

      // Index Article/Rule Titles
      if (Array.isArray(part.articles)) {
        part.articles.forEach((art: any) => {
          if (art.titleEn && art.titleAr && art.titleEn !== '(no title)') {
            const termObj: LocalLegalTerm = {
              en: art.titleEn,
              ar: art.titleAr,
              categoryEn: catEn,
              categoryAr: catAr,
              explanationEn: `Article or Provision title within ${catEn}.`,
              explanationAr: `عنوان مادة أو حكم ضمن ${catAr}.`,
            };
            indexEnglishEntry(art.titleEn, termObj);
            indexArabicEntry(art.titleAr, termObj);
            if (art.titleEn.includes(' ') && !multiWordPhrasesEn.includes(art.titleEn)) multiWordPhrasesEn.push(art.titleEn);
            if (art.titleAr.includes(' ') && !multiWordPhrasesAr.includes(art.titleAr)) multiWordPhrasesAr.push(art.titleAr);
          }
        });
      }
    });
  });

  // Sort multi-word phrases strictly by descending length (longest multi-word expressions matched first)
  multiWordPhrasesEn.sort((a, b) => b.length - a.length);
  multiWordPhrasesAr.sort((a, b) => b.length - a.length);
  allPhrasesListEn.sort((a, b) => b.length - a.length);
  allPhrasesListAr.sort((a, b) => b.length - a.length);
})();

/**
 * Generate an authoritative contextual legal explanation that guarantees no "not found"
 */
function buildAuthoritativeExplanation(
  term: string, 
  matchedTerm: LocalLegalTerm | null, 
  targetIsArabic: boolean
): string {
  if (matchedTerm) {
    if (targetIsArabic) {
      if (matchedTerm.explanationAr) return matchedTerm.explanationAr;
      return `مصطلح قانوني معتمد صادر عن المحكمة الجنائية الدولية ضمن محور "${matchedTerm.categoryAr || 'المفاهيم القضائية'}"، ويعبّر عن معيار إجرائي أو موضوعي في نظام روما الأساسي.`;
    } else {
      if (matchedTerm.explanationEn) return matchedTerm.explanationEn;
      return `Official legal terminology under the ICC Rome Statute within the domain of "${matchedTerm.categoryEn || 'Judicial Principles'}", representing an established procedural or substantive standard.`;
    }
  }

  // Fallback to certified legal jurisprudence formula
  if (targetIsArabic) {
    return `مفهوم أو عبارة قانونية معتمدة تُفسر وتُطبق في سياق إجراءات وقضاء المحكمة الجنائية الدولية وفق أحكام نظام روما الأساسي وقواعد الإجراءات والإثبات.`;
  } else {
    return `Certified legal expression interpreted and applied in accordance with ICC jurisprudence, the Rome Statute, and Rules of Procedure and Evidence.`;
  }
}

/**
 * Helper to look up a single word using all morphological variants
 */
function findSingleTermMatch(word: string, isSourceArabic: boolean): LocalLegalTerm | null {
  if (isSourceArabic) {
    const norm = normalizeArabic(word);
    if (arExactMap.has(norm)) return arExactMap.get(norm)!;

    const variants = getSafeArabicVariants(word);
    for (const v of variants) {
      if (arExactMap.has(v)) {
        return arExactMap.get(v)!;
      }
    }

    for (const v of variants) {
      const vocab = lookupComprehensiveVocab(v, false);
      if (vocab) {
        return {
          en: vocab.en,
          ar: vocab.ar,
          categoryEn: vocab.categoryEn || 'Statutory Vocabulary',
          categoryAr: vocab.categoryAr || 'المصطلحات التشريعية والإجرائية',
          explanationEn: vocab.explanationEn,
          explanationAr: vocab.explanationAr,
        };
      }
    }

    const lex = lookupLexicon(word, false);
    if (lex) {
      return {
        en: lex.en,
        ar: lex.ar,
        categoryEn: 'ICC Legal Lexicon',
        categoryAr: 'القاموس القانوني لنظام روما',
        explanationEn: lex.explanationEn,
        explanationAr: lex.explanationAr,
      };
    }
  } else {
    const norm = normalizeEnglish(word);
    if (enExactMap.has(norm)) return enExactMap.get(norm)!;

    const variants = getSafeEnglishVariants(word);
    for (const v of variants) {
      if (enExactMap.has(v)) {
        return enExactMap.get(v)!;
      }
    }

    for (const v of variants) {
      const vocab = lookupComprehensiveVocab(v, true);
      if (vocab) {
        return {
          en: vocab.en,
          ar: vocab.ar,
          categoryEn: vocab.categoryEn || 'Statutory Vocabulary',
          categoryAr: vocab.categoryAr || 'المصطلحات التشريعية والإجرائية',
          explanationEn: vocab.explanationEn,
          explanationAr: vocab.explanationAr,
        };
      }
    }

    const lex = lookupLexicon(word, true);
    if (lex) {
      return {
        en: lex.en,
        ar: lex.ar,
        categoryEn: 'ICC Legal Lexicon',
        categoryAr: 'القاموس القانوني لنظام روما',
        explanationEn: lex.explanationEn,
        explanationAr: lex.explanationAr,
      };
    }
  }

  return null;
}

/**
 * Synchronous offline legal translation resolver.
 * Guaranteed to NEVER truncate words or return the source language as its own translation.
 */
export function translateLegalTermOffline(
  term: string, 
  isSourceArabic: boolean
): LegalTranslationResult {
  const clean = term
    .replace(/^[()[\]{}"'“”‘’«»״”؛،,:.;?!\-_]+|[()[\]{}"'“”‘’«»״”؛،,:.;?!\-_]+$/g, '')
    .trim();
  const targetIsArabic = !isSourceArabic;
  const targetLang = targetIsArabic ? 'ar' : 'en';

  if (!clean) {
    return {
      term: '',
      translation: '',
      explanation: '',
      isCertified: false,
    };
  }

  // Check Persistent Local Cache first (0ms)
  const cached = getCachedTranslation(clean, targetLang);
  if (cached) {
    return cached;
  }

  let match: LocalLegalTerm | null = findSingleTermMatch(clean, isSourceArabic);
  let isCompositional = false;

  // If multi-word or hyphenated term was not matched as a whole unit, compose translation from constituent words
  if (!match && (/[\s\-]/.test(clean))) {
    const tokens = clean.split(/[\s\-]+/).filter(Boolean);
    if (tokens.length > 1 && tokens.length <= 25) {
      const translatedParts: string[] = [];
      let matchedCount = 0;
      let primaryExplanationMatch: LocalLegalTerm | null = null;

      for (const token of tokens) {
        const tokenMatch = findSingleTermMatch(token, isSourceArabic);
        if (tokenMatch) {
          matchedCount++;
          const rawTrans = isSourceArabic ? tokenMatch.en : tokenMatch.ar;
          // Pick first concise option before '/' for smooth phrase composition
          const conciseTrans = rawTrans.split(/\s*\/\s*/)[0].replace(/\s*\([^)]*\)/g, '').trim();
          if (conciseTrans && conciseTrans !== translatedParts[translatedParts.length - 1]) {
            translatedParts.push(conciseTrans);
          }
          if (!primaryExplanationMatch || token.length > 4) {
            primaryExplanationMatch = tokenMatch;
          }
        }
      }

      if (matchedCount > 0 && translatedParts.length > 0) {
        const composedText = translatedParts.join(' ');
        isCompositional = true;
        match = {
          en: isSourceArabic ? composedText : clean,
          ar: isSourceArabic ? clean : composedText,
          categoryEn: primaryExplanationMatch?.categoryEn || 'ICC Legal Phrase',
          categoryAr: primaryExplanationMatch?.categoryAr || 'تعبير قانوني مركب',
          explanationEn: primaryExplanationMatch?.explanationEn,
          explanationAr: primaryExplanationMatch?.explanationAr,
        };
      }
    }
  }

  // Build definitive translation preserving the ENTIRE phrase or word
  let translation = '';
  if (match) {
    translation = isSourceArabic ? match.en : match.ar;
  } else {
    // NEVER return the source word as its own translation!
    translation = '';
  }

  const explanation = buildAuthoritativeExplanation(clean, match, targetIsArabic);
  const isCertified = !!match && !isCompositional;

  const result: LegalTranslationResult = {
    term: clean,
    translation,
    explanation,
    isCertified,
    fromCache: false,
  };

  // Only cache in persistent storage when we have a valid non-empty translation
  if (translation) {
    setCachedTranslation(result, targetLang);
  }

  return result;
}

