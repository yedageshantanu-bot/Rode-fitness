/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        charcoal: '#121212',
        panel: 'rgba(18,18,18,0.72)',
        accent: '#ff8a3d',
        electric: '#4da3ff'
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 138, 61, 0.22)',
        glowBlue: '0 0 40px rgba(77, 163, 255, 0.22)'
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'mesh-dark': 'radial-gradient(circle at top, rgba(255,138,61,0.18), transparent 34%), radial-gradient(circle at 80% 20%, rgba(77,163,255,0.14), transparent 22%), linear-gradient(180deg, #0a0a0a 0%, #121212 48%, #0a0a0a 100%)'
      }
    }
  },
  plugins: []
};