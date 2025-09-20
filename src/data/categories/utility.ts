import type { HookData } from "@/types/HookData";

export const utilityHooks: HookData[] = [
  {
    name: 'useIsMounted',
    path: 'use-is-mounted',
    description: 'Check if component is still mounted to prevent state updates on unmounted components.',
    category: 'Utility',
    icon: '🔧',
  },
  {
    name: 'useUpdateEffect',
    path: 'use-update-effect',
    description: 'useEffect that skips the first render (componentDidUpdate equivalent).',
    category: 'Utility',
    icon: '🔄',
  },
  {
    name: 'useMount',
    path: 'use-mount',
    description: 'Execute callback only when component mounts (componentDidMount equivalent).',
    category: 'Utility',
    icon: '🚀',
  },
  {
    name: 'useUnmount',
    path: 'use-unmount',
    description: 'Execute cleanup callback when component unmounts (componentWillUnmount equivalent).',
    category: 'Utility',
    icon: '🗑️',
  },
  {
    name: 'useDeepCompareEffect',
    path: 'use-deep-compare-effect',
    description: 'useEffect with deep comparison of dependencies instead of shallow comparison.',
    category: 'Utility',
    icon: '🔍',
  },
  {
    name: 'useIsFirstRender',
    path: 'use-is-first-render',
    description: 'Determine if the current render is the first render of the component.',
    category: 'Utility',
    icon: '1️⃣',
  },
  {
    name: 'useRenderCount',
    path: 'use-render-count',
    description: 'Track how many times a component has rendered for debugging purposes.',
    category: 'Utility',
    icon: '#️⃣',
  },
  {
    name: 'useLatest',
    path: 'use-latest',
    description: 'Get the latest value of a variable that persists across renders.',
    category: 'Utility',
    icon: '📍',
  },
];
