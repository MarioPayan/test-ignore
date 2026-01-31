/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta terracota - cálida y moderna
        'terracota': {
          50: '#fff8f5',
          100: '#ffebe0',
          200: '#ffd4c2',
          300: '#ffb599',
          400: '#ff8c66',
          500: '#ff6b3d',
          600: '#f04e1f',
          700: '#d43d15',
          800: '#ae3415',
          900: '#8d2e17',
        },
        // Paleta sage/salvia - verde suave contemporáneo
        'sage': {
          50: '#f8faf6',
          100: '#eef2e8',
          200: '#dce5d0',
          300: '#c2d1ae',
          400: '#a6bc88',
          500: '#8ba66c',
          600: '#738a56',
          700: '#5c6d46',
          800: '#4a573a',
          900: '#3e4932',
        },
        // Colores complementarios para acentos
        'clay': {
          50: '#faf8f5',
          100: '#f5ede5',
          200: '#e8d8c7',
          300: '#d9bea3',
          400: '#c9a07d',
          500: '#bd8762',
          600: '#b07256',
          700: '#935e48',
          800: '#784e3e',
          900: '#624134',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        display: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'large': '0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
        'xl': '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 30px rgba(255, 107, 61, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
