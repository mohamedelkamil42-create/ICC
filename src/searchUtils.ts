import { DrawerItem, Language } from './types';

export type SearchCategory = 'all' | 'documents' | 'terms';

export interface SearchResultItem {
  id: string;
  title: string;
  type: 'document' | 'folder' | 'glossary_term';
  subtitle?: string;
  contentSnippet?: string;
  drawerIdToOpen?: string;
  parentPath?: DrawerItem[];
  enTerm?: string;
  arTerm?: string;
  sectionId?: string;
}

export interface SearchIndexItem {
  id: string;
  title: string;
  searchableText: string;
  type: 'document' | 'folder' | 'glossary_term';
  item: any;
  parentPath: DrawerItem[];
}

export function buildSearchIndex(data: DrawerItem[], lang: Language): SearchIndexItem[] {
  const index: SearchIndexItem[] = [];

  function traverse(items: DrawerItem[], path: DrawerItem[]) {
    for (const item of items) {
      if (item.type === 'glossary' && item.terms) {
        for (const term of item.terms) {
          index.push({
            id: `term-${term.en}`,
            title: lang === 'ar' ? term.ar : term.en,
            searchableText: `${term.en} ${term.ar}`.toLowerCase(),
            type: 'glossary_term',
            item: { ...term, sectionId: item.id },
            parentPath: path,
          });
        }
      } else {
        index.push({
          id: item.id,
          title: item.title,
          searchableText: `${item.title} ${item.content || ''}`.toLowerCase(),
          type: item.type === 'folder' ? 'folder' : 'document',
          item: item,
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
  category: SearchCategory
): SearchResultItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResultItem[] = [];
  
  for (const entry of index) {
    if (category === 'documents' && entry.type === 'glossary_term') continue;
    if (category === 'terms' && entry.type !== 'glossary_term') continue;

    if (entry.searchableText.includes(q)) {
      if (entry.type === 'glossary_term') {
        results.push({
          id: entry.id,
          title: entry.title,
          type: 'glossary_term',
          subtitle: entry.item.sectionId ? 'Glossary Term' : undefined,
          enTerm: entry.item.en,
          arTerm: entry.item.ar,
          sectionId: entry.item.sectionId,
        });
      } else {
        results.push({
          id: entry.id,
          title: entry.title,
          type: entry.type as 'document' | 'folder',
          contentSnippet: entry.item.content?.substring(0, 100),
          drawerIdToOpen: entry.id,
          parentPath: entry.parentPath,
        });
      }
    }
  }

  return results.slice(0, 50);
}
