// High-Performance Local Persistent Cache for ICC Interactive Dictionary & Legal Translation
import { LegalTranslationResult } from './types';

const CACHE_STORAGE_KEY = 'icc_legal_dict_cache_v2';
const MAX_CACHE_ENTRIES = 1200;

export interface CachedTranslationItem extends LegalTranslationResult {
  timestamp: number;
  hitCount: number;
  targetLang: 'ar' | 'en';
}

// In-memory hot cache for instant 0ms access
const memoryCache = new Map<string, CachedTranslationItem>();
let isInitialized = false;
let saveDebounceTimer: any = null;

// Normalize cache keys so variants share the same translation
export function buildCacheKey(term: string, targetLang: 'ar' | 'en'): string {
  const clean = term
    .toLowerCase()
    .replace(/[()[\]{}"'״”؛،,:.;?!]/g, '')
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .trim();
  return `${targetLang}::${clean}`;
}

// Load cache from localStorage
function initCacheIfNeeded() {
  if (isInitialized) return;
  isInitialized = true;

  if (typeof window === 'undefined' || !window.localStorage) return;

  try {
    const raw = localStorage.getItem(CACHE_STORAGE_KEY);
    if (raw) {
      const parsed: Record<string, CachedTranslationItem> = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        Object.entries(parsed).forEach(([key, item]) => {
          if (item && item.term && item.translation) {
            memoryCache.set(key, item);
          }
        });
      }
    }
  } catch (err) {
    console.warn('Unable to initialize local dictionary cache:', err);
  }
}

// Debounced persistence to localStorage
function scheduleSave() {
  if (typeof window === 'undefined' || !window.localStorage) return;

  if (saveDebounceTimer) clearTimeout(saveDebounceTimer);
  saveDebounceTimer = setTimeout(() => {
    try {
      // Evict oldest entries if capacity exceeded
      if (memoryCache.size > MAX_CACHE_ENTRIES) {
        const sorted = Array.from(memoryCache.entries())
          .sort((a, b) => b[1].timestamp - a[1].timestamp)
          .slice(0, MAX_CACHE_ENTRIES);
        
        memoryCache.clear();
        sorted.forEach(([k, v]) => memoryCache.set(k, v));
      }

      const obj: Record<string, CachedTranslationItem> = {};
      memoryCache.forEach((value, key) => {
        obj[key] = value;
      });

      localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(obj));
    } catch (err) {
      console.warn('Dictionary cache save failed (storage quota):', err);
    }
  }, 400);
}

/**
 * Retrieve term translation from persistent local cache (0ms response)
 */
export function getCachedTranslation(
  term: string, 
  targetLang: 'ar' | 'en'
): LegalTranslationResult | null {
  initCacheIfNeeded();
  const key = buildCacheKey(term, targetLang);
  
  const item = memoryCache.get(key);
  if (!item) return null;

  // Validation: Ensure translation matches expected language
  const targetIsArabic = targetLang === 'ar';
  const isValid = !targetIsArabic || (
    /[\u0600-\u06FF]/.test(item.translation) && 
    /[\u0600-\u06FF]/.test(item.explanation || '')
  );

  if (!isValid) {
    memoryCache.delete(key);
    return null;
  }

  // Update hit counter and access timestamp
  item.hitCount = (item.hitCount || 0) + 1;
  item.timestamp = Date.now();

  return {
    term: item.term,
    translation: item.translation,
    explanation: item.explanation,
    isCertified: item.isCertified,
    fromCache: true,
  };
}

/**
 * Store translation in persistent local cache
 */
export function setCachedTranslation(
  result: LegalTranslationResult,
  targetLang: 'ar' | 'en'
): void {
  initCacheIfNeeded();
  if (!result || !result.term || !result.translation) return;

  const targetIsArabic = targetLang === 'ar';
  // Don't cache invalid translations
  if (targetIsArabic && !/[\u0600-\u06FF]/.test(result.translation)) return;

  const key = buildCacheKey(result.term, targetLang);
  const cacheItem: CachedTranslationItem = {
    ...result,
    targetLang,
    timestamp: Date.now(),
    hitCount: 1,
    fromCache: true,
  };

  memoryCache.set(key, cacheItem);
  scheduleSave();
}

/**
 * Get recently looked up terms for quick suggestions
 */
export function getRecentlySearchedTerms(limit = 15): { term: string; translation: string; targetLang: 'ar' | 'en' }[] {
  initCacheIfNeeded();
  return Array.from(memoryCache.values())
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, limit)
    .map(i => ({
      term: i.term,
      translation: i.translation,
      targetLang: i.targetLang
    }));
}

/**
 * Get count of cached items
 */
export function getCachedItemsCount(): number {
  initCacheIfNeeded();
  return memoryCache.size;
}
