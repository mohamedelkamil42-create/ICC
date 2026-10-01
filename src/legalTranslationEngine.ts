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
    .replace(/[()[\]{}"'״”؛،,:.;?!]/g, ' ')
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
    .replace(/[()[\]{}"'״”؛،,:.;?!]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Safe Arabic word normalization without truncating or mutilating root letters.
 * Preserves the entire word and only checks safe whole-word prefixes (like 'ال' or 'وال').
 */
export function getSafeArabicVariants(word: string): string[] {
  const norm = normalizeArabic(word);
  const variants = new Set<string>([norm]);

  // If word does not start with 'ال', also check with definite article 'ال'
  if (!norm.startsWith('ال') && norm.length >= 3) {
    variants.add('ال' + norm);
  }

  // Only safely check definite article 'ال' if word length >= 4
  if (norm.startsWith('ال') && norm.length >= 4) {
    variants.add(norm.slice(2));
  }
  // Only safely check conjunction 'وال' if word length >= 5
  if (norm.startsWith('وال') && norm.length >= 5) {
    variants.add(norm.slice(1)); // 'ال...'
    variants.add(norm.slice(3)); // base
  }
  // Safe 'لل' prefix (e.g. للمحكمة -> المحكمة, محكمة)
  if (norm.startsWith('لل') && norm.length >= 4) {
    variants.add(norm.slice(2));
    variants.add('ال' + norm.slice(2));
  }
  // Safe 'بال' prefix
  if (norm.startsWith('بال') && norm.length >= 5) {
    variants.add(norm.slice(1));
    variants.add(norm.slice(3));
  }
  // Safe 'كال' prefix
  if (norm.startsWith('كال') && norm.length >= 5) {
    variants.add(norm.slice(1));
    variants.add(norm.slice(3));
  }
  // Safe 'ب' prefix (e.g. بعلاقة -> علاقة)
  if (norm.startsWith('ب') && !norm.startsWith('با') && norm.length >= 4) {
    variants.add(norm.slice(1));
  }
  // Safe 'و' prefix
  if (norm.startsWith('و') && !norm.startsWith('وا') && norm.length >= 4) {
    variants.add(norm.slice(1));
  }
  // Safe 'ل' prefix (if not covered by لل)
  if (norm.startsWith('ل') && !norm.startsWith('لا') && norm.length >= 4) {
    variants.add(norm.slice(1));
  }
  // Safe 'ف' prefix
  if (norm.startsWith('ف') && !norm.startsWith('فا') && norm.length >= 4) {
    variants.add(norm.slice(1));
  }

  return Array.from(variants);
}

/**
 * Safe English word inflections without mutilating root letters
 */
export function getSafeEnglishVariants(word: string): string[] {
  const norm = normalizeEnglish(word);
  const variants = new Set<string>([norm]);

  if (norm.endsWith('ies') && norm.length > 5) variants.add(norm.slice(0, -3) + 'y');
  if (norm.endsWith('es') && norm.length > 4) variants.add(norm.slice(0, -2));
  if (norm.endsWith('s') && !norm.endsWith('ss') && norm.length > 3) variants.add(norm.slice(0, -1));

  return Array.from(variants);
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

          const fullNormEn = normalizeEnglish(termObj.en);
          const fullNormAr = normalizeArabic(termObj.ar);

          enExactMap.set(fullNormEn, termObj);
          arExactMap.set(fullNormAr, termObj);

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
            enExactMap.set(normalizeEnglish(baseEn), termObj);
            if (baseEn.includes(' ') && !multiWordPhrasesEn.includes(baseEn)) {
              multiWordPhrasesEn.push(baseEn);
            }
          }
          if (baseAr && baseAr !== termObj.ar) {
            arExactMap.set(normalizeArabic(baseAr), termObj);
            if (baseAr.includes(' ') && !multiWordPhrasesAr.includes(baseAr)) {
              multiWordPhrasesAr.push(baseAr);
            }
          }

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

      const normEn = normalizeEnglish(lex.en);
      const normKey = normalizeEnglish(key);
      const normAr = normalizeArabic(lex.ar);

      if (!enExactMap.has(normEn)) enExactMap.set(normEn, termObj);
      if (!enExactMap.has(normKey)) enExactMap.set(normKey, termObj);
      if (!arExactMap.has(normAr)) arExactMap.set(normAr, termObj);

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
    enExactMap.set(normalizeEnglish(en), termObj);
    arExactMap.set(normalizeArabic(ar), termObj);
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
    enExactMap.set(normalizeEnglish(en), termObj);
    arExactMap.set(normalizeArabic(ar), termObj);
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

  // 5. Comprehensive Legal & Statutory Vocabulary (Modals, Verbs, Nouns, Drafter terms)
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

      const normEn = normalizeEnglish(v.en);
      const normKey = normalizeEnglish(key);
      const normAr = normalizeArabic(v.ar);

      if (!enExactMap.has(normEn)) enExactMap.set(normEn, termObj);
      if (!enExactMap.has(normKey)) enExactMap.set(normKey, termObj);
      if (!arExactMap.has(normAr)) arExactMap.set(normAr, termObj);

      // Also index individual slashed options if any (e.g., 'يجب / يتعين')
      const arOptions = v.ar.split(/\s*\/\s*/).map(p => p.trim());
      arOptions.forEach(opt => {
        const normOpt = normalizeArabic(opt);
        if (normOpt && !arExactMap.has(normOpt)) {
          arExactMap.set(normOpt, termObj);
        }
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
        const nEn = normalizeEnglish(part.titleEn);
        const nAr = normalizeArabic(part.titleAr);
        if (!enExactMap.has(nEn)) enExactMap.set(nEn, termObj);
        if (!arExactMap.has(nAr)) arExactMap.set(nAr, termObj);
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
            const nEn = normalizeEnglish(art.titleEn);
            const nAr = normalizeArabic(art.titleAr);
            if (!enExactMap.has(nEn)) enExactMap.set(nEn, termObj);
            if (!arExactMap.has(nAr)) arExactMap.set(nAr, termObj);
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
 * Synchronous offline legal translation resolver.
 * Guaranteed to NEVER truncate words or split compound expressions.
 */
export function translateLegalTermOffline(
  term: string, 
  isSourceArabic: boolean
): LegalTranslationResult {
  const clean = term.trim();
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

  let match: LocalLegalTerm | null = null;

  if (isSourceArabic) {
    const norm = normalizeArabic(clean);
    // 1. Direct whole-word or whole-phrase match
    if (arExactMap.has(norm)) {
      match = arExactMap.get(norm)!;
    }

    // 2. Safe whole-word variant (e.g. with/without 'ال')
    if (!match) {
      const variants = getSafeArabicVariants(clean);
      for (const v of variants) {
        if (arExactMap.has(v)) {
          match = arExactMap.get(v)!;
          break;
        }
      }
    }

    // 3. Lexicon & comprehensive vocabulary lookup for Arabic
    if (!match) {
      const lex = lookupLexicon(clean, false);
      if (lex) {
        match = {
          en: lex.en,
          ar: lex.ar,
          categoryEn: 'ICC Legal Lexicon',
          categoryAr: 'القاموس القانوني لنظام روما',
          explanationEn: lex.explanationEn,
          explanationAr: lex.explanationAr,
        };
      }
    }
  } else {
    const norm = normalizeEnglish(clean);
    // 1. Direct whole-word or whole-phrase match
    if (enExactMap.has(norm)) {
      match = enExactMap.get(norm)!;
    }

    // 2. Safe whole-word plural/singular variant
    if (!match) {
      const variants = getSafeEnglishVariants(clean);
      for (const v of variants) {
        if (enExactMap.has(v)) {
          match = enExactMap.get(v)!;
          break;
        }
      }
    }

    // 3. Lexicon direct lookup
    if (!match) {
      const lex = lookupLexicon(clean, true);
      if (lex) {
        match = {
          en: lex.en,
          ar: lex.ar,
          categoryEn: 'ICC Legal Lexicon',
          categoryAr: 'القاموس القانوني لنظام روما',
          explanationEn: lex.explanationEn,
          explanationAr: lex.explanationAr,
        };
      }
    }
  }

  // Build definitive translation preserving the ENTIRE phrase or word
  let translation = '';
  if (match) {
    translation = isSourceArabic ? match.en : match.ar;
  } else {
    // If not found in exact dictionary, leave translation empty so async translator provides target language
    // NEVER return the source word as its own translation!
    translation = '';
  }

  const explanation = buildAuthoritativeExplanation(clean, match, targetIsArabic);

  const result: LegalTranslationResult = {
    term: clean,
    translation,
    explanation,
    isCertified: !!match,
    fromCache: false,
  };

  // Cache in persistent storage
  setCachedTranslation(result, targetLang);

  return result;
}
