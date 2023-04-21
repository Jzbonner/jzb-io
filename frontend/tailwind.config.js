/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/global/**/*.{js,ts,jsx,tsx}',
    './src/helperComponents/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        footer: '#EEEEEE',
        cyan: '#79FFE1',
        primary: '#e9f3ff',
        secondary: '#bfc8d58C',
        tertiary: '#585858',
        foreground: '#a3bbb6',
        backdrop: '#B2B2B2',
        accent: '#93a9a4',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        hind: ['Hind', 'sans-serif'],
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'card-pattern': "url('https://bit.ly/3UZlZZe')",
        'poly-grid': "url('https://bit.ly/41Kn7Sw')",
        'layered-steps': "url('https://bit.ly/40tPkMg')",
        'layered-waves': "url('https://bit.ly/41KvtJS')",
      },
    },
  },
  plugins: [],
};
