import { DrawerItem, Language } from './types';
import { getDocumentByDrawerId, DocumentOrigin } from './legalDocuments';

export type SearchCategory = 'all' | DocumentOrigin | 'terms';

export interface SearchResultItem {
  id: string;
  title: string;
  type: 'document' | 'folder' | 'glossary_term' | 'statute_article';
  subtitle?: string;
  documentBadge?: string;
  documentOrigin?: DocumentOrigin | 'glossary' | 'general';
  contentSnippet?: string;
  drawerIdToOpen?: string;
  statuteArtId?: string;
  matchedQuery?: string;
  parentPath?: DrawerItem[];
  enTerm?: string;
  arTerm?: string;
  sectionId?: string;
  score?: number;
}

export interface SearchIndexItem {
  id: string;
  title: string;
  normalizedTitle: string;
  searchableText: string;
  normalizedText: string;
  statuteNumberNorm?: string;
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
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
    .trim();
}

function extractContextSnippet(fullText: string, query: string, maxLength = 140): string {
  if (!fullText) return '';
  const lower = fullText.toLowerCase();
  const qLower = query.toLowerCase();
  let idx = lower.indexOf(qLower);

  if (idx === -1) {
    // Map normalized match back to approximate character offset in original string
    const normQ = normalizeSearchText(query);
    if (normQ) {
      // Build lightweight index mapping ignoring diacritics/tatweel
      let normStr = '';
      const mapIdx: number[] = [];
      for (let i = 0; i < fullText.length; i++) {
        const ch = fullText[i];
        if (/[\u064B-\u065F\u0670\u0640]/.test(ch)) continue;
        normStr += normalizeSearchText(ch);
        mapIdx.push(i);
      }
      const normPos = normStr.indexOf(normQ);
      if (normPos !== -1 && mapIdx[normPos] !== undefined) {
        idx = mapIdx[normPos];
      }
    }
  }

  if (idx === -1) {
    return fullText.slice(0, maxLength) + (fullText.length > maxLength ? '...' : '');
  }

  const start = Math.max(0, idx - 45);
  const end = Math.min(fullText.length, idx + query.length + 80);
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
          const title = isAr ? term.ar : term.en;
          index.push({
            id: `term-${item.id}-${term.en}`,
            title,
            normalizedTitle: normalizeSearchText(`${term.ar} ${term.en}`),
            searchableText: rawSearchText,
            normalizedText: normalizeSearchText(rawSearchText),
            type: 'glossary_term',
            item: {
              ...term,
              sectionId: item.id,
              docOrigin: 'glossary',
              documentBadge: isAr ? 'قاموس المصطلحات' : 'Glossary',
            },
            parentPath: path,
          });
        }
      } else if (item.type === 'statute') {
        const doc = getDocumentByDrawerId(item.id);
        const docBadge = isAr ? doc.shortTitleAr : doc.shortTitleEn;
        const itemLabel = isAr ? doc.itemLabelAr : doc.itemLabelEn;

        for (const part of doc.parts) {
          const partTitle = isAr ? `${part.labelAr} - ${part.titleAr}` : `${part.labelEn} - ${part.titleEn}`;

          for (const art of part.articles) {
            const artTitle = isAr ? art.titleAr : art.titleEn;
            const fullTitle = `${itemLabel} ${art.number}: ${artTitle}`;
            const rawSearchText = `${doc.titleAr} ${doc.titleEn} ${doc.itemLabelAr} ${doc.itemLabelEn} ${art.number} ${art.titleAr} ${art.titleEn} ${art.contentAr} ${art.contentEn} ${part.titleAr} ${part.titleEn}`.toLowerCase();

            index.push({
              id: `${item.id}-${art.id}`,
              title: fullTitle,
              normalizedTitle: normalizeSearchText(`${doc.itemLabelAr} ${art.number} ${doc.itemLabelEn} ${art.number} ${art.titleAr} ${art.titleEn}`),
              searchableText: rawSearchText,
              normalizedText: normalizeSearchText(rawSearchText),
              statuteNumberNorm: normalizeSearchText(art.number).replace(/مكررا|مكرر/g, 'bis'),
              type: 'statute_article',
              item: {
                ...item,
                drawerIdToOpen: item.id,
                statuteArtId: art.id,
                statuteNumber: art.number,
                docOrigin: doc.origin,
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
          normalizedTitle: normalizeSearchText(item.title),
          searchableText: rawSearchText,
          normalizedText: normalizeSearchText(rawSearchText),
          type: item.type === 'folder' ? 'folder' : 'document',
          item: {
            ...item,
            drawerIdToOpen: item.id,
            docOrigin: 'general',
            documentBadge: isAr ? 'وثيقة عامة' : 'General Document',
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

/**
 * Parses direct provision queries like "25", "المادة 25", "Article 8 bis", "Rule 85", "اللائحة 52"
 */
function parseDirectProvisionQuery(qNorm: string): { number: string; preferredOrigin?: DocumentOrigin } | null {
  const numOnly = qNorm.match(/^(\d+(?:\s*(?:bis|ter|quater|مكررا|مكرر))?)$/);
  if (numOnly) {
    return { number: numOnly[1].replace(/مكررا|مكرر/g, 'bis') };
  }

  const prefixed = qNorm.match(
    /^(الماده|ماده|article|art\.?|القاعده|قاعده|rule|اللائحه|لائحه|regulation|reg\.?)\s+(\d+(?:\s*(?:bis|ter|quater|مكررا|مكرر))?)$/
  );
  if (prefixed) {
    const prefix = prefixed[1];
    const num = prefixed[2].replace(/مكررا|مكرر/g, 'bis');
    let preferredOrigin: DocumentOrigin | undefined;
    if (prefix.startsWith('القاعد') || prefix.startsWith('قاعد') || prefix === 'rule') {
      preferredOrigin = 'rules_of_procedure';
    } else if (prefix.startsWith('اللائح') || prefix.startsWith('لائح') || prefix.startsWith('reg')) {
      preferredOrigin = 'regulations_of_the_court';
    } else {
      preferredOrigin = 'rome_statute';
    }
    return { number: num, preferredOrigin };
  }

  return null;
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
  const directProvision = parseDirectProvisionQuery(qNorm);

  const results: SearchResultItem[] = [];
  const isAr = lang === 'ar';

  for (const entry of index) {
    const origin = entry.item?.docOrigin;

    if (category !== 'all') {
      if (category === 'terms') {
        if (entry.type !== 'glossary_term') continue;
      } else if (origin !== category) {
        continue;
      }
    }

    const isExactNumberMatch =
      entry.type === 'statute_article' &&
      directProvision !== null &&
      entry.statuteNumberNorm === directProvision.number;

    const matches =
      isExactNumberMatch ||
      entry.searchableText.includes(q) ||
      (qNorm.length >= 2 && entry.normalizedText.includes(qNorm));

    if (!matches) continue;

    // Compute clean relevance score
    let score = 10;
    if (isExactNumberMatch) {
      score = directProvision?.preferredOrigin === origin ? 200 : 150;
    } else if (entry.normalizedTitle === qNorm) {
      score = 130;
    } else if (entry.normalizedTitle.includes(qNorm) || entry.title.toLowerCase().includes(q)) {
      score = 90;
    } else if (entry.type === 'glossary_term') {
      score = 60;
    }

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
        score,
      });
    } else if (entry.type === 'statute_article') {
      const preferredContent = isAr ? entry.item.contentAr : entry.item.contentEn;
      const alternativeContent = isAr ? entry.item.contentEn : entry.item.contentAr;
      const prefMatches =
        preferredContent?.toLowerCase().includes(q) ||
        normalizeSearchText(preferredContent || '').includes(qNorm);
      const altMatches =
        alternativeContent?.toLowerCase().includes(q) ||
        normalizeSearchText(alternativeContent || '').includes(qNorm);

      const targetContent = prefMatches ? preferredContent : altMatches ? alternativeContent : preferredContent;
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
        score,
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
        score,
      });
    }
  }

  results.sort((a, b) => (b.score || 0) - (a.score || 0));
  return results.slice(0, 120);
}
