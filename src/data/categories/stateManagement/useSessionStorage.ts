export const useSessionStorage = {
    name: 'useSessionStorage',
    path: 'use-session-storage',
    description:
      'A React hook that provides a simple way to persist state in sessionStorage with automatic serialization, error handling, and SSR safety.',
    category: 'State Management',
    icon: '🗂️',
    installation: 'npm install @kalki-ui/hooks\n# or\nyarn add @kalki-ui/hooks',
    code: `import { useSessionStorage } from '@kalki-ui/hooks';
  
  function MyComponent() {
    const [value, setValue] = useSessionStorage('my-key', 'default');
    
    return (
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
    );
  }`,
    usage:
      'The useSessionStorage hook automatically syncs your component state with sessionStorage. It handles serialization, error cases, and provides a clean API similar to useState.',
    examples: [
      {
        title: 'Basic Usage',
        description: 'Store and retrieve a simple string value in sessionStorage',
        code: `const [username, setUsername] = useSessionStorage('username', 'Guest');`,
      },
      {
        title: 'Complex Objects',
        description: 'Store objects with automatic serialization',
        code: `const [user, setUser] = useSessionStorage('user', {
    name: 'Alice',
    loggedIn: true
  });`,
      },
      {
        title: 'Arrays',
        description: 'Persist arrays for the session',
        code: `const [items, setItems] = useSessionStorage('items', []);`,
      },
    ],
    api: {
      parameters: [
        {
          name: 'key',
          type: 'string',
          description: 'The sessionStorage key to use for storage',
          required: true,
        },
        {
          name: 'defaultValue',
          type: 'T',
          description: "Initial value if the key doesn't exist in sessionStorage",
          required: false,
          default: 'undefined',
        },
      ],
      returns: [
        {
          name: 'value',
          type: 'T',
          description: 'Current value from sessionStorage or the default value',
        },
        {
          name: 'setValue',
          type: '(value: T | ((prev: T) => T)) => void',
          description: 'Function to update the value in both state and sessionStorage',
        },
      ],
    },
    features: [
      '🔄 Auto-sync with sessionStorage',
      '🛡️ Error safe and SSR compatible',
      '⚡ TypeScript support',
      '🎯 Automatic serialization',
      '⏳ Data clears automatically when the session ends',
    ],
    tags: ['sessionStorage', 'persistence', 'state', 'storage', 'temporary'],
  };
  