/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta terracota - cálida y terrosa
        'terracota': {
          50: '#fef6f3',
          100: '#fde9e1',
          200: '#fbd0c3',
          300: '#f7ae9a',
          400: '#f28264',
          500: '#e8633d',
          600: '#d44a24',
          700: '#b03a1b',
          800: '#92321b',
          900: '#792d1c',
        },
        // Paleta sage/salvia - verde suave de plantas
        'sage': {
          50: '#f7f8f5',
          100: '#e8ebe3',
          200: '#d3d9c8',
          300: '#b5bfa4',
          400: '#96a481',
          500: '#7a8a64',
          600: '#6b7a56',
          700: '#556246',
          800: '#46503a',
          900: '#3a4331',
        },
        // Colores complementarios para acentos
        'clay': {
          50: '#faf6f3',
          100: '#f2e8df',
          200: '#e5d1bf',
          300: '#d4b399',
          400: '#c29472',
          500: '#b37a58',
          600: '#a6674c',
          700: '#8a5440',
          800: '#704638',
          900: '#5c3a2f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
