import type { HookData } from '../hooksData';

export const timersHooks: HookData[] = [
  {
    name: 'useTimeout',
    path: 'use-timeout',
    description: 'Execute callbacks after a delay with automatic cleanup.',
    category: 'Timers',
    icon: '⏰',
  },
  {
    name: 'useInterval',
    path: 'use-interval',
    description: 'Execute callbacks repeatedly at specified intervals.',
    category: 'Timers',
    icon: '🔁',
  },
  {
    name: 'useCountdown',
    path: 'use-countdown',
    description: 'Create countdown timers with start, pause, and reset functionality.',
    category: 'Timers',
    icon: '⏲️',
  },
];
