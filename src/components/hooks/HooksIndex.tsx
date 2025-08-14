import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const HooksIndex: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const hooks = [
    // Built-in React Hooks (Core)
    {
      name: "useState",
      path: "use-state",
      description: "Add state variables to functional components with getter and setter.",
      category: "React Built-in",
      icon: "🔄",
    },
    {
      name: "useEffect",
      path: "use-effect",
      description: "Perform side effects in functional components (mounting, updating, cleanup).",
      category: "React Built-in",
      icon: "⚡",
    },
    {
      name: "useContext",
      path: "use-context",
      description: "Access React context values without nesting consumers.",
      category: "React Built-in",
      icon: "🌐",
    },
    {
      name: "useReducer",
      path: "use-reducer",
      description: "Manage complex state logic with reducer pattern, alternative to useState.",
      category: "React Built-in",
      icon: "🔧",
    },
    {
      name: "useCallback",
      path: "use-callback",
      description: "Memoize callback functions to prevent unnecessary re-renders.",
      category: "React Built-in",
      icon: "🧠",
    },
    {
      name: "useMemo",
      path: "use-memo",
      description: "Memoize expensive calculations to optimize performance.",
      category: "React Built-in",
      icon: "💭",
    },
    {
      name: "useRef",
      path: "use-ref",
      description: "Create mutable ref objects for DOM access and persistent values.",
      category: "React Built-in",
      icon: "📌",
    },
    {
      name: "useImperativeHandle",
      path: "use-imperative-handle",
      description: "Customize the instance value exposed to parent components when using ref.",
      category: "React Built-in",
      icon: "🎛️",
    },
    {
      name: "useLayoutEffect",
      path: "use-layout-effect",
      description: "Similar to useEffect but fires synchronously after all DOM mutations.",
      category: "React Built-in",
      icon: "📐",
    },
    {
      name: "useDebugValue",
      path: "use-debug-value",
      description: "Display custom labels for custom hooks in React DevTools.",
      category: "React Built-in",
      icon: "🐛",
    },
  
    // React 18+ Hooks
    {
      name: "useId",
      path: "use-id",
      description: "Generate unique IDs for accessibility attributes and form elements.",
      category: "React Built-in",
      icon: "🆔",
    },
    {
      name: "useTransition",
      path: "use-transition",
      description: "Mark state updates as non-urgent to keep UI responsive during updates.",
      category: "React Built-in",
      icon: "🔄",
    },
    {
      name: "useDeferredValue",
      path: "use-deferred-value",
      description: "Defer updating part of the UI to keep it responsive during heavy renders.",
      category: "React Built-in",
      icon: "⏳",
    },
    {
      name: "useSyncExternalStore",
      path: "use-sync-external-store",
      description: "Subscribe to external stores while maintaining React's concurrent features.",
      category: "React Built-in",
      icon: "🔗",
    },
    {
      name: "useInsertionEffect",
      path: "use-insertion-effect",
      description: "Insert CSS-in-JS styles before layout effects run.",
      category: "React Built-in",
      icon: "🎨",
    },
  
    // State Management Custom Hooks
    {
      name: "useLocalStorage",
      path: "use-local-storage",
      description: "Persist state in localStorage with automatic serialization and error handling.",
      category: "State Management",
      icon: "💾",
    },
    {
      name: "useSessionStorage",
      path: "use-session-storage",
      description: "Persist state in sessionStorage for temporary data storage.",
      category: "State Management",
      icon: "🗂️",
    },
    {
      name: "usePrevious",
      path: "use-previous",
      description: "Get the previous value of a state or prop for comparison.",
      category: "State Management",
      icon: "⬅️",
    },
    {
      name: "useToggle",
      path: "use-toggle",
      description: "Manage boolean state with toggle, set true, and set false functions.",
      category: "State Management",
      icon: "🔀",
    },
    {
      name: "useCounter",
      path: "use-counter",
      description: "Manage numeric state with increment, decrement, and reset functions.",
      category: "State Management",
      icon: "🔢",
    },
    {
      name: "useArray",
      path: "use-array",
      description: "Manage array state with helper methods like push, remove, and filter.",
      category: "State Management",
      icon: "📋",
    },
    {
      name: "useMap",
      path: "use-map",
      description: "Manage Map data structure with reactive updates and helper methods.",
      category: "State Management",
      icon: "🗺️",
    },
    {
      name: "useSet",
      path: "use-set",
      description: "Manage Set data structure with reactive updates and helper methods.",
      category: "State Management",
      icon: "📦",
    },
  
    // Performance Hooks
    {
      name: "useDebounce",
      path: "use-debounce",
      description: "Debounce values and callbacks to optimize performance and reduce unnecessary operations.",
      category: "Performance",
      icon: "⚡",
    },
    {
      name: "useThrottle",
      path: "use-throttle",
      description: "Throttle values and callbacks to limit the rate of execution.",
      category: "Performance",
      icon: "🚦",
    },
    {
      name: "useWhyDidYouUpdate",
      path: "use-why-did-you-update",
      description: "Debug why a component re-rendered by tracking prop and state changes.",
      category: "Performance",
      icon: "🔍",
    },
    {
      name: "useMemoOne",
      path: "use-memo-one",
      description: "A more predictable useMemo that only invalidates when dependencies change.",
      category: "Performance",
      icon: "🧠",
    },
  
    // DOM Events Hooks
    {
      name: "useClickOutside",
      path: "use-click-outside",
      description: "Detect clicks outside of specified elements, useful for modals and dropdowns.",
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
      description: "Track hover state of DOM elements with mouse enter/leave events.",
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
  
    // DOM Observation Hooks
    {
      name: "useIntersectionObserver",
      path: "use-intersection-observer",
      description: "Track element visibility and intersection with viewport for lazy loading and animations.",
      category: "DOM Events",
      icon: "👁️",
    },
    {
      name: "useResizeObserver",
      path: "use-resize-observer",
      description: "Observe changes in element dimensions and respond to size changes.",
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
  
    // Responsive Design Hooks
    {
      name: "useMediaQuery",
      path: "use-media-query",
      description: "React to media query changes for responsive design and conditional rendering.",
      category: "Responsive",
      icon: "📱",
    },
    {
      name: "useWindowSize",
      path: "use-window-size",
      description: "Track window dimensions and respond to resize events.",
      category: "Responsive",
      icon: "🪟",
    },
    {
      name: "useBreakpoint",
      path: "use-breakpoint",
      description: "Get current breakpoint based on window width for responsive layouts.",
      category: "Responsive",
      icon: "📐",
    },
    {
      name: "useOrientation",
      path: "use-orientation",
      description: "Track device orientation changes (portrait/landscape).",
      category: "Responsive",
      icon: "🔄",
    },
  
    // Network & API Hooks
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
      description: "Handle async operations with loading, error, and success states.",
      category: "Network",
      icon: "⏳",
    },
    {
      name: "useSWR",
      path: "use-swr",
      description: "Data fetching with caching, revalidation, and real-time updates.",
      category: "Network",
      icon: "🔄",
    },
    {
      name: "useQuery",
      path: "use-query",
      description: "Powerful data fetching and caching (React Query/TanStack Query).",
      category: "Network",
      icon: "🔍",
    },
    {
      name: "useWebSocket",
      path: "use-web-socket",
      description: "Manage WebSocket connections with automatic reconnection and message handling.",
      category: "Network",
      icon: "🔌",
    },
    {
      name: "useOnlineStatus",
      path: "use-online-status",
      description: "Track online/offline network status and connectivity changes.",
      category: "Network",
      icon: "📡",
    },
  
    // Timer & Animation Hooks
    {
      name: "useTimeout",
      path: "use-timeout",
      description: "Execute callbacks after a delay with automatic cleanup.",
      category: "Timers",
      icon: "⏰",
    },
    {
      name: "useInterval",
      path: "use-interval",
      description: "Execute callbacks repeatedly at specified intervals.",
      category: "Timers",
      icon: "🔁",
    },
    {
      name: "useCountdown",
      path: "use-countdown",
      description: "Create countdown timers with start, pause, and reset functionality.",
      category: "Timers",
      icon: "⏲️",
    },
    {
      name: "useAnimation",
      path: "use-animation",
      description: "Handle CSS animations and transitions with JavaScript control.",
      category: "Animation",
      icon: "🎬",
    },
    {
      name: "useSpring",
      path: "use-spring",
      description: "Create smooth spring-based animations (React Spring).",
      category: "Animation",
      icon: "🌀",
    },
  
    // Form & Input Hooks
    {
      name: "useForm",
      path: "use-form",
      description: "Manage form state, validation, and submission with minimal boilerplate.",
      category: "Forms",
      icon: "📝",
    },
    {
      name: "useInput",
      path: "use-input",
      description: "Manage single input state with onChange handler and reset functionality.",
      category: "Forms",
      icon: "📥",
    },
    {
      name: "useFormValidation",
      path: "use-form-validation",
      description: "Add validation logic to forms with error tracking and display.",
      category: "Forms",
      icon: "✅",
    },
    {
      name: "useClipboard",
      path: "use-clipboard",
      description: "Copy text to clipboard and track copy success status.",
      category: "Forms",
      icon: "📋",
    },
  
    // Utility Hooks
    {
      name: "useIsMounted",
      path: "use-is-mounted",
      description: "Check if component is still mounted to prevent state updates on unmounted components.",
      category: "Utility",
      icon: "🔧",
    },
    {
      name: "useUpdateEffect",
      path: "use-update-effect",
      description: "useEffect that skips the first render (componentDidUpdate equivalent).",
      category: "Utility",
      icon: "🔄",
    },
    {
      name: "useMount",
      path: "use-mount",
      description: "Execute callback only when component mounts (componentDidMount equivalent).",
      category: "Utility",
      icon: "🚀",
    },
    {
      name: "useUnmount",
      path: "use-unmount",
      description: "Execute cleanup callback when component unmounts (componentWillUnmount equivalent).",
      category: "Utility",
      icon: "🗑️",
    },
    {
      name: "useDeepCompareEffect",
      path: "use-deep-compare-effect",
      description: "useEffect with deep comparison of dependencies instead of shallow comparison.",
      category: "Utility",
      icon: "🔍",
    },
    {
      name: "useIsFirstRender",
      path: "use-is-first-render",
      description: "Determine if the current render is the first render of the component.",
      category: "Utility",
      icon: "1️⃣",
    },
    {
      name: "useRenderCount",
      path: "use-render-count",
      description: "Track how many times a component has rendered for debugging purposes.",
      category: "Utility",
      icon: "#️⃣",
    },
    {
      name: "useLatest",
      path: "use-latest",
      description: "Get the latest value of a variable that persists across renders.",
      category: "Utility",
      icon: "📍",
    },
  
    // Browser API Hooks
    {
      name: "useGeolocation",
      path: "use-geolocation",
      description: "Access device geolocation with error handling and loading states.",
      category: "Browser APIs",
      icon: "📍",
    },
    {
      name: "useBattery",
      path: "use-battery",
      description: "Monitor device battery status and charging information.",
      category: "Browser APIs",
      icon: "🔋",
    },
    {
      name: "usePermission",
      path: "use-permission",
      description: "Check and request browser permissions for various APIs.",
      category: "Browser APIs",
      icon: "🔐",
    },
    {
      name: "usePageVisibility",
      path: "use-page-visibility",
      description: "Track when the page becomes visible or hidden (tab switching).",
      category: "Browser APIs",
      icon: "👁️",
    },
    {
      name: "useIdle",
      path: "use-idle",
      description: "Detect when user becomes idle based on mouse/keyboard activity.",
      category: "Browser APIs",
      icon: "😴",
    },
    {
      name: "useFullscreen",
      path: "use-fullscreen",
      description: "Toggle fullscreen mode and track fullscreen state.",
      category: "Browser APIs",
      icon: "🖥️",
    },
    {
      name: "useNotification",
      path: "use-notification",
      description: "Send browser notifications with permission handling.",
      category: "Browser APIs",
      icon: "🔔",
    },
    {
      name: "useShare",
      path: "use-share",
      description: "Use Web Share API to share content natively on supported devices.",
      category: "Browser APIs",
      icon: "📤",
    },
  
    // Storage & Persistence Hooks
    {
      name: "useIndexedDB",
      path: "use-indexed-db",
      description: "Store and retrieve data from IndexedDB for offline functionality.",
      category: "Storage",
      icon: "🗄️",
    },
    {
      name: "useCookie",
      path: "use-cookie",
      description: "Manage browser cookies with get, set, and remove functionality.",
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
  
    // Development & Debug Hooks
    {
      name: "useLogger",
      path: "use-logger",
      description: "Log component renders, props, and state changes for debugging.",
      category: "Development",
      icon: "📊",
    },
    {
      name: "useTrace",
      path: "use-trace",
      description: "Track and log changes to specific values during development.",
      category: "Development",
      icon: "🔍",
    },
  ];

  // Filter hooks based on search query
  const filteredHooks = useMemo(() => {
    if (!searchQuery.trim()) return hooks;
    
    const query = searchQuery.toLowerCase();
    return hooks.filter(hook => 
      hook.name.toLowerCase().includes(query) ||
      hook.description.toLowerCase().includes(query) ||
      hook.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group hooks by category
  const groupedHooks = useMemo(() => {
    const groups: { [key: string]: typeof hooks } = {};
    
    filteredHooks.forEach(hook => {
      if (!groups[hook.category]) {
        groups[hook.category] = [];
      }
      groups[hook.category].push(hook);
    });
    
    return groups;
  }, [filteredHooks]);

  // Highlight search text in a string
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "React Built-in":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "State Management":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Performance":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "DOM Events":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "Responsive":
        return "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400";
      case "Network":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "Timers":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400";
      case "Animation":
        return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400";
      case "Forms":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400";
      case "Utility":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      case "Browser APIs":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "Storage":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "Development":
        return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6">
            <span className="text-2xl">⚛️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            React Hooks Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of custom React hooks that help you build
            better user interfaces. Each hook is thoroughly tested,
            well-documented, and follows React best practices.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search hooks by name, description, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
          {searchQuery && (
            <div className="mt-3 text-sm text-muted-foreground">
              Found {filteredHooks.length} of {hooks.length} hooks
            </div>
          )}
        </div>

        {/* Hooks by Category */}
        <div className="space-y-8">
          {Object.entries(groupedHooks).map(([category, categoryHooks]) => (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}
                >
                  {category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {categoryHooks.length} hook{categoryHooks.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryHooks.map((hook) => (
                  <div
                    key={hook.path}
                    className="group bg-card border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{hook.icon}</span>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {highlightText(hook.name, searchQuery)}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {highlightText(hook.description, searchQuery)}
                      </p>

                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            hook.category
                          )}`}
                        >
                          {hook.category}
                        </span>
                        <Link
                          to={`/hooks/${hook.path}`}
                          className="text-primary hover:text-primary/80 text-sm font-medium transition-colors flex items-center group/link"
                        >
                          Learn More
                          <span className="ml-1 group-hover/link:translate-x-1 transition-transform">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Getting Started Section */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start building better React applications with our comprehensive
              collection of custom hooks. Each hook comes with detailed
              documentation, examples, and TypeScript support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md">
                Installation Guide
              </button>
              <button className="bg-background text-primary border border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HooksIndex;
