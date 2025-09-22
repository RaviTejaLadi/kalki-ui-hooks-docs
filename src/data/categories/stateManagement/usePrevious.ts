export const usePrevious = {
    name: 'usePrevious',
    path: 'use-previous',
    description:
      'A React hook that lets you access the previous value of a prop or state for comparison.',
    category: 'State Management',
    icon: '⬅️',
    installation: 'npm install @kalki-ui/hooks\n# or\nyarn add @kalki-ui/hooks',
    code: `import { usePrevious } from '@kalki-ui/hooks';
  
  function MyComponent({ value }) {
    const prevValue = usePrevious(value);
  
    return <div>Previous: {prevValue}, Current: {value}</div>;
  }`,
    usage:
      'The usePrevious hook returns the value from the previous render. Useful for comparisons or detecting changes.',
    examples: [
      {
        title: 'Track Previous Prop',
        description: 'Compare current and previous props',
        code: `const prevCount = usePrevious(count);`,
      },
      {
        title: 'Detect Value Changes',
        description: 'Trigger effects when a value changes',
        code: `const prevName = usePrevious(name);
  useEffect(() => {
    if (prevName !== name) {
      console.log('Name changed!');
    }
  }, [name, prevName]);`,
      },
    ],
    api: {
      parameters: [
        {
          name: 'value',
          type: 'T',
          description: 'The value you want to track across renders',
          required: true,
        },
      ],
      returns: [
        {
          name: 'previousValue',
          type: 'T | undefined',
          description: 'The value from the previous render, or undefined initially',
        },
      ],
    },
    features: [
      '📜 Tracks state or prop history',
      '🔍 Useful for comparisons',
      '🛡️ Works with any type',
    ],
    tags: ['state', 'previous', 'history', 'compare'],
  };
  