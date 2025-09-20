import type { HookData } from '../hooksData';

export const reactBuiltInHooks: HookData[] = [
  {
    name: 'useState',
    path: 'use-state',
    description: 'Add state variables to functional components with getter and setter.',
    category: 'React Built-in',
    icon: '🔄',
    installation: 'Built into React - no installation required',
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
      'useState is a React Hook that lets you add state to a functional component. It returns an array with the current state value and a function to update it.',
    examples: [
      {
        title: 'Basic Counter',
        description: 'Simple state management for a counter',
        code: `const [count, setCount] = useState(0);`,
      },
      {
        title: 'Form Input',
        description: 'Manage form input state',
        code: `const [inputValue, setInputValue] = useState('');`,
      },
      {
        title: 'Object State',
        description: 'Manage complex object state',
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
          name: 'initialState',
          type: 'S | (() => S)',
          description: 'The initial state value or a function that returns it',
          required: false,
          default: 'undefined',
        },
      ],
      returns: [
        {
          name: 'state',
          type: 'S',
          description: 'The current state value',
        },
        {
          name: 'setState',
          type: '(S | ((S) => S)) => void',
          description: 'Function to update the state value',
        },
      ],
    },
    features: [
      '🔄 State management',
      '⚡ Built-in React Hook',
      '🎯 Simple API',
      '🔄 Re-render on change',
      '🔧 TypeScript support',
    ],
    tags: ['state', 'react', 'built-in', 'core'],
  },
  {
    name: 'useEffect',
    path: 'use-effect',
    description: 'Perform side effects in functional components (mounting, updating, cleanup).',
    category: 'React Built-in',
    icon: '⚡',
    installation: 'Built into React - no installation required',
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
        title: 'API Call on Mount',
        description: 'Fetch data when component mounts',
        code: `useEffect(() => {
  fetchData();
}, []);`,
      },
      {
        title: 'Update on Prop Change',
        description: 'Run effect when specific props change',
        code: `useEffect(() => {
  updateData(userId);
}, [userId]);`,
      },
      {
        title: 'Cleanup on Unmount',
        description: 'Clean up resources when component unmounts',
        code: `useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);`,
      },
    ],
    api: {
      parameters: [
        {
          name: 'effect',
          type: '() => void | (() => void)',
          description: 'The effect function to run',
          required: true,
        },
        {
          name: 'dependencies',
          type: 'any[]',
          description: 'Array of dependencies that trigger the effect',
          required: false,
          default: 'undefined',
        },
      ],
      returns: [
        {
          name: 'undefined',
          type: 'undefined',
          description: "useEffect doesn't return anything",
        },
      ],
    },
    features: [
      '⚡ Side effects',
      '🔄 Lifecycle management',
      '🧹 Automatic cleanup',
      '📊 Dependency tracking',
      '🔧 TypeScript support',
    ],
    tags: ['effect', 'react', 'built-in', 'lifecycle'],
  },
  {
    name: 'useContext',
    path: 'use-context',
    description: 'Access React context values without nesting consumers.',
    category: 'React Built-in',
    icon: '🌐',
    installation: 'Built into React - no installation required',
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
    usage: 'useContext is a React Hook that lets you read and subscribe to context from your component.',
    examples: [
      {
        title: 'Basic Context Usage',
        description: 'Access context value in a component',
        code: `const user = useContext(UserContext);`,
      },
      {
        title: 'Theme Context',
        description: 'Use context for theme management',
        code: `const theme = useContext(ThemeContext);
const isDark = theme === 'dark';`,
      },
      {
        title: 'User Context',
        description: 'Access user information from context',
        code: `const { user, login, logout } = useContext(AuthContext);`,
      },
    ],
    api: {
      parameters: [
        {
          name: 'context',
          type: 'React.Context<T>',
          description: 'The context object returned from createContext',
          required: true,
        },
      ],
      returns: [
        {
          name: 'contextValue',
          type: 'T',
          description: 'The current context value for the context',
        },
      ],
    },
    features: [
      '🌐 Context access',
      '⚡ Built-in React Hook',
      '🔄 Automatic updates',
      '📱 No prop drilling',
      '🔧 TypeScript support',
    ],
    tags: ['context', 'react', 'built-in', 'state'],
  },
  {
    name: 'useCallback',
    path: 'use-callback',
    description: 'Memoize callback functions to prevent unnecessary re-renders.',
    category: 'React Built-in',
    icon: '🧠',
    installation: 'Built into React - no installation required',
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
      'useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed.',
    examples: [
      {
        title: 'Event Handler',
        description: 'Memoize event handlers',
        code: `const handleClick = useCallback(() => {
  console.log('Button clicked');
}, []);`,
      },
      {
        title: 'API Call',
        description: 'Memoize API call functions',
        code: `const fetchData = useCallback(async (id) => {
  const response = await api.getData(id);
  setData(response);
}, []);`,
      },
      {
        title: 'With Dependencies',
        description: 'Memoize with changing dependencies',
        code: `const updateUser = useCallback((userData) => {
  setUser(prev => ({ ...prev, ...userData }));
}, [userId]);`,
      },
    ],
    api: {
      parameters: [
        {
          name: 'callback',
          type: 'T',
          description: 'The function to memoize',
          required: true,
        },
        {
          name: 'dependencies',
          type: 'any[]',
          description: 'Array of dependencies that trigger recreation',
          required: false,
          default: '[]',
        },
      ],
      returns: [
        {
          name: 'memoizedCallback',
          type: 'T',
          description: 'The memoized callback function',
        },
      ],
    },
    features: [
      '🧠 Function memoization',
      '⚡ Performance optimization',
      '🔄 Dependency tracking',
      '📱 Prevents re-renders',
      '🔧 TypeScript support',
    ],
    tags: ['callback', 'react', 'built-in', 'performance'],
  },
  {
    name: 'useReducer',
    path: 'use-reducer',
    description: 'Manage complex state logic with reducer pattern, alternative to useState.',
    category: 'React Built-in',
    icon: '🔧',
  },
  {
    name: 'useMemo',
    path: 'use-memo',
    description: 'Memoize expensive calculations to optimize performance.',
    category: 'React Built-in',
    icon: '💭',
  },
  {
    name: 'useRef',
    path: 'use-ref',
    description: 'Create mutable ref objects for DOM access and persistent values.',
    category: 'React Built-in',
    icon: '📌',
  },
  {
    name: 'useImperativeHandle',
    path: 'use-imperative-handle',
    description: 'Customize the instance value exposed to parent components when using ref.',
    category: 'React Built-in',
    icon: '🎛️',
  },
  {
    name: 'useLayoutEffect',
    path: 'use-layout-effect',
    description: 'Similar to useEffect but fires synchronously after all DOM mutations.',
    category: 'React Built-in',
    icon: '📐',
  },
  {
    name: 'useDebugValue',
    path: 'use-debug-value',
    description: 'Display custom labels for custom hooks in React DevTools.',
    category: 'React Built-in',
    icon: '🐛',
  },
  {
    name: 'useId',
    path: 'use-id',
    description: 'Generate unique IDs for accessibility attributes and form elements.',
    category: 'React Built-in',
    icon: '🆔',
  },
  {
    name: 'useTransition',
    path: 'use-transition',
    description: 'Mark state updates as non-urgent to keep UI responsive during updates.',
    category: 'React Built-in',
    icon: '🔄',
  },
  {
    name: 'useDeferredValue',
    path: 'use-deferred-value',
    description: 'Defer updating part of the UI to keep it responsive during heavy renders.',
    category: 'React Built-in',
    icon: '⏳',
  },
  {
    name: 'useSyncExternalStore',
    path: 'use-sync-external-store',
    description: "Subscribe to external stores while maintaining React's concurrent features.",
    category: 'React Built-in',
    icon: '🔗',
  },
  {
    name: 'useInsertionEffect',
    path: 'use-insertion-effect',
    description: 'Insert CSS-in-JS styles before layout effects run.',
    category: 'React Built-in',
    icon: '🎨',
  },
];
