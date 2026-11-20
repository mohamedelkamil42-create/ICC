import React, { useState, useMemo, useEffect } from 'react';
import {
  ArrowUp,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  Quote,
  Link2,
  Printer,
  StickyNote,
  CornerDownLeft,
  Trash2,
  X,
} from 'lucide-react';
import { Article, CrossReference, Language } from './types';
import { TranslatableText } from './TranslatableText';
import { extractCrossReferences } from './legalDocuments';

interface ArticleCardProps {
  art: Article;
  drawerId: string;
  bilingual?: boolean;
  isHighlighted: boolean;
  highlightTerm?: string | null;
  language: Language;
  itemLabelAr: string;
  itemLabelEn: string;
  isSaved: boolean;
  noteContent?: string;
  isCopied: boolean;
  isCitationCopied: boolean;
  isLinkCopied: boolean;
  onToggleBookmark: (art: Article) => void;
  onSaveNote: (art: Article, content: string) => void;
  onCopyContent: (art: Article, lang: 'ar' | 'en' | 'both') => void;
  onCopyCitation: (art: Article) => void;
  onCopyLink: (art: Article) => void;
  onPrintArticle: (artId: string) => void;
  onNavigateCrossRef: (ref: CrossReference, fromArt: Article) => void;
  onScrollToTop: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = React.memo(
  ({
    art,
    drawerId,
    bilingual = false,
    isHighlighted,
    highlightTerm,
    language,
    itemLabelAr,
    itemLabelEn,
    isSaved,
    noteContent,
    isCopied,
    isCitationCopied,
    isLinkCopied,
    onToggleBookmark,
    onSaveNote,
    onCopyContent,
    onCopyCitation,
    onCopyLink,
    onPrintArticle,
    onNavigateCrossRef,
    onScrollToTop,
  }) => {
    const isRTL = language === 'ar';
    const [isNoteOpen, setIsNoteOpen] = useState(false);
    const [noteDraft, setNoteDraft] = useState(noteContent || '');

    useEffect(() => {
      setNoteDraft(noteContent || '');
    }, [noteContent]);

    const crossRefs = useMemo(
      () => extractCrossReferences(art.contentAr, art.contentEn, drawerId, art.id),
      [art.contentAr, art.contentEn, drawerId, art.id]
    );

    const hasNote = Boolean(noteContent && noteContent.trim().length > 0);

    const handleSaveNote = () => {
      onSaveNote(art, noteDraft);
      if (!noteDraft.trim()) {
        setIsNoteOpen(false);
      }
    };

    const handleDeleteNote = () => {
      setNoteDraft('');
      onSaveNote(art, '');
      setIsNoteOpen(false);
    };

    const toolbar = (
      <div className="flex items-center gap-1.5 shrink-0 flex-wrap print:hidden">
        {/* Bookmark */}
        <button
          type="button"
          onClick={() => onToggleBookmark(art)}
          className={`h-9 px-3 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
            isSaved
              ? 'bg-[#111111] text-white'
              : 'bg-[#efefef] text-[#333333] hover:bg-[#e2e2e2] hover:text-[#121212]'
          }`}
          title={isRTL ? (isSaved ? 'إزالة من المحفوظات' : 'حفظ المادة') : isSaved ? 'Remove bookmark' : 'Save provision'}
        >
          {isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
          <span className="hidden lg:inline">{isRTL ? (isSaved ? 'محفوظ' : 'حفظ') : isSaved ? 'Saved' : 'Save'}</span>
        </button>

        {/* Study Note */}
        <button
          type="button"
          onClick={() => setIsNoteOpen((prev) => !prev)}
          className={`h-9 px-3 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
            hasNote || isNoteOpen
              ? 'bg-[#111111] text-white'
              : 'bg-[#efefef] text-[#333333] hover:bg-[#e2e2e2] hover:text-[#121212]'
          }`}
          title={isRTL ? 'ملاحظة قانونية شخصية' : 'Personal legal note'}
        >
          <StickyNote size={14} />
          <span className="hidden lg:inline">{isRTL ? 'ملاحظة' : 'Note'}</span>
        </button>

        {/* Copy Content */}
        <button
          type="button"
          onClick={() => onCopyContent(art, bilingual ? 'both' : language)}
          className="h-9 w-9 lg:w-auto lg:px-3 rounded-full bg-[#efefef] text-[#333333] hover:bg-[#e2e2e2] hover:text-[#121212] text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95"
          title={isRTL ? 'نسخ النص الكامل' : 'Copy full text'}
        >
          {isCopied ? <Check size={14} /> : <Copy size={14} />}
          <span className="hidden lg:inline">{isRTL ? (isCopied ? 'تم' : 'نسخ') : isCopied ? 'Copied' : 'Copy'}</span>
        </button>

        {/* Copy Citation */}
        <button
          type="button"
          onClick={() => onCopyCitation(art)}
          className="h-9 w-9 lg:w-auto lg:px-3 rounded-full bg-[#efefef] text-[#333333] hover:bg-[#e2e2e2] hover:text-[#121212] text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95"
          title={isRTL ? 'نسخ الاستشهاد القانوني الرسمي' : 'Copy formal legal citation'}
        >
          {isCitationCopied ? <Check size={14} /> : <Quote size={14} />}
          <span className="hidden lg:inline">{isRTL ? 'استشهاد' : 'Cite'}</span>
        </button>

        {/* Direct Link */}
        <button
          type="button"
          onClick={() => onCopyLink(art)}
          className="h-9 w-9 rounded-full bg-[#efefef] text-[#333333] hover:bg-[#e2e2e2] hover:text-[#121212] transition-all flex items-center justify-center active:scale-95"
          title={isRTL ? 'نسخ الرابط المباشر للمادة' : 'Copy direct link'}
        >
          {isLinkCopied ? <Check size={14} /> : <Link2 size={14} />}
        </button>

        {/* Print */}
        <button
          type="button"
          onClick={() => onPrintArticle(art.id)}
          className="h-9 w-9 rounded-full bg-[#efefef] text-[#333333] hover:bg-[#e2e2e2] hover:text-[#121212] transition-all flex items-center justify-center active:scale-95"
          title={isRTL ? 'طباعة هذه المادة' : 'Print this provision'}
        >
          <Printer size={14} />
        </button>
      </div>
    );

    const noteEditorSection = (
      <>
        {isNoteOpen && (
          <div className="mt-5 p-4 rounded-[22px] bg-[#f2f2f2] print:hidden">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#121212]">
                <StickyNote size={14} />
                <span>{isRTL ? 'ملاحظاتك القانونية على هذه المادة' : 'Personal Legal Study Note'}</span>
              </div>
              <button
                type="button"
                onClick={() => setIsNoteOpen(false)}
                className="w-7 h-7 rounded-full hover:bg-black/10 text-[#555] flex items-center justify-center"
                title={isRTL ? 'إغلاق' : 'Close'}
              >
                <X size={14} />
              </button>
            </div>
            <textarea
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
              rows={3}
              placeholder={
                isRTL
                  ? 'اكتب ملاحظاتك القانونية، الاجتهادات المرتبطة، أو نقاط التحليل هنا...'
                  : 'Write your legal analysis, case law references, or study notes here...'
              }
              className="w-full p-3.5 bg-white rounded-[16px] text-xs sm:text-sm text-[#121212] placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-[#111111] resize-y leading-relaxed"
            />
            <div className="flex items-center justify-between mt-3 gap-2">
              {hasNote ? (
                <button
                  type="button"
                  onClick={handleDeleteNote}
                  className="h-9 px-3.5 rounded-full text-xs font-bold text-[#555] hover:text-[#121212] hover:bg-black/5 transition-colors flex items-center gap-1.5"
                >
                  <Trash2 size={13} />
                  <span>{isRTL ? 'حذف الملاحظة' : 'Delete Note'}</span>
                </button>
              ) : (
                <span className="text-[11px] text-[#666] px-1">
                  {isRTL ? 'تُحفظ محلياً على جهازك' : 'Saved locally on your device'}
                </span>
              )}
              <button
                type="button"
                onClick={handleSaveNote}
                className="h-9 px-5 rounded-full bg-[#111111] text-white hover:bg-[#2a2a2a] text-xs font-bold transition-colors"
              >
                {isRTL ? 'حفظ الملاحظة' : 'Save Note'}
              </button>
            </div>
          </div>
        )}

        {!isNoteOpen && hasNote && (
          <div
            onClick={() => setIsNoteOpen(true)}
            className="mt-4 p-4 rounded-[20px] bg-[#f3f3f3] cursor-pointer hover:bg-[#eaeaea] transition-colors"
          >
            <div className="text-xs font-bold text-[#555] mb-1">
              {isRTL ? 'ملاحظتك الشخصية' : 'Personal Note'}
            </div>
            <p className="text-xs sm:text-sm text-[#222] whitespace-pre-wrap leading-relaxed line-clamp-3">
              {noteContent}
            </p>
          </div>
        )}
      </>
    );

    const crossReferencesSection = crossRefs.length > 0 && (
      <div className="mt-6 pt-4 border-t border-black/[0.06] print:hidden">
        <div className="text-xs font-bold text-[#666666] mb-2.5">
          {isRTL ? 'إحالات ومواد مرتبطة في النص' : 'Referenced Provisions'}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {crossRefs.map((ref) => (
            <button
              type="button"
              key={`${ref.drawerId}-${ref.articleId}`}
              onClick={() => onNavigateCrossRef(ref, art)}
              className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-[#f0f0f0] hover:bg-[#111111] hover:text-white text-xs font-semibold text-[#121212] transition-all group/ref"
              title={isRTL ? `${ref.documentTitleAr} — ${ref.titleAr}` : `${ref.documentTitleEn} — ${ref.titleEn}`}
            >
              <CornerDownLeft size={11} className="opacity-55 group-hover/ref:opacity-100" />
              <span>{isRTL ? ref.labelAr : ref.labelEn}</span>
              {ref.drawerId !== drawerId && (
                <span className="text-[10px] opacity-60">
                  · {isRTL ? ref.documentTitleAr : ref.documentTitleEn}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    );

    return (
      <article
        id={`article-${art.id}`}
        style={{ contentVisibility: 'auto', containIntrinsicSize: bilingual ? '0 280px' : '0 210px' }}
        className={`scroll-mt-24 p-5 sm:p-7 md:p-8 bg-white rounded-[28px] transition-all min-h-[140px] ${
          isHighlighted
            ? 'ring-2 ring-[#111111] shadow-lg'
            : 'border border-black/[0.07]'
        }`}
      >
        {bilingual ? (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/[0.06] w-full">
              <div className="text-sm font-black text-[#121212] tabular-nums">
                {itemLabelAr} {art.number} <span className="text-[#999] font-normal mx-1">/</span> {itemLabelEn} {art.number}
              </div>
              {toolbar}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-black/[0.07]">
              <div dir="rtl" className="flex flex-col gap-2.5 font-arabic pt-2 lg:pt-0">
                <div className="text-xs font-bold text-[#666666]">
                  {isRTL ? 'النص العربي المعتمد' : 'Arabic (Official)'} · {itemLabelAr} {art.number}
                </div>
                <h4 className="text-lg font-black text-[#121212] mb-1">{art.titleAr}</h4>
                <div className="text-justify leading-relaxed">
                  <TranslatableText
                    text={art.contentAr}
                    isEnglish={false}
                    highlightTerm={isHighlighted ? highlightTerm : undefined}
                  />
                </div>
              </div>

              <div dir="ltr" className="flex flex-col gap-2.5 pt-6 lg:pt-0 lg:pl-8">
                <div className="text-xs font-bold text-[#666666]">
                  {isRTL ? 'النص الإنجليزي المعتمد' : 'English (Official)'} · {itemLabelEn} {art.number}
                </div>
                <h4 className="text-lg font-black text-[#121212] mb-1">{art.titleEn}</h4>
                <div className="text-justify leading-relaxed">
                  <TranslatableText
                    text={art.contentEn}
                    isEnglish={true}
                    highlightTerm={isHighlighted ? highlightTerm : undefined}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={`flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 pb-4 border-b border-black/[0.06] w-full ${
                isRTL ? 'items-start text-right' : 'items-start text-left'
              }`}
            >
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs font-bold text-[#666666] mb-1 tabular-nums">
                  {isRTL ? itemLabelAr : itemLabelEn} {art.number}
                  {isHighlighted && (isRTL ? ' · الموضع المحدد' : ' · Selected')}
                </span>
                <h3
                  className={`text-xl sm:text-2xl font-black text-[#121212] leading-snug w-full ${
                    isRTL ? 'font-arabic text-right' : 'text-left'
                  }`}
                >
                  {isRTL ? art.titleAr : art.titleEn}
                </h3>
              </div>

              {toolbar}
            </div>

            <div className="text-justify leading-relaxed">
              <TranslatableText
                text={isRTL ? art.contentAr : art.contentEn}
                isEnglish={!isRTL}
                highlightTerm={isHighlighted ? highlightTerm : undefined}
              />
            </div>
          </>
        )}

        {noteEditorSection}
        {crossReferencesSection}

        <div className="mt-6 pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#777777]">
          <span className="tabular-nums">
            {bilingual
              ? `${itemLabelAr} ${art.number} · ${itemLabelEn} ${art.number}`
              : `${isRTL ? itemLabelAr : itemLabelEn} ${art.number}`}
          </span>
          <button
            type="button"
            onClick={onScrollToTop}
            className="inline-flex items-center gap-1 text-[#666666] hover:text-[#121212] font-semibold transition-colors print:hidden"
            title={isRTL ? 'الرجوع للأعلى' : 'Back to top'}
          >
            <span>{isRTL ? 'للأعلى' : 'Top'}</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </article>
    );
  }
);
