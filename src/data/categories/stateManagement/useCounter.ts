export const useCounter = {
    name: 'useCounter',
    path: 'use-counter',
    description:
      'A React hook to manage numeric state with increment, decrement, and reset helpers.',
    category: 'State Management',
    icon: '🔢',
    installation: 'npm install @kalki-ui/hooks\n# or\nyarn add @kalki-ui/hooks',
    code: `import { useCounter } from '@kalki-ui/hooks';
  
  function MyComponent() {
    const { count, increment, decrement, reset } = useCounter(0);
  
    return (
      <div>
        <p>{count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }`,
    usage:
      'The useCounter hook provides a numeric state with common operations like increment, decrement, and reset. It supports bounds and step size.',
    examples: [
      {
        title: 'Basic Counter',
        description: 'Simple counter with increment and decrement',
        code: `const { count, increment, decrement } = useCounter(0);`,
      },
      {
        title: 'With Bounds',
        description: 'Restrict counter between min and max values',
        code: `const { count, increment } = useCounter(0, { min: 0, max: 10 });`,
      },
      {
        title: 'Step Size',
        description: 'Increment or decrement by a custom step',
        code: `const { count, increment } = useCounter(0, { step: 5 });`,
      },
    ],
    api: {
      parameters: [
        {
          name: 'initialValue',
          type: 'number',
          description: 'Initial counter value',
          required: false,
          default: '0',
        },
        {
          name: 'options',
          type: '{ min?: number, max?: number, step?: number }',
          description: 'Optional configuration for bounds and step size',
          required: false,
        },
      ],
      returns: [
        { name: 'count', type: 'number', description: 'Current counter value' },
        { name: 'increment', type: '() => void', description: 'Increase by step' },
        { name: 'decrement', type: '() => void', description: 'Decrease by step' },
        { name: 'set', type: '(value: number) => void', description: 'Set counter to a value' },
        { name: 'reset', type: '() => void', description: 'Reset to initial value' },
      ],
    },
    features: ['➕ Increment', '➖ Decrement', '🔄 Reset', '⚡ Step & bounds support'],
    tags: ['counter', 'number', 'state', 'increment', 'decrement'],
  };