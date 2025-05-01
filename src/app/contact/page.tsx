import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Contact Me
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Feel free to reach out to me through the following channels:
        </p>

        <div className="mb-4">
          <strong className="font-medium text-gray-800 dark:text-gray-200">
            Email:
          </strong>
          <a
            href="mailto:youremail@example.com"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors ml-2"
          >
            ahmed.bnhmida@outlook.com
          </a>
        </div>

        <div>
          <strong className="font-medium text-gray-800 dark:text-gray-200">
            LinkedIn:
          </strong>
          <a
            href="https://www.linkedin.com/in/ahmed-benhmida-390393255/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors ml-2"
          >
            linkedin.com/in/your-profile
          </a>
        </div>
      </div>
    </div>
  );
}