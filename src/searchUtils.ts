import { DrawerItem, Language } from './types';
import { romeStatuteParts } from './romeStatuteData';
import { rulesOfProcedureParts } from './rulesOfProcedureData';
import { elementsOfCrimesParts } from './elementsOfCrimesData';
import { regulationsOfTheCourtParts } from './regulationsOfTheCourtData';
import { regulationsOfTheOfficeOfTheProsecutorParts } from './regulationsOfTheProsecutorData';

export type SearchCategory = 'all' | 'rome_statute' | 'rules_of_procedure' | 'elements_of_crimes' | 'regulations_of_the_court' | 'regulations_of_the_prosecutor' | 'terms';

export interface SearchResultItem {
  id: string;
  title: string;
  type: 'document' | 'folder' | 'glossary_term' | 'statute_article';
  subtitle?: string;
  documentBadge?: string;
  documentOrigin?: 'rome_statute' | 'rules_of_procedure' | 'elements_of_crimes' | 'regulations_of_the_court' | 'regulations_of_the_prosecutor' | 'glossary' | 'general';
  contentSnippet?: string;
  drawerIdToOpen?: string;
  statuteArtId?: string;
  matchedQuery?: string;
  parentPath?: DrawerItem[];
  enTerm?: string;
  arTerm?: string;
  sectionId?: string;
}

export interface SearchIndexItem {
  id: string;
  title: string;
  searchableText: string;
  normalizedText: string;
  type: 'document' | 'folder' | 'glossary_term' | 'statute_article';
  item: any;
  parentPath: DrawerItem[];
}

export function normalizeSearchText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '') // remove Arabic diacritics & tatweel
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .trim();
}

function extractContextSnippet(fullText: string, query: string, maxLength = 130): string {
  if (!fullText) return '';
  const lower = fullText.toLowerCase();
  const qLower = query.toLowerCase();
  let idx = lower.indexOf(qLower);

  if (idx === -1) {
    const normFull = normalizeSearchText(fullText);
    const normQ = normalizeSearchText(query);
    const normIdx = normFull.indexOf(normQ);
    idx = normIdx !== -1 ? normIdx : -1;
  }

  if (idx === -1) {
    return fullText.slice(0, maxLength) + (fullText.length > maxLength ? '...' : '');
  }

  const start = Math.max(0, idx - 40);
  const end = Math.min(fullText.length, idx + query.length + 75);
  let snippet = fullText.slice(start, end).replace(/\s+/g, ' ').trim();
  if (start > 0) snippet = '...' + snippet;
  if (end < fullText.length) snippet = snippet + '...';
  return snippet;
}

export function buildSearchIndex(data: DrawerItem[], lang: Language): SearchIndexItem[] {
  const index: SearchIndexItem[] = [];
  const isAr = lang === 'ar';

  function traverse(items: DrawerItem[], path: DrawerItem[]) {
    for (const item of items) {
      if (item.type === 'glossary' && item.terms) {
        for (const term of item.terms) {
          const rawSearchText = `${term.en} ${term.ar}`.toLowerCase();
          index.push({
            id: `term-${term.en}`,
            title: isAr ? term.ar : term.en,
            searchableText: rawSearchText,
            normalizedText: normalizeSearchText(rawSearchText),
            type: 'glossary_term',
            item: { 
              ...term, 
              sectionId: item.id,
              docOrigin: 'glossary',
              documentBadge: isAr ? 'قاموس المصطلحات' : 'Glossary'
            },
            parentPath: path,
          });
        }
      } else if (item.type === 'statute') {
        const isRules = item.id === '2-2';
        const isElements = item.id === '2-3';
        const isRegulations = item.id === '2-4';
        const isProsecutor = item.id === '2-6';
        const statuteData = isRules 
          ? rulesOfProcedureParts 
          : (isElements 
              ? elementsOfCrimesParts 
              : (isRegulations 
                  ? regulationsOfTheCourtParts 
                  : (isProsecutor 
                      ? regulationsOfTheOfficeOfTheProsecutorParts 
                      : romeStatuteParts)));
        const docBadge = isRules 
          ? (isAr ? 'قواعد الإجراءات والإثبات' : 'Rules of Procedure') 
          : (isElements 
              ? (isAr ? 'أركان الجرائم' : 'Elements of Crimes') 
              : (isRegulations 
                  ? (isAr ? 'لوائح المحكمة' : 'Regulations of the Court')
                  : (isProsecutor 
                      ? (isAr ? 'لائحة مكتب المدعي العام' : 'Regulations of the OTP') 
                      : (isAr ? 'نظام روما الأساسي' : 'Rome Statute'))));
        const docOrigin = isRules 
          ? 'rules_of_procedure' 
          : (isElements 
              ? 'elements_of_crimes' 
              : (isRegulations 
                  ? 'regulations_of_the_court' 
                  : (isProsecutor 
                      ? 'regulations_of_the_prosecutor' 
                      : 'rome_statute')));
        const itemLabel = isRules 
          ? (isAr ? 'القاعدة' : 'Rule') 
          : (isElements 
              ? (isAr ? 'المادة' : 'Article') 
              : (isRegulations 
                  ? (isAr ? 'اللائحة' : 'Regulation') 
                  : (isProsecutor 
                      ? (isAr ? 'البند' : 'Regulation') 
                      : (isAr ? 'المادة' : 'Article'))));

        for (const part of statuteData) {
          const partTitle = isAr ? `${part.labelAr} - ${part.titleAr}` : `${part.labelEn} - ${part.titleEn}`;

          for (const art of part.articles) {
            const artTitle = isAr ? art.titleAr : art.titleEn;
            const fullTitle = `${itemLabel} ${art.number}: ${artTitle}`;

            const rawSearchText = `${docBadge} ${itemLabel} ${art.number} ${art.titleAr} ${art.titleEn} ${art.contentAr} ${art.contentEn} ${part.titleAr} ${part.titleEn}`.toLowerCase();
            index.push({
              id: `${item.id}-${art.id}`,
              title: fullTitle,
              searchableText: rawSearchText,
              normalizedText: normalizeSearchText(rawSearchText),
              type: 'statute_article',
              item: {
                ...item,
                drawerIdToOpen: item.id,
                statuteArtId: art.id,
                statuteNumber: art.number,
                docOrigin,
                docBadge,
                partTitle,
                titleAr: art.titleAr,
                titleEn: art.titleEn,
                contentAr: art.contentAr,
                contentEn: art.contentEn,
              },
              parentPath: path,
            });
          }
        }
      } else {
        const rawSearchText = `${item.title} ${item.content || ''}`.toLowerCase();
        index.push({
          id: item.id,
          title: item.title,
          searchableText: rawSearchText,
          normalizedText: normalizeSearchText(rawSearchText),
          type: item.type === 'folder' ? 'folder' : 'document',
          item: {
            ...item,
            drawerIdToOpen: item.id,
            docOrigin: 'general',
            documentBadge: isAr ? 'وثيقة عامة' : 'General Document'
          },
          parentPath: path,
        });

        if (item.children) {
          traverse(item.children, [...path, item]);
        }
      }
    }
  }

  traverse(data, []);
  return index;
}

export function performSmartSearch(
  index: SearchIndexItem[],
  query: string,
  category: SearchCategory = 'all',
  lang: Language = 'ar'
): SearchResultItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const qNorm = normalizeSearchText(q);

  const results: SearchResultItem[] = [];
  const isAr = lang === 'ar';
  
  for (const entry of index) {
    const origin = entry.item?.docOrigin;

    // Filter by requested category
    if (category === 'rome_statute' && origin !== 'rome_statute') continue;
    if (category === 'rules_of_procedure' && origin !== 'rules_of_procedure') continue;
    if (category === 'elements_of_crimes' && origin !== 'elements_of_crimes') continue;
    if (category === 'regulations_of_the_court' && origin !== 'regulations_of_the_court') continue;
    if (category === 'regulations_of_the_prosecutor' && origin !== 'regulations_of_the_prosecutor') continue;
    if (category === 'terms' && entry.type !== 'glossary_term') continue;

    const matches = entry.searchableText.includes(q) || (qNorm.length >= 2 && entry.normalizedText.includes(qNorm));
    if (matches) {
      if (entry.type === 'glossary_term') {
        results.push({
          id: entry.id,
          title: entry.title,
          type: 'glossary_term',
          subtitle: isAr ? 'مصطلح قانوني معتمد' : 'Certified Legal Term',
          documentBadge: isAr ? 'القاموس' : 'Glossary',
          documentOrigin: 'glossary',
          enTerm: entry.item.en,
          arTerm: entry.item.ar,
          sectionId: entry.item.sectionId,
          drawerIdToOpen: entry.item.sectionId,
          matchedQuery: q,
          parentPath: entry.parentPath,
        });
      } else if (entry.type === 'statute_article') {
        // Extract context snippet from content in current language, or fallback to the other
        const preferredContent = isAr ? entry.item.contentAr : entry.item.contentEn;
        const alternativeContent = isAr ? entry.item.contentEn : entry.item.contentAr;
        const targetContent = preferredContent?.toLowerCase().includes(q) 
          ? preferredContent 
          : (alternativeContent?.toLowerCase().includes(q) ? alternativeContent : preferredContent);

        const snippet = extractContextSnippet(targetContent || '', q);

        results.push({
          id: entry.id,
          title: entry.title,
          type: 'statute_article',
          subtitle: entry.item.partTitle,
          documentBadge: entry.item.docBadge,
          documentOrigin: entry.item.docOrigin,
          contentSnippet: snippet,
          drawerIdToOpen: entry.item.drawerIdToOpen,
          statuteArtId: entry.item.statuteArtId,
          matchedQuery: q,
          parentPath: entry.parentPath,
        });
      } else {
        const snippet = extractContextSnippet(entry.item.content || '', q);
        results.push({
          id: entry.id,
          title: entry.title,
          type: entry.type as 'document' | 'folder',
          documentBadge: entry.item.documentBadge,
          documentOrigin: 'general',
          contentSnippet: snippet,
          drawerIdToOpen: entry.item.id,
          matchedQuery: q,
          parentPath: entry.parentPath,
        });
      }
    }
  }

  // Prioritize exact term/title matches first, then statute articles, then general documents
  results.sort((a, b) => {
    const aTitleMatch = a.title.toLowerCase().includes(q);
    const bTitleMatch = b.title.toLowerCase().includes(q);
    if (aTitleMatch && !bTitleMatch) return -1;
    if (!aTitleMatch && bTitleMatch) return 1;
    return 0;
  });

  return results.slice(0, 100);
}
