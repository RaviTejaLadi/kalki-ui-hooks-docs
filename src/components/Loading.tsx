import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-2 border-gray-200 dark:border-gray-700 border-t-blue-600 dark:border-t-blue-400 mb-6"></div>
        
        {/* Loading Text */}
        <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
          Loading...
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please wait while we prepare your content.
        </p>
        
        {/* Progress Bar */}
        <div className="mt-6 w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-1 mx-auto">
          <div 
            className="bg-blue-600 dark:bg-blue-400 h-1 rounded-full animate-pulse" 
            style={{ width: '60%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;