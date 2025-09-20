import type { HookData } from "@/types/HookData";

export const responsiveHooks: HookData[] = [
  {
    name: 'useMediaQuery',
    path: 'use-media-query',
    description: 'React to media query changes for responsive design and conditional rendering.',
    category: 'Responsive',
    icon: '📱',
  },
  {
    name: 'useWindowSize',
    path: 'use-window-size',
    description: 'Track window dimensions and respond to resize events.',
    category: 'Responsive',
    icon: '🪟',
  },
  {
    name: 'useBreakpoint',
    path: 'use-breakpoint',
    description: 'Get current breakpoint based on window width for responsive layouts.',
    category: 'Responsive',
    icon: '📐',
  },
  {
    name: 'useOrientation',
    path: 'use-orientation',
    description: 'Track device orientation changes (portrait/landscape).',
    category: 'Responsive',
    icon: '🔄',
  },
];
