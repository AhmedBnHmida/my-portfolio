/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This is crucial
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}