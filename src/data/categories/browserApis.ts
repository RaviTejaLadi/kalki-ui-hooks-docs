import type { HookData } from "@/types/HookData";

export const browserApisHooks: HookData[] = [
  {
    name: 'useGeolocation',
    path: 'use-geolocation',
    description: 'Access device geolocation with error handling and loading states.',
    category: 'Browser APIs',
    icon: '📍',
  },
  {
    name: 'useBattery',
    path: 'use-battery',
    description: 'Monitor device battery status and charging information.',
    category: 'Browser APIs',
    icon: '🔋',
  },
  {
    name: 'usePermission',
    path: 'use-permission',
    description: 'Check and request browser permissions for various APIs.',
    category: 'Browser APIs',
    icon: '🔐',
  },
  {
    name: 'usePageVisibility',
    path: 'use-page-visibility',
    description: 'Track when the page becomes visible or hidden (tab switching).',
    category: 'Browser APIs',
    icon: '👁️',
  },
  {
    name: 'useIdle',
    path: 'use-idle',
    description: 'Detect when user becomes idle based on mouse/keyboard activity.',
    category: 'Browser APIs',
    icon: '😴',
  },
  {
    name: 'useFullscreen',
    path: 'use-fullscreen',
    description: 'Toggle fullscreen mode and track fullscreen state.',
    category: 'Browser APIs',
    icon: '🖥️',
  },
  {
    name: 'useNotification',
    path: 'use-notification',
    description: 'Send browser notifications with permission handling.',
    category: 'Browser APIs',
    icon: '🔔',
  },
  {
    name: 'useShare',
    path: 'use-share',
    description: 'Use Web Share API to share content natively on supported devices.',
    category: 'Browser APIs',
    icon: '📤',
  },
];
