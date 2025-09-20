import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UseLocalStorage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

  // Simulate the hook usage
  const handleStore = () => {
    if (inputValue.trim()) {
      localStorage.setItem('demo-storage', inputValue);
      setStoredValue(inputValue);
      setInputValue('');
    }
  };

  const handleRetrieve = () => {
    const value = localStorage.getItem('demo-storage');
    setStoredValue(value || 'No value stored');
  };

  const handleClear = () => {
    localStorage.removeItem('demo-storage');
    setStoredValue('');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
          <Link to="/hooks" className="hover:text-gray-700">
            Hooks
          </Link>
          <span>/</span>
          <span>useLocalStorage</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">useLocalStorage</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          A React hook that provides a simple way to persist state in localStorage with automatic serialization, error
          handling, and SSR safety.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🔄 Auto-sync</h3>
          <p className="text-gray-600 text-sm">Automatically syncs with localStorage on every change</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🛡️ Error Safe</h3>
          <p className="text-gray-600 text-sm">Gracefully handles localStorage errors and SSR</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">⚡ TypeScript</h3>
          <p className="text-gray-600 text-sm">Full TypeScript support with excellent inference</p>
        </div>
      </div>

      {/* Installation */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Installation</h2>
        <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
          <div>npm install @kalki-ui/hooks</div>
          <div className="mt-2"># or</div>
          <div>yarn add @kalki-ui/hooks</div>
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Usage</h2>
        <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
          <div>import {useLocalStorage} from '@kalki-ui/hooks';</div>
          <div className="mt-2">function MyComponent() {'{'}</div>
          <div className="ml-4">const [value, setValue] = useLocalStorage('my-key', 'default');</div>
          <div className="ml-4">return (</div>
          <div className="ml-8">{'<input value={value} onChange={(e) => setValue(e.target.value)} />'}</div>
          <div className="ml-4">);</div>
          <div>{'}'}</div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <p className="text-gray-600 mb-4">Try storing, retrieving, and clearing values from localStorage:</p>

        <div className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a value to store"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleStore}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Store
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleRetrieve}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Retrieve
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Clear
            </button>
          </div>

          {storedValue && (
            <div className="bg-gray-100 rounded-lg p-4">
              <strong>Stored Value:</strong> {storedValue}
            </div>
          )}
        </div>
      </div>

      {/* API Reference */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">API Reference</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">Parameters</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
              <li>
                <code className="bg-gray-100 px-1 rounded">key</code> - The localStorage key
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded">defaultValue</code> - Initial value if key doesn't exist
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Returns</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
              <li>
                <code className="bg-gray-100 px-1 rounded">[value, setValue]</code> - Current value and setter function
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t border-gray-200">
        <Link to="/hooks" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors">
          ← Back to Hooks
        </Link>
        <Link
          to="/hooks/use-debounce"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          Next: useDebounce →
        </Link>
      </div>
    </div>
  );
};

export default UseLocalStorage;
