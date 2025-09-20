import type { HookData } from '../hooksData';

export const storageHooks: HookData[] = [
  {
    name: "useIndexedDB",
    path: "use-indexed-db",
    description:
      "Store and retrieve data from IndexedDB for offline functionality.",
    category: "Storage",
    icon: "🗄️",
  },
  {
    name: "useCookie",
    path: "use-cookie",
    description:
      "Manage browser cookies with get, set, and remove functionality.",
    category: "Storage",
    icon: "🍪",
  },
  {
    name: "useHistoryState",
    path: "use-history-state",
    description: "Sync state with browser history for back/forward navigation.",
    category: "Storage",
    icon: "⏮️",
  },
];
