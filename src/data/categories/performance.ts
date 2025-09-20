import type { HookData } from '../hooksData';

export const performanceHooks: HookData[] = [
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
];
