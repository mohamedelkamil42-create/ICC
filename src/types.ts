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

export interface Article {
  id: string;
  number: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
}

export interface Part {
  id: string;
  labelAr: string;
  labelEn: string;
  titleAr: string;
  titleEn: string;
  articles: Article[];
}

export interface BookmarkRecord {
  id: string;
  drawerId?: string;
  number: string;
  titleAr: string;
  titleEn: string;
  documentTitleAr: string;
  documentTitleEn: string;
  itemLabelAr: string;
  itemLabelEn: string;
  timestamp: number;
}

export interface ArticleNote {
  articleId: string;
  drawerId: string;
  number: string;
  titleAr: string;
  titleEn: string;
  documentTitleAr: string;
  documentTitleEn: string;
  itemLabelAr: string;
  itemLabelEn: string;
  content: string;
  updatedAt: number;
}

export interface HistoryEntry {
  articleId: string;
  drawerId: string;
  number: string;
  titleAr: string;
  titleEn: string;
  documentTitleAr: string;
  documentTitleEn: string;
  itemLabelAr: string;
  itemLabelEn: string;
  visitedAt: number;
}

export interface CrossReference {
  drawerId: string;
  articleId: string;
  number: string;
  labelAr: string;
  labelEn: string;
  titleAr: string;
  titleEn: string;
  documentTitleAr: string;
  documentTitleEn: string;
}

export interface ToastNotification {
  id: number;
  message: string;
}
