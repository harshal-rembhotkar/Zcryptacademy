/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#8b5cf6', // Violet 500
          secondary: '#ec4899', // Pink 500
          accent: '#06b6d4', // Cyan 500
          dark: '#0f172a', // Slate 900
          light: '#f8fafc', // Slate 50
        },
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          text: '#f1f5f9',
          muted: '#94a3b8',
        },
        light: {
          bg: '#ffffff',
          card: '#f8fafc',
          text: '#1e293b',
          muted: '#64748b',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.brand.primary'),
              '&:hover': {
                color: theme('colors.brand.secondary'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.brand.accent'),
              '&:hover': {
                color: theme('colors.brand.primary'),
              },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            code: { color: theme('colors.pink.400') },
            blockquote: { borderLeftColor: theme('colors.brand.primary'), color: theme('colors.gray.300') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
