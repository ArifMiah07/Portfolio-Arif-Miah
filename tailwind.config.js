/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|blue|green|yellow|purple|pink|gray|rose|fuchsia|violet|indigo|sky|cyan|teal|emerald|lime|amber|orange)-[1-9]00/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        'bungee-tint': ['"Bungee Tint"', 'serif'],
        'inter': ['"Inter"', 'serif'],
        'lato': ['"Lato"', 'serif'],
        'matemasie': ['"Matemasie"', 'serif'],
        'merriweather': ['"Merriweather"', 'serif'],
        'montserrat': ['"Montserrat"', 'serif'],
        'new-amsterdam': ['"New Amsterdam"', 'serif'],
        'open-sans': ['"Open Sans"', 'serif'],
        'playfair-display': ['"Playfair Display"', 'serif'],
        'poppins': ['"Poppins"', 'serif'],
        'raleway': ['"Raleway"', 'serif'],
        'roboto': ['"Roboto"', 'serif'],
        'laila': ['"Laila"', 'serif'],
        'playwrite-au-sa': ['"Playwrite AU SA"', 'serif'],
      },
      colors: {
        selectionBg: '#fff', // Custom background color for selected text
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