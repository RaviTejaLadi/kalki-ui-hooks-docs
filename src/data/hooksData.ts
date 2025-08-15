export interface HookData {
  name: string;
  path: string;
  description: string;
  category: string;
  icon: string;
  installation?: string;
  code?: string;
  usage?: string;
  examples?: HookExample[];
  api?: HookAPI;
  features?: string[];
  dependencies?: string[];
  tags?: string[];
}

export interface HookExample {
  title: string;
  description: string;
  code: string;
  demo?: React.ComponentType;
}

export interface HookAPI {
  parameters: {
    name: string;
    type: string;
    description: string;
    required: boolean;
    default?: string;
  }[];
  returns: {
    name: string;
    type: string;
    description: string;
  }[];
}

export const hooksData: HookData[] = [
  {
    name: "useLocalStorage",
    path: "use-local-storage",
    description:
      "A React hook that provides a simple way to persist state in localStorage with automatic serialization, error handling, and SSR safety.",
    category: "State Management",
    icon: "💾",
    installation: "npm install @kalki-ui/hooks\n# or\nyarn add @kalki-ui/hooks",
    code: `import { useLocalStorage } from '@kalki-ui/hooks';

function MyComponent() {
  const [value, setValue] = useLocalStorage('my-key', 'default');
  
  return (
    <input 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  );
}`,
    usage:
      "The useLocalStorage hook automatically syncs your component state with localStorage. It handles serialization, error cases, and provides a clean API similar to useState.",
    examples: [
      {
        title: "Basic Usage",
        description: "Store and retrieve a simple string value",
        code: `const [username, setUsername] = useLocalStorage('username', 'Guest');`,
      },
      {
        title: "Complex Objects",
        description: "Store complex objects with automatic serialization",
        code: `const [user, setUser] = useLocalStorage('user', {
  name: 'John',
  preferences: { theme: 'dark' }
});`,
      },
      {
        title: "Arrays",
        description: "Persist array data across sessions",
        code: `const [todos, setTodos] = useLocalStorage('todos', []);`,
      },
    ],
    api: {
      parameters: [
        {
          name: "key",
          type: "string",
          description: "The localStorage key to use for storage",
          required: true,
        },
        {
          name: "defaultValue",
          type: "T",
          description: "Initial value if the key doesn't exist in localStorage",
          required: false,
          default: "undefined",
        },
      ],
      returns: [
        {
          name: "value",
          type: "T",
          description: "Current value from localStorage or the default value",
        },
        {
          name: "setValue",
          type: "(value: T | ((prev: T) => T)) => void",
          description:
            "Function to update the value in both state and localStorage",
        },
      ],
    },
    features: [
      "🔄 Auto-sync with localStorage",
      "🛡️ Error safe and SSR compatible",
      "⚡ TypeScript support",
      "🎯 Automatic serialization",
      "🧹 Cleanup on unmount",
    ],
    tags: ["localStorage", "persistence", "state", "storage"],
  },
  {
    name: "useDebounce",
    path: "use-debounce",
    description:
      "Debounce values and callbacks to optimize performance and reduce unnecessary operations.",
    category: "Performance",
    icon: "⚡",
    installation: "npm install @kalki-ui/hooks\n# or\nyarn add @kalki-ui/hooks",
    code: `import { useDebounce } from '@kalki-ui/hooks';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    // This will only run after 500ms of no typing
    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  
  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}`,
    usage:
      "The useDebounce hook delays the execution of a function or value update until after a specified delay has passed. This is useful for search inputs, API calls, and other operations that shouldn't run on every keystroke.",
    examples: [
      {
        title: "Search Input",
        description: "Debounce search input to avoid excessive API calls",
        code: `const [query, setQuery] = useState('');
const debouncedQuery = useDebounce(query, 300);`,
      },
      {
        title: "Window Resize",
        description: "Debounce window resize events for better performance",
        code: `const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
const debouncedSetSize = useDebounce(setWindowSize, 100);`,
      },
      {
        title: "Form Validation",
        description: "Debounce form validation to avoid excessive checks",
        code: `const [email, setEmail] = useState('');
const debouncedEmail = useDebounce(email, 500);
const isValid = useMemo(() => validateEmail(debouncedEmail), [debouncedEmail]);`,
      },
    ],
    api: {
      parameters: [
        {
          name: "value",
          type: "T",
          description: "The value to debounce",
          required: true,
        },
        {
          name: "delay",
          type: "number",
          description: "The delay in milliseconds",
          required: true,
        },
      ],
      returns: [
        {
          name: "debouncedValue",
          type: "T",
          description:
            "The debounced value that updates after the specified delay",
        },
      ],
    },
    features: [
      "⚡ Performance optimization",
      "🎯 Configurable delay",
      "🔄 Automatic cleanup",
      "📱 Memory efficient",
      "🔧 TypeScript support",
    ],
    tags: ["debounce", "performance", "optimization", "search"],
  },
  {
    name: "useState",
    path: "use-state",
    description:
      "Add state variables to functional components with getter and setter.",
    category: "React Built-in",
    icon: "🔄",
    installation: "Built into React - no installation required",
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
    usage:
      "useState is a React Hook that lets you add state to a functional component. It returns an array with the current state value and a function to update it.",
    examples: [
      {
        title: "Basic Counter",
        description: "Simple state management for a counter",
        code: `const [count, setCount] = useState(0);`,
      },
      {
        title: "Form Input",
        description: "Manage form input state",
        code: `const [inputValue, setInputValue] = useState('');`,
      },
      {
        title: "Object State",
        description: "Manage complex object state",
        code: `const [user, setUser] = useState({
  name: '',
  email: '',
  age: 0
});`,
      },
    ],
    api: {
      parameters: [
        {
          name: "initialState",
          type: "S | (() => S)",
          description: "The initial state value or a function that returns it",
          required: false,
          default: "undefined",
        },
      ],
      returns: [
        {
          name: "state",
          type: "S",
          description: "The current state value",
        },
        {
          name: "setState",
          type: "(S | ((S) => S)) => void",
          description: "Function to update the state value",
        },
      ],
    },
    features: [
      "🔄 State management",
      "⚡ Built-in React Hook",
      "🎯 Simple API",
      "🔄 Re-render on change",
      "🔧 TypeScript support",
    ],
    tags: ["state", "react", "built-in", "core"],
  },
  {
    name: "useEffect",
    path: "use-effect",
    description:
      "Perform side effects in functional components (mounting, updating, cleanup).",
    category: "React Built-in",
    icon: "⚡",
    installation: "Built into React - no installation required",
    code: `import { useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getData();
      setData(result);
    };
    
    fetchData();
    
    // Cleanup function
    return () => {
      // Cancel any pending requests
    };
  }, []); // Empty dependency array = run only on mount
  
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}`,
    usage:
      "useEffect is a React Hook that lets you perform side effects in functional components. It's equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount combined.",
    examples: [
      {
        title: "API Call on Mount",
        description: "Fetch data when component mounts",
        code: `useEffect(() => {
  fetchData();
}, []);`,
      },
      {
        title: "Update on Prop Change",
        description: "Run effect when specific props change",
        code: `useEffect(() => {
  updateData(userId);
}, [userId]);`,
      },
      {
        title: "Cleanup on Unmount",
        description: "Clean up resources when component unmounts",
        code: `useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);`,
      },
    ],
    api: {
      parameters: [
        {
          name: "effect",
          type: "() => void | (() => void)",
          description: "The effect function to run",
          required: true,
        },
        {
          name: "dependencies",
          type: "any[]",
          description: "Array of dependencies that trigger the effect",
          required: false,
          default: "undefined",
        },
      ],
      returns: [
        {
          name: "undefined",
          type: "undefined",
          description: "useEffect doesn't return anything",
        },
      ],
    },
    features: [
      "⚡ Side effects",
      "🔄 Lifecycle management",
      "🧹 Automatic cleanup",
      "📊 Dependency tracking",
      "🔧 TypeScript support",
    ],
    tags: ["effect", "react", "built-in", "lifecycle"],
  },
  {
    name: "useContext",
    path: "use-context",
    description: "Access React context values without nesting consumers.",
    category: "React Built-in",
    icon: "🌐",
    installation: "Built into React - no installation required",
    code: `import { useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button className={\`btn-\${theme}\`}>
      Current theme: {theme}
    </button>
  );
}`,
    usage:
      "useContext is a React Hook that lets you read and subscribe to context from your component.",
    examples: [
      {
        title: "Basic Context Usage",
        description: "Access context value in a component",
        code: `const user = useContext(UserContext);`,
      },
      {
        title: "Theme Context",
        description: "Use context for theme management",
        code: `const theme = useContext(ThemeContext);
const isDark = theme === 'dark';`,
      },
      {
        title: "User Context",
        description: "Access user information from context",
        code: `const { user, login, logout } = useContext(AuthContext);`,
      },
    ],
    api: {
      parameters: [
        {
          name: "context",
          type: "React.Context<T>",
          description: "The context object returned from createContext",
          required: true,
        },
      ],
      returns: [
        {
          name: "contextValue",
          type: "T",
          description: "The current context value for the context",
        },
      ],
    },
    features: [
      "🌐 Context access",
      "⚡ Built-in React Hook",
      "🔄 Automatic updates",
      "📱 No prop drilling",
      "🔧 TypeScript support",
    ],
    tags: ["context", "react", "built-in", "state"],
  },
  {
    name: "useCallback",
    path: "use-callback",
    description:
      "Memoize callback functions to prevent unnecessary re-renders.",
    category: "React Built-in",
    icon: "🧠",
    installation: "Built into React - no installation required",
    code: `import { useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={handleClick} />
    </div>
  );
}`,
    usage:
      "useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed.",
    examples: [
      {
        title: "Event Handler",
        description: "Memoize event handlers",
        code: `const handleClick = useCallback(() => {
  console.log('Button clicked');
}, []);`,
      },
      {
        title: "API Call",
        description: "Memoize API call functions",
        code: `const fetchData = useCallback(async (id) => {
  const response = await api.getData(id);
  setData(response);
}, []);`,
      },
      {
        title: "With Dependencies",
        description: "Memoize with changing dependencies",
        code: `const updateUser = useCallback((userData) => {
  setUser(prev => ({ ...prev, ...userData }));
}, [userId]);`,
      },
    ],
    api: {
      parameters: [
        {
          name: "callback",
          type: "T",
          description: "The function to memoize",
          required: true,
        },
        {
          name: "dependencies",
          type: "any[]",
          description: "Array of dependencies that trigger recreation",
          required: false,
          default: "[]",
        },
      ],
      returns: [
        {
          name: "memoizedCallback",
          type: "T",
          description: "The memoized callback function",
        },
      ],
    },
    features: [
      "🧠 Function memoization",
      "⚡ Performance optimization",
      "🔄 Dependency tracking",
      "📱 Prevents re-renders",
      "🔧 TypeScript support",
    ],
    tags: ["callback", "react", "built-in", "performance"],
  },
  {
    name: "useState",
    path: "use-state",
    description:
      "Add state variables to functional components with getter and setter.",
    category: "React Built-in",
    icon: "🔄",
  },
  {
    name: "useEffect",
    path: "use-effect",
    description:
      "Perform side effects in functional components (mounting, updating, cleanup).",
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
    description:
      "Manage complex state logic with reducer pattern, alternative to useState.",
    category: "React Built-in",
    icon: "🔧",
  },
  {
    name: "useCallback",
    path: "use-callback",
    description:
      "Memoize callback functions to prevent unnecessary re-renders.",
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
    description:
      "Create mutable ref objects for DOM access and persistent values.",
    category: "React Built-in",
    icon: "📌",
  },
  {
    name: "useImperativeHandle",
    path: "use-imperative-handle",
    description:
      "Customize the instance value exposed to parent components when using ref.",
    category: "React Built-in",
    icon: "🎛️",
  },
  {
    name: "useLayoutEffect",
    path: "use-layout-effect",
    description:
      "Similar to useEffect but fires synchronously after all DOM mutations.",
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
    description:
      "Generate unique IDs for accessibility attributes and form elements.",
    category: "React Built-in",
    icon: "🆔",
  },
  {
    name: "useTransition",
    path: "use-transition",
    description:
      "Mark state updates as non-urgent to keep UI responsive during updates.",
    category: "React Built-in",
    icon: "🔄",
  },
  {
    name: "useDeferredValue",
    path: "use-deferred-value",
    description:
      "Defer updating part of the UI to keep it responsive during heavy renders.",
    category: "React Built-in",
    icon: "⏳",
  },
  {
    name: "useSyncExternalStore",
    path: "use-sync-external-store",
    description:
      "Subscribe to external stores while maintaining React's concurrent features.",
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
    description:
      "Persist state in localStorage with automatic serialization and error handling.",
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
    description:
      "Manage boolean state with toggle, set true, and set false functions.",
    category: "State Management",
    icon: "🔀",
  },
  {
    name: "useCounter",
    path: "use-counter",
    description:
      "Manage numeric state with increment, decrement, and reset functions.",
    category: "State Management",
    icon: "🔢",
  },
  {
    name: "useArray",
    path: "use-array",
    description:
      "Manage array state with helper methods like push, remove, and filter.",
    category: "State Management",
    icon: "📋",
  },
  {
    name: "useMap",
    path: "use-map",
    description:
      "Manage Map data structure with reactive updates and helper methods.",
    category: "State Management",
    icon: "🗺️",
  },
  {
    name: "useSet",
    path: "use-set",
    description:
      "Manage Set data structure with reactive updates and helper methods.",
    category: "State Management",
    icon: "📦",
  },

  // Performance Hooks
  {
    name: "useDebounce",
    path: "use-debounce",
    description:
      "Debounce values and callbacks to optimize performance and reduce unnecessary operations.",
    category: "Performance",
    icon: "⚡",
  },
  {
    name: "useThrottle",
    path: "use-throttle",
    description:
      "Throttle values and callbacks to limit the rate of execution.",
    category: "Performance",
    icon: "🚦",
  },
  {
    name: "useWhyDidYouUpdate",
    path: "use-why-did-you-update",
    description:
      "Debug why a component re-rendered by tracking prop and state changes.",
    category: "Performance",
    icon: "🔍",
  },
  {
    name: "useMemoOne",
    path: "use-memo-one",
    description:
      "A more predictable useMemo that only invalidates when dependencies change.",
    category: "Performance",
    icon: "🧠",
  },

  // DOM Events Hooks
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

  // DOM Observation Hooks
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

  // Responsive Design Hooks
  {
    name: "useMediaQuery",
    path: "use-media-query",
    description:
      "React to media query changes for responsive design and conditional rendering.",
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
    description:
      "Get current breakpoint based on window width for responsive layouts.",
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
    description:
      "Create countdown timers with start, pause, and reset functionality.",
    category: "Timers",
    icon: "⏲️",
  },
  {
    name: "useAnimation",
    path: "use-animation",
    description:
      "Handle CSS animations and transitions with JavaScript control.",
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
    description:
      "Manage form state, validation, and submission with minimal boilerplate.",
    category: "Forms",
    icon: "📝",
  },
  {
    name: "useInput",
    path: "use-input",
    description:
      "Manage single input state with onChange handler and reset functionality.",
    category: "Forms",
    icon: "📥",
  },
  {
    name: "useFormValidation",
    path: "use-form-validation",
    description:
      "Add validation logic to forms with error tracking and display.",
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
    description:
      "Check if component is still mounted to prevent state updates on unmounted components.",
    category: "Utility",
    icon: "🔧",
  },
  {
    name: "useUpdateEffect",
    path: "use-update-effect",
    description:
      "useEffect that skips the first render (componentDidUpdate equivalent).",
    category: "Utility",
    icon: "🔄",
  },
  {
    name: "useMount",
    path: "use-mount",
    description:
      "Execute callback only when component mounts (componentDidMount equivalent).",
    category: "Utility",
    icon: "🚀",
  },
  {
    name: "useUnmount",
    path: "use-unmount",
    description:
      "Execute cleanup callback when component unmounts (componentWillUnmount equivalent).",
    category: "Utility",
    icon: "🗑️",
  },
  {
    name: "useDeepCompareEffect",
    path: "use-deep-compare-effect",
    description:
      "useEffect with deep comparison of dependencies instead of shallow comparison.",
    category: "Utility",
    icon: "🔍",
  },
  {
    name: "useIsFirstRender",
    path: "use-is-first-render",
    description:
      "Determine if the current render is the first render of the component.",
    category: "Utility",
    icon: "1️⃣",
  },
  {
    name: "useRenderCount",
    path: "use-render-count",
    description:
      "Track how many times a component has rendered for debugging purposes.",
    category: "Utility",
    icon: "#️⃣",
  },
  {
    name: "useLatest",
    path: "use-latest",
    description:
      "Get the latest value of a variable that persists across renders.",
    category: "Utility",
    icon: "📍",
  },

  // Browser API Hooks
  {
    name: "useGeolocation",
    path: "use-geolocation",
    description:
      "Access device geolocation with error handling and loading states.",
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
    description:
      "Track when the page becomes visible or hidden (tab switching).",
    category: "Browser APIs",
    icon: "👁️",
  },
  {
    name: "useIdle",
    path: "use-idle",
    description:
      "Detect when user becomes idle based on mouse/keyboard activity.",
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
    description:
      "Use Web Share API to share content natively on supported devices.",
    category: "Browser APIs",
    icon: "📤",
  },

  // Storage & Persistence Hooks
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

  // Development & Debug Hooks
  {
    name: "useLogger",
    path: "use-logger",
    description:
      "Log component renders, props, and state changes for debugging.",
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

export const getHookByPath = (path: string): HookData | undefined => {
  return hooksData.find((hook) => hook.path === path);
};

export const getHooksByCategory = (category: string): HookData[] => {
  return hooksData.filter((hook) => hook.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(hooksData.map((hook) => hook.category))];
};
