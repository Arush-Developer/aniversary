export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        romanticPink: '#ff9fb1',
        roseGold: '#ffd6a5',
        lilac: '#d4c1ff'
      },
      keyframes: {
        floaty: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0)' }
        },
        drift: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)' },
          '100%': { transform: 'translateY(120vh) rotate(360deg)' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        drift: 'drift 12s linear infinite'
      }
    }
  },
  plugins: []
}
