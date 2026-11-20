import { useState, useCallback, useEffect } from 'react';
import { Article, ArticleNote, BookmarkRecord, HistoryEntry, Language } from './types';
import { safeStorage } from './storageUtils';
import { getDrawerIdForArticle } from './legalDocuments';

const BOOKMARKS_KEY = 'icc_bookmarked_articles';
const NOTES_KEY = 'icc_article_notes_v1';
const HISTORY_KEY = 'icc_reading_history_v1';
const MAX_HISTORY = 30;

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = safeStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

export interface ProvisionMeta {
  drawerId: string;
  documentTitleAr: string;
  documentTitleEn: string;
  itemLabelAr: string;
  itemLabelEn: string;
}

export function useLegalStudyStore() {
  const [bookmarks, setBookmarks] = useState<BookmarkRecord[]>(() => {
    const loaded = readJson<BookmarkRecord[]>(BOOKMARKS_KEY, []);
    return Array.isArray(loaded)
      ? loaded.map((b) => ({
          ...b,
          drawerId: b.drawerId || getDrawerIdForArticle(b.id),
        }))
      : [];
  });

  const [notes, setNotes] = useState<Record<string, ArticleNote>>(() => {
    const loaded = readJson<Record<string, ArticleNote>>(NOTES_KEY, {});
    return loaded && typeof loaded === 'object' && !Array.isArray(loaded) ? loaded : {};
  });

  const [history, setHistory] = useState<HistoryEntry[]>(() => {
    const loaded = readJson<HistoryEntry[]>(HISTORY_KEY, []);
    return Array.isArray(loaded) ? loaded : [];
  });

  // Sync across tabs via native storage event (zero polling!)
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === BOOKMARKS_KEY) {
        const loaded = readJson<BookmarkRecord[]>(BOOKMARKS_KEY, []);
        setBookmarks(Array.isArray(loaded) ? loaded : []);
      } else if (e.key === NOTES_KEY) {
        const loaded = readJson<Record<string, ArticleNote>>(NOTES_KEY, {});
        setNotes(loaded && typeof loaded === 'object' ? loaded : {});
      } else if (e.key === HISTORY_KEY) {
        const loaded = readJson<HistoryEntry[]>(HISTORY_KEY, []);
        setHistory(Array.isArray(loaded) ? loaded : []);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleBookmark = useCallback((art: Article, meta: ProvisionMeta): boolean => {
    let added = false;
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.id === art.id);
      let updated: BookmarkRecord[];
      if (exists) {
        added = false;
        updated = prev.filter((b) => b.id !== art.id);
      } else {
        added = true;
        const newRecord: BookmarkRecord = {
          id: art.id,
          drawerId: meta.drawerId,
          number: art.number,
          titleAr: art.titleAr,
          titleEn: art.titleEn,
          documentTitleAr: meta.documentTitleAr,
          documentTitleEn: meta.documentTitleEn,
          itemLabelAr: meta.itemLabelAr,
          itemLabelEn: meta.itemLabelEn,
          timestamp: Date.now(),
        };
        updated = [newRecord, ...prev];
      }
      safeStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
      return updated;
    });
    return added;
  }, []);

  const removeBookmark = useCallback((articleId: string) => {
    setBookmarks((prev) => {
      const updated = prev.filter((b) => b.id !== articleId);
      safeStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearAllBookmarks = useCallback(() => {
    setBookmarks([]);
    safeStorage.removeItem(BOOKMARKS_KEY);
  }, []);

  const saveNote = useCallback((art: Article, content: string, meta: ProvisionMeta) => {
    const trimmed = content.trim();
    setNotes((prev) => {
      const updated = { ...prev };
      if (!trimmed) {
        delete updated[art.id];
      } else {
        updated[art.id] = {
          articleId: art.id,
          drawerId: meta.drawerId,
          number: art.number,
          titleAr: art.titleAr,
          titleEn: art.titleEn,
          documentTitleAr: meta.documentTitleAr,
          documentTitleEn: meta.documentTitleEn,
          itemLabelAr: meta.itemLabelAr,
          itemLabelEn: meta.itemLabelEn,
          content: trimmed,
          updatedAt: Date.now(),
        };
      }
      safeStorage.setItem(NOTES_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const deleteNote = useCallback((articleId: string) => {
    setNotes((prev) => {
      if (!prev[articleId]) return prev;
      const updated = { ...prev };
      delete updated[articleId];
      safeStorage.setItem(NOTES_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const recordHistory = useCallback((art: Article, meta: ProvisionMeta) => {
    setHistory((prev) => {
      // Avoid redundant writes if the top item is already this exact article
      if (prev[0]?.articleId === art.id && Date.now() - prev[0].visitedAt < 5000) {
        return prev;
      }
      const filtered = prev.filter((h) => h.articleId !== art.id);
      const entry: HistoryEntry = {
        articleId: art.id,
        drawerId: meta.drawerId,
        number: art.number,
        titleAr: art.titleAr,
        titleEn: art.titleEn,
        documentTitleAr: meta.documentTitleAr,
        documentTitleEn: meta.documentTitleEn,
        itemLabelAr: meta.itemLabelAr,
        itemLabelEn: meta.itemLabelEn,
        visitedAt: Date.now(),
      };
      const updated = [entry, ...filtered].slice(0, MAX_HISTORY);
      safeStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    safeStorage.removeItem(HISTORY_KEY);
  }, []);

  const exportStudySheet = useCallback(
    (language: Language): boolean => {
      const isAr = language === 'ar';
      const notesList = Object.values(notes).sort((a, b) => b.updatedAt - a.updatedAt);
      if (bookmarks.length === 0 && notesList.length === 0) return false;

      const lines: string[] = [];
      const dateStr = new Date().toLocaleDateString(isAr ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      lines.push(
        isAr
          ? `# ملخص الدراسة القانونية — مرجع المحكمة الجنائية الدولية\nالتاريخ: ${dateStr}\n`
          : `# ICC Legal Research Study Sheet\nDate: ${dateStr}\n`
      );

      if (bookmarks.length > 0) {
        lines.push(isAr ? `## أولاً: المواد والنصوص المحفوظة (${bookmarks.length})\n` : `## 1. Saved Provisions (${bookmarks.length})\n`);
        for (const b of bookmarks) {
          const docTitle = isAr ? b.documentTitleAr : b.documentTitleEn;
          const label = isAr ? b.itemLabelAr : b.itemLabelEn;
          const title = isAr ? b.titleAr : b.titleEn;
          lines.push(`- **${docTitle} — ${label} ${b.number}**: ${title}`);
          if (notes[b.id]?.content) {
            lines.push(`  - ${isAr ? 'ملاحظة' : 'Note'}: ${notes[b.id].content}`);
          }
        }
        lines.push('');
      }

      if (notesList.length > 0) {
        lines.push(isAr ? `## ثانياً: الملاحظات القانونية الشخصية (${notesList.length})\n` : `## 2. Personal Legal Notes (${notesList.length})\n`);
        for (const n of notesList) {
          const docTitle = isAr ? n.documentTitleAr : n.documentTitleEn;
          const label = isAr ? n.itemLabelAr : n.itemLabelEn;
          const title = isAr ? n.titleAr : n.titleEn;
          lines.push(`### ${docTitle} — ${label} ${n.number}: ${title}`);
          lines.push(n.content);
          lines.push('');
        }
      }

      const blob = new Blob(['\uFEFF' + lines.join('\n')], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = isAr ? 'مذكرة-المحكمة-الجنائية-الدولية.md' : 'icc-legal-study-notes.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      return true;
    },
    [bookmarks, notes]
  );

  return {
    bookmarks,
    notes,
    history,
    lastRead: history[0] || null,
    toggleBookmark,
    removeBookmark,
    clearAllBookmarks,
    saveNote,
    deleteNote,
    recordHistory,
    clearHistory,
    exportStudySheet,
  };
}
