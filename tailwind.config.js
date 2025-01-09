/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        selectionBg: '#FFEB3B', // Custom background color for selected text
        selectionText: '#1A202C', // Custom text color for selected text
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '::selection': {
          backgroundColor: 'var(--tw-selection-bg)',
          color: 'var(--tw-selection-text)',
        },
      });
    },
  ],
}