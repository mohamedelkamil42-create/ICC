import { Article, CrossReference, Part } from './types';
import { romeStatuteParts } from './romeStatuteData';
import { rulesOfProcedureParts } from './rulesOfProcedureData';
import { elementsOfCrimesParts } from './elementsOfCrimesData';
import { regulationsOfTheCourtParts } from './regulationsOfTheCourtData';
import { regulationsOfTheRegistryParts } from './regulationsOfTheRegistryData';
import { regulationsOfTheOfficeOfTheProsecutorParts } from './regulationsOfTheProsecutorData';
import glossaryDataRaw from './glossaryData.json';

export type DocumentOrigin =
  | 'rome_statute'
  | 'rules_of_procedure'
  | 'elements_of_crimes'
  | 'regulations_of_the_court'
  | 'regulations_of_the_registry'
  | 'regulations_of_the_prosecutor';

export interface LegalDocumentConfig {
  drawerId: string;
  origin: DocumentOrigin;
  titleAr: string;
  titleEn: string;
  shortTitleAr: string;
  shortTitleEn: string;
  itemLabelAr: string;
  itemLabelEn: string;
  pluralLabelAr: string;
  pluralLabelEn: string;
  parts: Part[];
  articleCount: number;
}

export const LEGAL_DOCUMENTS: LegalDocumentConfig[] = [
  {
    drawerId: '2-1',
    origin: 'rome_statute',
    titleAr: 'نظام روما الأساسي',
    titleEn: 'Rome Statute',
    shortTitleAr: 'نظام روما',
    shortTitleEn: 'Rome Statute',
    itemLabelAr: 'المادة',
    itemLabelEn: 'Article',
    pluralLabelAr: 'مادة',
    pluralLabelEn: 'Articles',
    parts: romeStatuteParts,
    articleCount: romeStatuteParts.reduce((sum, p) => sum + p.articles.length, 0),
  },
  {
    drawerId: '2-2',
    origin: 'rules_of_procedure',
    titleAr: 'قواعد الإجراءات والإثبات',
    titleEn: 'Rules of Procedure and Evidence',
    shortTitleAr: 'قواعد الإجراءات',
    shortTitleEn: 'Rules of Procedure',
    itemLabelAr: 'القاعدة',
    itemLabelEn: 'Rule',
    pluralLabelAr: 'قاعدة',
    pluralLabelEn: 'Rules',
    parts: rulesOfProcedureParts,
    articleCount: rulesOfProcedureParts.reduce((sum, p) => sum + p.articles.length, 0),
  },
  {
    drawerId: '2-3',
    origin: 'elements_of_crimes',
    titleAr: 'أركان الجرائم',
    titleEn: 'Elements of Crimes',
    shortTitleAr: 'أركان الجرائم',
    shortTitleEn: 'Elements of Crimes',
    itemLabelAr: 'المادة',
    itemLabelEn: 'Article',
    pluralLabelAr: 'بند',
    pluralLabelEn: 'Provisions',
    parts: elementsOfCrimesParts,
    articleCount: elementsOfCrimesParts.reduce((sum, p) => sum + p.articles.length, 0),
  },
  {
    drawerId: '2-4',
    origin: 'regulations_of_the_court',
    titleAr: 'لوائح المحكمة',
    titleEn: 'Regulations of the Court',
    shortTitleAr: 'لوائح المحكمة',
    shortTitleEn: 'Regulations of the Court',
    itemLabelAr: 'اللائحة',
    itemLabelEn: 'Regulation',
    pluralLabelAr: 'لائحة',
    pluralLabelEn: 'Regulations',
    parts: regulationsOfTheCourtParts,
    articleCount: regulationsOfTheCourtParts.reduce((sum, p) => sum + p.articles.length, 0),
  },
  {
    drawerId: '2-5',
    origin: 'regulations_of_the_registry',
    titleAr: 'لوائح قلم المحكمة',
    titleEn: 'Regulations of the Registry',
    shortTitleAr: 'لوائح قلم المحكمة',
    shortTitleEn: 'Regulations of the Registry',
    itemLabelAr: 'اللائحة',
    itemLabelEn: 'Regulation',
    pluralLabelAr: 'لائحة',
    pluralLabelEn: 'Regulations',
    parts: regulationsOfTheRegistryParts,
    articleCount: regulationsOfTheRegistryParts.reduce((sum, p) => sum + p.articles.length, 0),
  },
  {
    drawerId: '2-6',
    origin: 'regulations_of_the_prosecutor',
    titleAr: 'لائحة مكتب المدعي العام',
    titleEn: 'Regulations of the Office of the Prosecutor',
    shortTitleAr: 'لائحة المدعي العام',
    shortTitleEn: 'Regulations of OTP',
    itemLabelAr: 'اللائحة',
    itemLabelEn: 'Regulation',
    pluralLabelAr: 'لائحة',
    pluralLabelEn: 'Regulations',
    parts: regulationsOfTheOfficeOfTheProsecutorParts,
    articleCount: regulationsOfTheOfficeOfTheProsecutorParts.reduce((sum, p) => sum + p.articles.length, 0),
  },
];

const docsByDrawerId = new Map<string, LegalDocumentConfig>();
const articlesById = new Map<string, { doc: LegalDocumentConfig; part: Part; article: Article }>();
const articleLookupByDocAndNumber = new Map<string, Map<string, Article>>();

function normalizeProvisionNumber(num: string): string {
  return num
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/مكررا|مكرراً|مكرر/g, 'bis')
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
}

for (const doc of LEGAL_DOCUMENTS) {
  docsByDrawerId.set(doc.drawerId, doc);
  const numMap = new Map<string, Article>();

  for (const part of doc.parts) {
    for (const article of part.articles) {
      articlesById.set(article.id, { doc, part, article });
      const rawKey = article.number.trim().toLowerCase();
      const normKey = normalizeProvisionNumber(article.number);
      if (!numMap.has(rawKey)) numMap.set(rawKey, article);
      if (!numMap.has(normKey)) numMap.set(normKey, article);
      // Also index stripped numeric prefix for forms like "8 bis" -> "8 bis"
      const compactKey = normKey.replace(/\s+/g, '');
      if (!numMap.has(compactKey)) numMap.set(compactKey, article);
    }
  }
  articleLookupByDocAndNumber.set(doc.drawerId, numMap);
}

export const TOTAL_STATUTORY_PROVISIONS = LEGAL_DOCUMENTS.reduce((sum, d) => sum + d.articleCount, 0);

export const TOTAL_GLOSSARY_TERMS = Array.isArray(glossaryDataRaw)
  ? (glossaryDataRaw as Array<{ terms?: unknown[] }>).reduce(
      (sum, cat) => sum + (Array.isArray(cat.terms) ? cat.terms.length : 0),
      0
    )
  : 0;

export function getDocumentByDrawerId(drawerId: string): LegalDocumentConfig {
  return docsByDrawerId.get(drawerId) || LEGAL_DOCUMENTS[0];
}

export function getDrawerIdForArticle(articleId: string): string {
  const found = articlesById.get(articleId);
  if (found) return found.doc.drawerId;
  if (articleId.startsWith('regr-')) return '2-5';
  if (articleId.startsWith('ropt-')) return '2-6';
  if (articleId.startsWith('rule-')) return '2-2';
  if (articleId.startsWith('eoc-')) return '2-3';
  if (articleId.startsWith('reg-')) return '2-4';
  return '2-1';
}

export function findArticleById(articleId: string) {
  return articlesById.get(articleId) || null;
}

export function findArticleByNumber(drawerId: string, queryNum: string): Article | null {
  const numMap = articleLookupByDocAndNumber.get(drawerId);
  if (!numMap) return null;

  const cleaned = queryNum
    .trim()
    .replace(/^(المادة|مادة|القاعدة|قاعدة|اللائحة|لائحة|article|art\.?|rule|regulation|reg\.?)\s*/i, '')
    .trim();

  if (!cleaned) return null;

  const exact = numMap.get(cleaned.toLowerCase());
  if (exact) return exact;

  const norm = normalizeProvisionNumber(cleaned);
  return numMap.get(norm) || numMap.get(norm.replace(/\s+/g, '')) || null;
}

/**
 * Extracts verified cross-references to ICC Articles, Rules, and Regulations
 * mentioned inside an article's Arabic or English text.
 */
export function extractCrossReferences(
  contentAr: string,
  contentEn: string,
  currentDrawerId: string,
  currentArticleId: string
): CrossReference[] {
  const seen = new Set<string>();
  const refs: CrossReference[] = [];

  const addRef = (targetDrawerId: string, rawNumber: string) => {
    const art = findArticleByNumber(targetDrawerId, rawNumber);
    if (!art || art.id === currentArticleId || seen.has(art.id)) return;
    seen.add(art.id);
    const doc = getDocumentByDrawerId(targetDrawerId);
    refs.push({
      drawerId: doc.drawerId,
      articleId: art.id,
      number: art.number,
      labelAr: `${doc.itemLabelAr} ${art.number}`,
      labelEn: `${doc.itemLabelEn} ${art.number}`,
      titleAr: art.titleAr,
      titleEn: art.titleEn,
      documentTitleAr: doc.shortTitleAr,
      documentTitleEn: doc.shortTitleEn,
    });
  };

  // Match English & Arabic Rome Statute Article references
  const enArticleRegex = /\barticles?\s+(\d+(?:\s*(?:bis|ter|quater))?)/gi;
  let m: RegExpExecArray | null;
  while ((m = enArticleRegex.exec(contentEn)) !== null) {
    addRef('2-1', m[1]);
  }

  const arArticleRegex = /(?:المادة|المادتين|المواد)\s+([0-9٠-٩]+(?:\s*(?:مكرراً|مكررا|مكرر))?)/g;
  while ((m = arArticleRegex.exec(contentAr)) !== null) {
    addRef('2-1', m[1]);
  }

  // Match Rules of Procedure references
  const enRuleRegex = /\brules?\s+(\d+(?:\s*(?:bis|ter))?)/gi;
  while ((m = enRuleRegex.exec(contentEn)) !== null) {
    addRef('2-2', m[1]);
  }

  const arRuleRegex = /(?:القاعدة|القاعدتين|القواعد)\s+([0-9٠-٩]+)/g;
  while ((m = arRuleRegex.exec(contentAr)) !== null) {
    addRef('2-2', m[1]);
  }

  // Match Regulations references (resolve to current regulation document if inside 2-4/2-5/2-6, else 2-4)
  const regTargetDrawer =
    currentDrawerId === '2-5' || currentDrawerId === '2-6' ? currentDrawerId : '2-4';

  const enRegRegex = /\bregulations?\s+(\d+(?:\s*(?:bis|ter))?)/gi;
  while ((m = enRegRegex.exec(contentEn)) !== null) {
    addRef(regTargetDrawer, m[1]);
  }

  const arRegRegex = /(?:اللائحة|اللائحتين|اللوائح)\s+([0-9٠-٩]+)/g;
  while ((m = arRegRegex.exec(contentAr)) !== null) {
    addRef(regTargetDrawer, m[1]);
  }

  return refs.slice(0, 12);
}
