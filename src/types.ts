export type ItemType = 'folder' | 'content' | 'glossary';

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
