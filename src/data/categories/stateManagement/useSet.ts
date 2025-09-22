export const useSet = {
    name: 'useSet',
    path: 'use-set',
    description:
      'A React hook to manage a Set data structure with reactive updates and helper methods.',
    category: 'State Management',
    icon: '📦',
    installation: 'npm install @kalki-ui/hooks\n# or\nyarn add @kalki-ui/hooks',
    code: `import { useSet } from '@kalki-ui/hooks';
  
  function MyComponent() {
    const { set, add, has, delete: remove } = useSet<number>();
  
    return (
      <div>
        <button onClick={() => add(1)}>Add 1</button>
        <button onClick={() => remove(1)}>Remove 1</button>
        <p>Has 1: {has(1) ? 'Yes' : 'No'}</p>
      </div>
    );
  }`,
    usage:
      'The useSet hook provides a reactive Set state with convenient methods for adding, removing, toggling, and checking items.',
    examples: [
      {
        title: 'Basic Set',
        description: 'Initialize and add values',
        code: `const { set, add } = useSet([1, 2, 3]);`,
      },
      {
        title: 'Check Membership',
        description: 'Check if a value exists in the set',
        code: `const { has } = useSet<string>();`,
      },
      {
        title: 'Toggle Values',
        description: 'Toggle values in the set',
        code: `const { toggle } = useSet<number>();`,
      },
    ],
    api: {
      parameters: [
        {
          name: 'initialValues',
          type: 'T[] | Set<T>',
          description: 'Initial values for the set',
          required: false,
          default: '[]',
        },
      ],
      returns: [
        { name: 'set', type: 'Set<T>', description: 'Current Set state' },
        { name: 'add', type: '(value: T) => void', description: 'Add value' },
        { name: 'has', type: '(value: T) => boolean', description: 'Check existence' },
        { name: 'delete', type: '(value: T) => boolean', description: 'Delete value' },
        { name: 'toggle', type: '(value: T) => void', description: 'Toggle value' },
        { name: 'clear', type: '() => void', description: 'Clear set' },
        { name: 'size', type: 'number', description: 'Set size' },
        { name: 'values', type: '() => IterableIterator<T>', description: 'Iterator of values' },
        { name: 'toArray', type: '() => T[]', description: 'Convert to array' },
        { name: 'reset', type: '() => void', description: 'Reset to initial values' },
        { name: 'addMultiple', type: '(values: T[] | Set<T>) => void', description: 'Batch add values' },
        { name: 'deleteMultiple', type: '(values: T[] | Set<T>) => void', description: 'Batch delete values' },
        { name: 'isSubsetOf', type: '(other: Set<T>) => boolean', description: 'Check subset' },
        { name: 'isSupersetOf', type: '(other: Set<T>) => boolean', description: 'Check superset' },
      ],
    },
    features: ['📦 Full Set API', '🔄 Reactive updates', '⚡ TypeScript generics'],
    tags: ['set', 'collection', 'state', 'unique'],
  };