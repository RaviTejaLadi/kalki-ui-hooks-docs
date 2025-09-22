export const useArray = {
    name: 'useArray',
    path: 'use-array',
    description:
      'A React hook to manage array state with helper methods like push, remove, insert, and clear.',
    category: 'State Management',
    icon: '📋',
    installation: 'npm install @kalki-ui/hooks\n# or\nyarn add @kalki-ui/hooks',
    code: `import { useArray } from '@kalki-ui/hooks';
  
  function MyComponent() {
    const { array, push, remove, clear } = useArray([1, 2, 3]);
  
    return (
      <div>
        <p>{array.join(', ')}</p>
        <button onClick={() => push(4)}>Add 4</button>
        <button onClick={() => remove(0)}>Remove First</button>
        <button onClick={clear}>Clear</button>
      </div>
    );
  }`,
    usage:
      'The useArray hook provides a full set of methods for managing arrays in state while keeping immutability.',
    examples: [
      {
        title: 'Push Items',
        description: 'Append items to the array',
        code: `const { array, push } = useArray<number>([]);`,
      },
      {
        title: 'Remove by Index',
        description: 'Remove items at a specific index',
        code: `const { array, remove } = useArray([1, 2, 3]);`,
      },
      {
        title: 'Insert at Index',
        description: 'Insert items at a specific index',
        code: `const { array, insert } = useArray(['a', 'b']);`,
      },
    ],
    api: {
      parameters: [
        {
          name: 'initialArray',
          type: 'T[]',
          description: 'Initial array state',
          required: false,
          default: '[]',
        },
      ],
      returns: [
        { name: 'array', type: 'T[]', description: 'Current array state' },
        { name: 'set', type: '(newArray: T[]) => void', description: 'Replace entire array' },
        { name: 'push', type: '(item: T) => void', description: 'Append item' },
        { name: 'pop', type: '() => T | undefined', description: 'Remove last item' },
        { name: 'unshift', type: '(item: T) => void', description: 'Add item to start' },
        { name: 'shift', type: '() => T | undefined', description: 'Remove first item' },
        { name: 'remove', type: '(index: number) => void', description: 'Remove item at index' },
        { name: 'insert', type: '(index: number, item: T) => void', description: 'Insert at index' },
        { name: 'update', type: '(index: number, item: T) => void', description: 'Update at index' },
        { name: 'clear', type: '() => void', description: 'Clear array' },
        { name: 'filter', type: '(fn: (item: T, index: number) => boolean) => void', description: 'Filter array' },
        { name: 'replace', type: '(oldItem: T, newItem: T) => void', description: 'Replace item' },
        { name: 'reset', type: '() => void', description: 'Reset to initial array' },
      ],
    },
    features: [
      '📋 Rich array methods',
      '🧹 Immutability ensured',
      '⚡ Type-safe operations',
    ],
    tags: ['array', 'list', 'collection', 'state'],
  };