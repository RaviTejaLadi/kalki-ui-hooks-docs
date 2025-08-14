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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-gray-400">404</span>
          </div>
        </div>
        
        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{errorMessage}</h1>
        <p className="text-lg text-gray-600 mb-8">{errorDetails}</p>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Go Home
          </Link>
          
          <Link
            to="/hooks"
            className="inline-block w-full bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Browse Hooks
          </Link>
        </div>
        
        {/* Help Text */}
        <p className="mt-8 text-sm text-gray-500">
          If you believe this is an error, please{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-700 underline">
            contact support
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
