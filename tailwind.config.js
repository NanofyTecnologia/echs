/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e75c4f',
        secondary: '#28375D',
        arsenic: '#39344C',
        lightgray: '#d4d4d4',
        davygray: '#585858',
        dark: '#221f2e',
        aliceBlue: '#F3F6FB',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
