export const useLocalStorage = {
  name: 'useLocalStorage',
  path: 'use-local-storage',
  description:
    'A React hook that provides a simple way to persist state in localStorage with automatic serialization, error handling, and SSR safety.',
  category: 'State Management',
  icon: '💾',
  installation: 'npm install @kalki-ui/hooks\n# or\nyarn add @kalki-ui/hooks',
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
    'The useLocalStorage hook automatically syncs your component state with localStorage. It handles serialization, error cases, and provides a clean API similar to useState.',
  examples: [
    {
      title: 'Basic Usage',
      description: 'Store and retrieve a simple string value',
      code: `const [username, setUsername] = useLocalStorage('username', 'Guest');`,
    },
    {
      title: 'Complex Objects',
      description: 'Store complex objects with automatic serialization',
      code: `const [user, setUser] = useLocalStorage('user', {
  name: 'John',
  preferences: { theme: 'dark' }
});`,
    },
    {
      title: 'Arrays',
      description: 'Persist array data across sessions',
      code: `const [todos, setTodos] = useLocalStorage('todos', []);`,
    },
  ],
  api: {
    parameters: [
      {
        name: 'key',
        type: 'string',
        description: 'The localStorage key to use for storage',
        required: true,
      },
      {
        name: 'defaultValue',
        type: 'T',
        description: "Initial value if the key doesn't exist in localStorage",
        required: false,
        default: 'undefined',
      },
    ],
    returns: [
      {
        name: 'value',
        type: 'T',
        description: 'Current value from localStorage or the default value',
      },
      {
        name: 'setValue',
        type: '(value: T | ((prev: T) => T)) => void',
        description: 'Function to update the value in both state and localStorage',
      },
    ],
  },
  features: [
    '🔄 Auto-sync with localStorage',
    '🛡️ Error safe and SSR compatible',
    '⚡ TypeScript support',
    '🎯 Automatic serialization',
    '🧹 Cleanup on unmount',
  ],
  tags: ['localStorage', 'persistence', 'state', 'storage'],
};
