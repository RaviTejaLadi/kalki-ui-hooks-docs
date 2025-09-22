export const useMap = {
    name: 'useMap',
    path: 'use-map',
    description:
      'A React hook to manage a Map data structure with reactive updates and helper methods.',
    category: 'State Management',
    icon: '🗺️',
    installation: 'npm install @kalki-ui/hooks\n# or\nyarn add @kalki-ui/hooks',
    code: `import { useMap } from '@kalki-ui/hooks';
  
  function MyComponent() {
    const { map, set, get, delete: remove } = useMap<string, number>();
  
    return (
      <div>
        <button onClick={() => set('a', 1)}>Set A</button>
        <button onClick={() => remove('a')}>Delete A</button>
        <p>Value for A: {get('a')}</p>
      </div>
    );
  }`,
    usage:
      'The useMap hook provides a reactive Map state with convenient methods for managing entries.',
    examples: [
      {
        title: 'Basic Map',
        description: 'Initialize and set values',
        code: `const { map, set } = useMap([['key1', 'value1']]);`,
      },
      {
        title: 'Retrieve Values',
        description: 'Get values by key',
        code: `const { get } = useMap<string, number>();`,
      },
      {
        title: 'Delete Entries',
        description: 'Remove entries by key',
        code: `const { delete: remove } = useMap<string, number>();`,
      },
    ],
    api: {
      parameters: [
        {
          name: 'initialEntries',
          type: '[K, V][] | Map<K, V>',
          description: 'Initial map entries',
          required: false,
          default: '[]',
        },
      ],
      returns: [
        { name: 'map', type: 'Map<K, V>', description: 'Current Map state' },
        { name: 'set', type: '(key: K, value: V) => void', description: 'Set a key-value pair' },
        { name: 'get', type: '(key: K) => V | undefined', description: 'Get value by key' },
        { name: 'has', type: '(key: K) => boolean', description: 'Check if key exists' },
        { name: 'delete', type: '(key: K) => boolean', description: 'Delete key' },
        { name: 'clear', type: '() => void', description: 'Clear map' },
        { name: 'size', type: 'number', description: 'Map size' },
        { name: 'keys', type: '() => IterableIterator<K>', description: 'Iterator of keys' },
        { name: 'values', type: '() => IterableIterator<V>', description: 'Iterator of values' },
        { name: 'entries', type: '() => IterableIterator<[K, V]>', description: 'Iterator of entries' },
        { name: 'reset', type: '() => void', description: 'Reset to initial entries' },
        { name: 'setMultiple', type: '(entries: [K, V][] | Map<K, V>) => void', description: 'Batch set entries' },
      ],
    },
    features: ['🗺️ Full Map API', '🔄 Reactive updates', '⚡ TypeScript generics'],
    tags: ['map', 'collection', 'state', 'key-value'],
  };