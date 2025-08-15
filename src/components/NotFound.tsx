import React from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';

const NotFound: React.FC = () => {
  const error = useRouteError();
  
  let errorMessage = 'Page not found';
  let errorDetails = 'The page you are looking for does not exist.';
  
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = 'Page not found';
      errorDetails = 'The page you are looking for does not exist.';
    } else {
      errorMessage = `Error ${error.status}`;
      errorDetails = error.data?.message || 'Something went wrong.';
    }
  } else if (error instanceof Error) {
    errorMessage = 'Unexpected error';
    errorDetails = error.message;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">
              404
            </span>
          </div>
        </div>
        
        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {errorMessage}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {errorDetails}
        </p>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Go Home
          </Link>
          
          <Link
            to="/hooks"
            className="block w-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            Browse Hooks
          </Link>
        </div>
        
        {/* Help Text */}
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          If you believe this is an error, please{' '}
          <a 
            href="#" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline"
          >
            contact support
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;