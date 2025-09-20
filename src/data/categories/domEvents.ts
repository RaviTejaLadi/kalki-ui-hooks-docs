import type { HookData } from '../hooksData';

export const domEventsHooks: HookData[] = [
  {
    name: "useClickOutside",
    path: "use-click-outside",
    description:
      "Detect clicks outside of specified elements, useful for modals and dropdowns.",
    category: "DOM Events",
    icon: "🖱️",
  },
  {
    name: "useEventListener",
    path: "use-event-listener",
    description: "Add event listeners to DOM elements with automatic cleanup.",
    category: "DOM Events",
    icon: "👂",
  },
  {
    name: "useKeyPress",
    path: "use-key-press",
    description: "Detect specific key presses and handle keyboard events.",
    category: "DOM Events",
    icon: "⌨️",
  },
  {
    name: "useHover",
    path: "use-hover",
    description:
      "Track hover state of DOM elements with mouse enter/leave events.",
    category: "DOM Events",
    icon: "👆",
  },
  {
    name: "useFocus",
    path: "use-focus",
    description: "Track focus state and programmatically focus elements.",
    category: "DOM Events",
    icon: "🎯",
  },
  {
    name: "useLongPress",
    path: "use-long-press",
    description: "Detect long press gestures on touch and mouse devices.",
    category: "DOM Events",
    icon: "👇",
  },
  {
    name: "useDrag",
    path: "use-drag",
    description: "Handle drag and drop operations with position tracking.",
    category: "DOM Events",
    icon: "🤏",
  },
  {
    name: "useIntersectionObserver",
    path: "use-intersection-observer",
    description:
      "Track element visibility and intersection with viewport for lazy loading and animations.",
    category: "DOM Events",
    icon: "👁️",
  },
  {
    name: "useResizeObserver",
    path: "use-resize-observer",
    description:
      "Observe changes in element dimensions and respond to size changes.",
    category: "DOM Events",
    icon: "📏",
  },
  {
    name: "useMutationObserver",
    path: "use-mutation-observer",
    description: "Observe DOM mutations and changes in the DOM tree.",
    category: "DOM Events",
    icon: "🔬",
  },
];
