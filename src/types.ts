export type ItemType = 'content' | 'folder' | 'glossary';

export interface GlossaryTerm {
  ar: string;
  en: string;
}

export interface GlossarySection {
  title: string;
  terms: GlossaryTerm[];
}

export interface DrawerItem {
  id: string;
  title: string;
  type: ItemType;
  content?: string;
  children?: DrawerItem[];
  terms?: GlossaryTerm[];
}
