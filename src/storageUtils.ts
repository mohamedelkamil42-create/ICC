// Safe localStorage wrapper that handles iframe sandboxing, private browsing, and SecurityErrors
const memoryStore = new Map<string, string>();

function getLocalStorage(): Storage | null {
  try {
    if (typeof window === 'undefined') return null;
    return window.localStorage || null;
  } catch {
    return null;
  }
}

export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      const storage = getLocalStorage();
      if (storage) {
        return storage.getItem(key);
      }
    } catch {
      // Fallback to memory store
    }
    return memoryStore.get(key) ?? null;
  },

  setItem: (key: string, value: string): void => {
    try {
      const storage = getLocalStorage();
      if (storage) {
        storage.setItem(key, value);
      }
    } catch {
      // QuotaExceededError or SecurityError
    }
    memoryStore.set(key, value);
  },

  removeItem: (key: string): void => {
    try {
      const storage = getLocalStorage();
      if (storage) {
        storage.removeItem(key);
      }
    } catch {
      // SecurityError
    }
    memoryStore.delete(key);
  },
};
