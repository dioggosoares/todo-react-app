/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#8284FA',
          500: '#5E60CE',
        },
        secondary: {
          300: '#4EA8DE',
          500: '#1E6F9F',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        danger: {
          500: '#E25858',
        },
      },
      maxWidth: {
        s: '6rem', // 96px
        x: '9rem', // 144px
        x1: '46rem', // 736px
        '1xl': '50rem', // 800px
      },
      screens: {
        '1xl': '90rem', // 1440px
        '3xl': '120rem', // 1920px
      },
    },
  },
  plugins: [],
}
