import React from 'react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        About Me
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Hello, I'm Ahmed, a passionate full-stack developer from Tunisia. I specialize in building responsive, interactive web applications using modern technologies like React, Node.js, and Tailwind CSS.
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I have a deep interest in creating beautiful, user-friendly websites and applications. With a strong foundation in both frontend and backend technologies, I enjoy solving complex problems and bringing ideas to life on the web.
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs rounded-full">
            React
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs rounded-full">
            Node.js
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs rounded-full">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs rounded-full">
            MongoDB
          </span>
        </div>
      </div>
    </div>
  );
}
