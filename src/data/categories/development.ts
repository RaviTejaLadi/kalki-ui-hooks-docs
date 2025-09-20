import type { HookData } from "@/types/HookData";

export const developmentHooks: HookData[] = [
  {
    name: 'useLogger',
    path: 'use-logger',
    description: 'Log component renders, props, and state changes for debugging.',
    category: 'Development',
    icon: '📊',
  },
  {
    name: 'useTrace',
    path: 'use-trace',
    description: 'Track and log changes to specific values during development.',
    category: 'Development',
    icon: '🔍',
  },
];
