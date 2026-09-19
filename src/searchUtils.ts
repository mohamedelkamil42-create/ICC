import { DrawerItem } from './types';
import glossaryDataRaw from './glossaryData.json';

const glossaryData = glossaryDataRaw as any[];

export type SearchCategory = 'all' | 'documents' | 'terms';

export interface SearchResultItem {
  id: string;
  type: 'document' | 'folder' | 'glossary_term';
  title: string;
  subtitle?: string;
  contentSnippet?: string;
  enTerm?: string;
  arTerm?: string;
  parentPath?: DrawerItem[];
  drawerIdToOpen?: string;
  sectionId?: string;
  score: number;
}

/**
 * Normalizes text for smart matching (Arabic letters, tashkeel, English lowercase)
 */
export function normalizeSearchText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '') // Remove tashkeel/diacritics
    .replace(/[إأآا]/g, 'ا')               // Normalize Alefs
    .replace(/ة/g, 'ه')                    // Normalize Teh Marbuta
    .replace(/ى/g, 'ي')                    // Normalize Alef Maksura
    .replace(/ئ/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/[^\w\s\u0600-\u06FF]/gi, ' ')// Replace punctuation with whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Builds a flat searchable index of all documents, folders, and glossary terms
 */
export function buildSearchIndex(
  libraryData: DrawerItem[],
  language: 'ar' | 'en'
): SearchResultItem[] {
  const index: SearchResultItem[] = [];

  // 1. Index library drawers and documents
  function traverse(items: DrawerItem[], parents: DrawerItem[]) {
    for (const item of items) {
      if (item.type === 'content') {
        index.push({
          id: `doc-${item.id}`,
          type: 'document',
          title: item.title,
          subtitle: parents.length > 0 ? parents.map(p => p.title).join(' > ') : undefined,
          contentSnippet: item.content,
          parentPath: parents,
          drawerIdToOpen: item.id,
          score: 0,
        });
      } else if (item.type === 'folder' && item.children) {
        index.push({
          id: `folder-${item.id}`,
          type: 'folder',
          title: item.title,
          subtitle: parents.length > 0 ? parents.map(p => p.title).join(' > ') : undefined,
          parentPath: parents,
          drawerIdToOpen: item.id,
          score: 0,
        });
        traverse(item.children, [...parents, item]);
      } else if (item.type === 'glossary' && item.terms) {
        index.push({
          id: `glossary-sec-${item.id}`,
          type: 'folder',
          title: item.title,
          subtitle: parents.length > 0 ? parents.map(p => p.title).join(' > ') : undefined,
          parentPath: parents,
          drawerIdToOpen: item.id,
          score: 0,
        });
      }
    }
  }

  traverse(libraryData, []);

  // 2. Index all 1000+ legal terms from glossaryData
  glossaryData.forEach((section, sIdx) => {
    const sectionTitle = language === 'ar' ? section.titleAr : section.titleEn;
    const sectionId = `glossary-${sIdx}`;

    if (Array.isArray(section.terms)) {
      section.terms.forEach((term: { ar: string; en: string }, tIdx: number) => {
        index.push({
          id: `term-${sIdx}-${tIdx}`,
          type: 'glossary_term',
          title: language === 'ar' ? term.ar : term.en,
          subtitle: sectionTitle,
          arTerm: term.ar,
          enTerm: term.en,
          sectionId,
          score: 0,
        });
      });
    }
  });

  return index;
}

/**
 * Searches the index using normalized fuzzy tokens and relevance scoring
 */
export function performSmartSearch(
  index: SearchResultItem[],
  query: string,
  category: SearchCategory = 'all'
): SearchResultItem[] {
  const cleanQuery = query.trim();
  if (!cleanQuery) return [];

  const normalizedQuery = normalizeSearchText(cleanQuery);
  const queryTokens = normalizedQuery.split(' ').filter(t => t.length > 0);

  if (queryTokens.length === 0) return [];

  const results: SearchResultItem[] = [];

  for (const item of index) {
    // Filter by category
    if (category === 'documents' && item.type === 'glossary_term') continue;
    if (category === 'terms' && item.type !== 'glossary_term') continue;

    const normTitle = normalizeSearchText(item.title);
    const normSubtitle = normalizeSearchText(item.subtitle || '');
    const normContent = normalizeSearchText(item.contentSnippet || '');
    const normAr = normalizeSearchText(item.arTerm || '');
    const normEn = normalizeSearchText(item.enTerm || '');

    const combinedText = `${normTitle} ${normSubtitle} ${normContent} ${normAr} ${normEn}`;

    let score = 0;

    // Exact full query match
    if (normTitle === normalizedQuery || normAr === normalizedQuery || normEn === normalizedQuery) {
      score += 150;
    } else if (normTitle.includes(normalizedQuery)) {
      score += 100;
    } else if (normAr.includes(normalizedQuery) || normEn.includes(normalizedQuery)) {
      score += 90;
    } else if (normContent.includes(normalizedQuery)) {
      score += 60;
    }

    // Token matching
    let matchedTokenCount = 0;
    for (const token of queryTokens) {
      if (normTitle.includes(token)) {
        score += 30;
        matchedTokenCount++;
      } else if (normAr.includes(token) || normEn.includes(token)) {
        score += 25;
        matchedTokenCount++;
      } else if (normContent.includes(token)) {
        score += 15;
        matchedTokenCount++;
      } else if (normSubtitle.includes(token)) {
        score += 10;
        matchedTokenCount++;
      }
    }

    // If query has multiple tokens, boost items containing all of them
    if (queryTokens.length > 1 && matchedTokenCount === queryTokens.length) {
      score += 50;
    }

    if (score > 0) {
      results.push({
        ...item,
        score,
      });
    }
  }

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score).slice(0, 30);
}
