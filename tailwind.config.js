/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070806',
        charcoal: '#11120f',
        ash: '#1b1c18',
        bone: '#f4f1e8',
        gold: '#d6b866',
        moss: '#7da568',
        sage: '#a9b78f'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(214, 184, 102, 0.20)',
        moss: '0 24px 80px rgba(125, 165, 104, 0.20)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui'],
        accent: ['var(--font-bebas)', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
