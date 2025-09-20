import type { HookData } from '../hooksData';

export const networkHooks: HookData[] = [
  {
    name: "useFetch",
    path: "use-fetch",
    description: "Fetch data from APIs with loading states and error handling.",
    category: "Network",
    icon: "🌐",
  },
  {
    name: "useAsync",
    path: "use-async",
    description:
      "Handle async operations with loading, error, and success states.",
    category: "Network",
    icon: "⏳",
  },
  {
    name: "useSWR",
    path: "use-swr",
    description:
      "Data fetching with caching, revalidation, and real-time updates.",
    category: "Network",
    icon: "🔄",
  },
  {
    name: "useQuery",
    path: "use-query",
    description:
      "Powerful data fetching and caching (React Query/TanStack Query).",
    category: "Network",
    icon: "🔍",
  },
  {
    name: "useWebSocket",
    path: "use-web-socket",
    description:
      "Manage WebSocket connections with automatic reconnection and message handling.",
    category: "Network",
    icon: "🔌",
  },
  {
    name: "useOnlineStatus",
    path: "use-online-status",
    description:
      "Track online/offline network status and connectivity changes.",
    category: "Network",
    icon: "📡",
  },
];
