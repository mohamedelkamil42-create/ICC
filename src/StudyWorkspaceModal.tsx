import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bookmark, StickyNote, Clock, X, Trash2, Download, ArrowLeft, ArrowRight } from 'lucide-react';
import { ArticleNote, BookmarkRecord, HistoryEntry, Language } from './types';

interface StudyWorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  bookmarks: BookmarkRecord[];
  notes: Record<string, ArticleNote>;
  history: HistoryEntry[];
  onJumpToArticle: (drawerId: string | undefined, articleId: string) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearBookmarks: () => void;
  onDeleteNote: (articleId: string) => void;
  onClearHistory: () => void;
  onExportStudySheet: () => void;
}

type WorkspaceTab = 'bookmarks' | 'notes' | 'history';

export const StudyWorkspaceModal: React.FC<StudyWorkspaceModalProps> = ({
  isOpen,
  onClose,
  language,
  bookmarks,
  notes,
  history,
  onJumpToArticle,
  onRemoveBookmark,
  onClearBookmarks,
  onDeleteNote,
  onClearHistory,
  onExportStudySheet,
}) => {
  const [activeTab, setActiveTab] = useState<WorkspaceTab>('bookmarks');
  const isRTL = language === 'ar';

  const notesList = Object.values(notes).sort((a, b) => b.updatedAt - a.updatedAt);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const canExport = bookmarks.length > 0 || notesList.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/45 backdrop-blur-xs"
          onClick={onClose}
        >
          {/* Material 3 Expressive Bottom Sheet (mobile) / Dialog (desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#f5f5f5] border border-black/[0.08] rounded-t-[28px] sm:rounded-[28px] w-full max-w-2xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden"
            dir={isRTL ? 'rtl' : 'ltr'}
            role="dialog"
            aria-modal="true"
            aria-label={isRTL ? 'مفكرة البحث القانوني' : 'Legal Research Workspace'}
          >
            {/* Mobile M3 Drag Handle */}
            <div className="sm:hidden flex justify-center pt-2.5 pb-1 bg-white">
              <div className="w-9 h-1 rounded-full bg-black/20" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-white border-b border-black/[0.07] gap-3">
              <div>
                <h3 className="font-black text-base sm:text-lg text-[#121212] leading-tight">
                  {isRTL ? 'مفكرة البحث القانوني' : 'Legal Study Workspace'}
                </h3>
                <p className="text-xs text-[#666666] font-medium mt-0.5 tabular-nums">
                  {isRTL
                    ? `${bookmarks.length} محفوظة · ${notesList.length} ملاحظة · ${history.length} في السجل`
                    : `${bookmarks.length} saved · ${notesList.length} notes · ${history.length} recent`}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {canExport && (
                  <button
                    type="button"
                    onClick={onExportStudySheet}
                    className="h-9 px-3.5 rounded-full bg-[#111111] text-white hover:bg-[#2a2a2a] text-xs font-bold transition-colors flex items-center gap-1.5"
                    title={isRTL ? 'تصدير المحفوظات والملاحظات' : 'Export bookmarks & notes'}
                  >
                    <Download size={14} />
                    <span className="hidden sm:inline">{isRTL ? 'تصدير المذكرة' : 'Export Notes'}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-[#efefef] hover:bg-[#e3e3e3] text-[#121212] flex items-center justify-center transition-colors"
                  title={isRTL ? 'إغلاق' : 'Close'}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* M3 Segmented Tabs */}
            <div className="px-4 sm:px-6 pt-4 pb-2">
              <div className="m3-segmented-track flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('bookmarks')}
                  className={`flex-1 flex items-center justify-center gap-1.5 h-9 px-3 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    activeTab === 'bookmarks' ? 'bg-[#111111] text-white shadow-xs' : 'text-[#555555] hover:text-[#121212]'
                  }`}
                >
                  <Bookmark size={14} />
                  <span>{isRTL ? `المحفوظات (${bookmarks.length})` : `Saved (${bookmarks.length})`}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('notes')}
                  className={`flex-1 flex items-center justify-center gap-1.5 h-9 px-3 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    activeTab === 'notes' ? 'bg-[#111111] text-white shadow-xs' : 'text-[#555555] hover:text-[#121212]'
                  }`}
                >
                  <StickyNote size={14} />
                  <span>{isRTL ? `ملاحظاتي (${notesList.length})` : `Notes (${notesList.length})`}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('history')}
                  className={`flex-1 flex items-center justify-center gap-1.5 h-9 px-3 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    activeTab === 'history' ? 'bg-[#111111] text-white shadow-xs' : 'text-[#555555] hover:text-[#121212]'
                  }`}
                >
                  <Clock size={14} />
                  <span>{isRTL ? `السجل (${history.length})` : `Recent (${history.length})`}</span>
                </button>
              </div>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-3 space-y-3">
              {activeTab === 'bookmarks' && (
                <>
                  {bookmarks.length > 0 && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={onClearBookmarks}
                        className="h-8 px-3 text-xs font-bold text-[#666] hover:text-[#121212] hover:bg-black/5 rounded-full transition-colors flex items-center gap-1.5"
                      >
                        <Trash2 size={13} />
                        <span>{isRTL ? 'إفراغ المحفوظات' : 'Clear all'}</span>
                      </button>
                    </div>
                  )}

                  {bookmarks.length === 0 ? (
                    <div className="py-12 text-center bg-white rounded-[24px] px-4">
                      <Bookmark size={32} className="mx-auto mb-3 opacity-25 text-[#121212]" />
                      <h4 className="font-bold text-[#121212] text-sm mb-1">
                        {isRTL ? 'لم تقم بحفظ أي مادة بعد' : 'No saved provisions yet'}
                      </h4>
                      <p className="text-xs text-[#666666] max-w-xs mx-auto leading-relaxed">
                        {isRTL
                          ? 'انقر على زر الحفظ بجانب أي مادة أو قاعدة أو لائحة للرجوع إليها سريعاً هنا.'
                          : 'Click the Save button on any article, rule, or regulation to bookmark it here.'}
                      </p>
                    </div>
                  ) : (
                    <div className="m3-list-group flex flex-col gap-[3px]">
                      {bookmarks.map((b) => (
                        <div
                          key={b.id}
                          className="m3-list-item p-4 bg-white hover:bg-[#fafafa] transition-colors flex items-start justify-between gap-3"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold text-[#666666] mb-0.5">
                              {isRTL ? b.documentTitleAr : b.documentTitleEn}
                            </div>
                            <div className="font-bold text-sm text-[#121212] leading-snug">
                              {isRTL ? b.itemLabelAr : b.itemLabelEn} {b.number}: {isRTL ? b.titleAr : b.titleEn}
                            </div>
                            {notes[b.id]?.content && (
                              <p className="text-xs text-[#555555] mt-1.5 line-clamp-2 bg-[#f5f5f5] px-2.5 py-1.5 rounded-xl">
                                {notes[b.id].content}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => {
                                onJumpToArticle(b.drawerId, b.id);
                                onClose();
                              }}
                              className="h-9 px-3.5 rounded-full bg-[#111111] text-white hover:bg-[#2a2a2a] text-xs font-bold transition-colors flex items-center gap-1"
                            >
                              <span>{isRTL ? 'فتح' : 'Open'}</span>
                              {isRTL ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
                            </button>
                            <button
                              type="button"
                              onClick={() => onRemoveBookmark(b.id)}
                              className="w-9 h-9 rounded-full bg-[#efefef] hover:bg-[#e2e2e2] text-[#444] flex items-center justify-center transition-colors"
                              title={isRTL ? 'إزالة' : 'Remove'}
                            >
                              <X size={15} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {activeTab === 'notes' && (
                <>
                  {notesList.length === 0 ? (
                    <div className="py-12 text-center bg-white rounded-[24px] px-4">
                      <StickyNote size={32} className="mx-auto mb-3 opacity-25 text-[#121212]" />
                      <h4 className="font-bold text-[#121212] text-sm mb-1">
                        {isRTL ? 'لا توجد ملاحظات قانونية مدوّنة بعد' : 'No legal notes yet'}
                      </h4>
                      <p className="text-xs text-[#666666] max-w-xs mx-auto leading-relaxed">
                        {isRTL
                          ? 'اضغط على زر "ملاحظة" بجانب أي مادة لإضافة ملاحظاتك الشخصية وتصديرها في أي وقت.'
                          : 'Click Note on any provision to record personal study notes and export them anytime.'}
                      </p>
                    </div>
                  ) : (
                    <div className="m3-list-group flex flex-col gap-[3px]">
                      {notesList.map((n) => (
                        <div
                          key={n.articleId}
                          className="m3-list-item p-4 bg-white flex items-start justify-between gap-3"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold text-[#666666] mb-0.5">
                              {isRTL ? n.documentTitleAr : n.documentTitleEn}
                            </div>
                            <div className="font-bold text-sm text-[#121212] leading-snug mb-2">
                              {isRTL ? n.itemLabelAr : n.itemLabelEn} {n.number}: {isRTL ? n.titleAr : n.titleEn}
                            </div>
                            <p className="text-xs text-[#333333] whitespace-pre-wrap leading-relaxed bg-[#f5f5f5] p-3 rounded-[14px]">
                              {n.content}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => {
                                onJumpToArticle(n.drawerId, n.articleId);
                                onClose();
                              }}
                              className="h-9 px-3.5 rounded-full bg-[#111111] text-white hover:bg-[#2a2a2a] text-xs font-bold transition-colors"
                            >
                              {isRTL ? 'انتقال' : 'Jump'}
                            </button>
                            <button
                              type="button"
                              onClick={() => onDeleteNote(n.articleId)}
                              className="w-9 h-9 rounded-full bg-[#efefef] hover:bg-[#e2e2e2] text-[#444] flex items-center justify-center transition-colors"
                              title={isRTL ? 'حذف الملاحظة' : 'Delete note'}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {activeTab === 'history' && (
                <>
                  {history.length > 0 && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={onClearHistory}
                        className="h-8 px-3 text-xs font-bold text-[#666] hover:text-[#121212] hover:bg-black/5 rounded-full transition-colors flex items-center gap-1.5"
                      >
                        <Trash2 size={13} />
                        <span>{isRTL ? 'مسح السجل' : 'Clear history'}</span>
                      </button>
                    </div>
                  )}

                  {history.length === 0 ? (
                    <div className="py-12 text-center bg-white rounded-[24px] px-4">
                      <Clock size={32} className="mx-auto mb-3 opacity-25 text-[#121212]" />
                      <h4 className="font-bold text-[#121212] text-sm mb-1">
                        {isRTL ? 'السجل فارغ حالياً' : 'No recently viewed provisions'}
                      </h4>
                      <p className="text-xs text-[#666666] max-w-xs mx-auto leading-relaxed">
                        {isRTL
                          ? 'تُحفظ هنا تلقائياً أحدث المواد واللوائح التي تصفحتها للرجوع إليها بسهولة.'
                          : 'Your most recently consulted provisions will appear here automatically.'}
                      </p>
                    </div>
                  ) : (
                    <div className="m3-list-group flex flex-col gap-[3px]">
                      {history.map((h) => (
                        <button
                          type="button"
                          key={h.articleId}
                          onClick={() => {
                            onJumpToArticle(h.drawerId, h.articleId);
                            onClose();
                          }}
                          className="m3-list-item w-full text-start p-4 bg-white hover:bg-[#ececec] transition-colors flex items-center justify-between gap-3"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-semibold text-[#666666] mb-0.5">
                              {isRTL ? h.documentTitleAr : h.documentTitleEn}
                            </div>
                            <div className="font-bold text-sm text-[#121212] truncate">
                              {isRTL ? h.itemLabelAr : h.itemLabelEn} {h.number}: {isRTL ? h.titleAr : h.titleEn}
                            </div>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#efefef] text-[#121212] flex items-center justify-center shrink-0">
                            {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
