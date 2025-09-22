export const useToggle = {
    name: 'useToggle',
    path: 'use-toggle',
    description:
      'A React hook to manage boolean state with helper functions to toggle, set true, or set false.',
    category: 'State Management',
    icon: '🔀',
    installation: 'npm install @kalki-ui/hooks\n# or\nyarn add @kalki-ui/hooks',
    code: `import { useToggle } from '@kalki-ui/hooks';
  
  function MyComponent() {
    const { value, toggle, setTrue, setFalse } = useToggle(false);
  
    return (
      <div>
        <p>{value ? 'ON' : 'OFF'}</p>
        <button onClick={toggle}>Toggle</button>
        <button onClick={setTrue}>Turn On</button>
        <button onClick={setFalse}>Turn Off</button>
      </div>
    );
  }`,
    usage:
      'The useToggle hook provides a simple API to control boolean values with toggle, setTrue, and setFalse helpers.',
    examples: [
      {
        title: 'Basic Toggle',
        description: 'Switch between true and false',
        code: `const { value, toggle } = useToggle();`,
      },
      {
        title: 'Explicit Control',
        description: 'Use setTrue and setFalse for clarity',
        code: `const { value, setTrue, setFalse } = useToggle(false);`,
      },
    ],
    api: {
      parameters: [
        {
          name: 'initialValue',
          type: 'boolean',
          description: 'Initial state value',
          required: false,
          default: 'false',
        },
      ],
      returns: [
        { name: 'value', type: 'boolean', description: 'The current boolean value' },
        { name: 'toggle', type: '() => void', description: 'Flip the boolean value' },
        { name: 'setTrue', type: '() => void', description: 'Set value to true' },
        { name: 'setFalse', type: '() => void', description: 'Set value to false' },
        {
          name: 'setValue',
          type: '(newValue: boolean) => void',
          description: 'Manually set the value',
        },
      ],
    },
    features: [
      '🔀 Easy boolean state',
      '⚡ One-liner toggle',
      '🛡️ TypeScript support',
    ],
    tags: ['toggle', 'boolean', 'state', 'switch'],
  };