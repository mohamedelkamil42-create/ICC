export type ItemType = 'folder' | 'content' | 'glossary' | 'statute';

export interface GlossaryTerm {
  ar: string;
  en: string;
}

export interface DrawerItem {
  id: string;
  title: string;
  type: ItemType;
  content?: string;
  children?: DrawerItem[];
  terms?: GlossaryTerm[];
}

export type Language = 'ar' | 'en';

export interface LegalTranslationResult {
  term: string;
  translation: string;
  explanation: string;
  isCertified: boolean;
  fromCache?: boolean;
}
