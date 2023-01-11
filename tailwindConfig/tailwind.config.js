/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['iransans'],
        serif: ['iransans'],
        mono: ['iransans'],
        display: ['iransans'],
      },
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        // main coloe
        primary: '#22C55E',
        secondary: '#2A3342',

        // gray color
        gray: {
          50: '#F7F8F9',
          100: '#EEF0F3',
          200: '#D5DAE1',
          300: '#BBC3CF',
          400: '#8896AB',
          500: '#556987',
          600: '#4D5F7A',
          700: '#404F65',
          800: '#333F51',
          900: '#2A3342',
        },

        // green color
        green: {
          50: '#F0FDF4',
          100: '#F0FDF4',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },

        // purple color
        purple: {
          50: '#FBF7FF',
          100: '#F6EEFE',
          200: '#E9D5FD',
          300: '#DCBBFC',
          400: '#C288F9',
          500: '#A855F7',
          600: '#974DDE',
          700: '#7E40B9',
          800: '#653394',
          900: '#522A79',
        },
        // red color
        red: {
          50: '#FEF7F6',
          100: '#FDEEEC',
          200: '#FBD6D0',
          300: '#F9BDB4',
          400: '#F48B7C',
          500: '#EF5944',
          600: '#D7503D',
          700: '#B34333',
          800: '#8F3529',
          900: '#752C21',
        },

        // yellow color
        yellow: {
          50: '#FFFAF3',
          100: '#FEF5E7',
          200: '#FDE7C2',
          300: '#FBD89D',
          400: '#F8BB54',
          500: '#F59E0B',
          600: '#DD8E0A',
          700: '#B87708',
          800: '#935F07',
          900: '#784D05',
        },

        // blue color
        blue: {
          50: '#F5F9FF',
          100: '#EBF3FE',
          200: '#CEE0FD',
          300: '#B1CDFB',
          400: '#76A8F9',
          500: '#3B82F6',
          600: '#3575DD',
          700: '#2C62B9',
          800: '#234E94',
          900: '#1D4079',
        },
      },
    },
  },
  plugins: []
}
