import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UseDebounce: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [searchCount, setSearchCount] = useState(0);

  // Simulate debounced search
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
      if (inputValue.trim()) {
        setSearchCount(prev => prev + 1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
          <Link to="/hooks" className="hover:text-gray-700">Hooks</Link>
          <span>/</span>
          <span>useDebounce</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">useDebounce</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          A React hook that debounces values and callbacks to optimize performance 
          and reduce unnecessary operations like API calls or expensive computations.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">⚡ Performance</h3>
          <p className="text-gray-600 text-sm">Reduces unnecessary API calls and re-renders</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 Configurable</h3>
          <p className="text-gray-600 text-sm">Customizable delay and options</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🔄 Auto-cleanup</h3>
          <p className="text-gray-600 text-sm">Automatically cleans up timers</p>
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
          <div>import { useDebounce } from '@kalki-ui/hooks';</div>
          <div className="mt-2">function SearchComponent() {'{'}</div>
          <div className="ml-4">const [query, setQuery] = useState('');</div>
          <div className="ml-4">const debouncedQuery = useDebounce(query, 500);</div>
          <div className="ml-4">// debouncedQuery will update 500ms after query stops changing</div>
          <div className="ml-4">return (</div>
          <div className="ml-8">{'<input value={query} onChange={(e) => setQuery(e.target.value)} />'}</div>
          <div className="ml-4">);</div>
          <div>{'}'}</div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <p className="text-gray-600 mb-4">
          Type in the input below to see debouncing in action. The debounced value will update 500ms after you stop typing:
        </p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input Value (updates immediately):
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Start typing..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Debounced Value (updates after 500ms delay):
            </label>
            <div className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md">
              {debouncedValue || 'No value yet...'}
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm text-blue-800">
              <strong>Search Count:</strong> {searchCount} 
              {searchCount > 0 && (
                <span className="ml-2">
                  (This would be an API call in a real app)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">API Reference</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">Parameters</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
              <li><code className="bg-gray-100 px-1 rounded">value</code> - The value to debounce</li>
              <li><code className="bg-gray-100 px-1 rounded">delay</code> - Delay in milliseconds (default: 500)</li>
              <li><code className="bg-gray-100 px-1 rounded">options</code> - Optional configuration object</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Returns</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
              <li><code className="bg-gray-100 px-1 rounded">debouncedValue</code> - The debounced value</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t border-gray-200">
        <Link
          to="/hooks/use-local-storage"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          ← Previous: useLocalStorage
        </Link>
        <Link
          to="/hooks"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          Back to Hooks
        </Link>
      </div>
    </div>
  );
};

export default UseDebounce;
