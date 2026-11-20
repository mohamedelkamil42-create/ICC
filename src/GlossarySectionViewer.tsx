import React, { useState, useMemo, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { GlossaryTerm } from './types';
import { GlossaryTermCard } from './GlossaryTermCard';
import { normalizeSearchText } from './searchUtils';

interface GlossarySectionViewerProps {
  terms: GlossaryTerm[];
  isRTL: boolean;
  initialFilter?: string | null;
}

export const GlossarySectionViewer: React.FC<GlossarySectionViewerProps> = ({
  terms,
  isRTL,
  initialFilter,
}) => {
  const [filter, setFilter] = useState(initialFilter || '');

  useEffect(() => {
    if (initialFilter) {
      setFilter(initialFilter);
    }
  }, [initialFilter]);

  const filteredTerms = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return terms;
    const qNorm = normalizeSearchText(q);

    return terms.filter((term) => {
      const enMatch = term.en.toLowerCase().includes(q);
      const arMatch = term.ar.toLowerCase().includes(q) || normalizeSearchText(term.ar).includes(qNorm);
      return enMatch || arMatch;
    });
  }, [terms, filter]);

  const normHighlight = initialFilter ? normalizeSearchText(initialFilter) : '';

  return (
    <div className="flex flex-col gap-4" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Material 3 Expressive Tonal Filter Dock */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#f5f5f5] p-3.5 rounded-[22px]">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-[#666666]">
            <Search size={15} />
          </div>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder={
              isRTL
                ? `تصفية داخل هذا القسم (${terms.length} مصطلح)...`
                : `Filter terms in this section (${terms.length} terms)...`
            }
            className="w-full h-10 ps-10 pe-10 bg-white border border-black/[0.07] rounded-full text-xs sm:text-sm font-medium text-[#121212] placeholder:text-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
          />
          {filter && (
            <button
              type="button"
              onClick={() => setFilter('')}
              className="absolute inset-y-0 end-0 flex items-center pe-3 text-[#777777] hover:text-[#121212]"
              title={isRTL ? 'مسح التصفية' : 'Clear filter'}
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div className="text-xs font-semibold text-[#595959] px-2 shrink-0 tabular-nums">
          {filter.trim()
            ? isRTL
              ? `عرض ${filteredTerms.length} من ${terms.length} مصطلح`
              : `Showing ${filteredTerms.length} of ${terms.length} terms`
            : isRTL
              ? `${terms.length} مصطلح · انقر على البطاقة للقلب والاستماع`
              : `${terms.length} terms · tap card to flip & listen`}
        </div>
      </div>

      {/* Cards Grid */}
      {filteredTerms.length === 0 ? (
        <div className="py-12 text-center bg-[#f5f5f5] rounded-[24px]">
          <p className="text-sm font-bold text-[#121212] mb-3">
            {isRTL ? 'لا توجد مصطلحات مطابقة للتصفية' : 'No matching glossary terms'}
          </p>
          <button
            type="button"
            onClick={() => setFilter('')}
            className="h-9 px-4 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-[#2a2a2a] transition-colors"
          >
            {isRTL ? 'عرض جميع المصطلحات' : 'Show all terms'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredTerms.map((term, i) => {
            const isHighlighted =
              !!normHighlight &&
              (normalizeSearchText(term.en) === normHighlight ||
                normalizeSearchText(term.ar) === normHighlight);
            return (
              <GlossaryTermCard
                key={`${term.en}-${i}`}
                ar={term.ar}
                en={term.en}
                isRTL={isRTL}
                isHighlighted={isHighlighted}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
