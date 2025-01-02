/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        styleScript: ['"Style Script"', 'cursive'],
      },
      fontSize: {
        '12xl': '12rem',
      },
      minWidth: {
        '830': '830px',
        '600': '600px',
      },
      minHeight: {
        '700': '700px',
        '830': '830px',
      },
      width: {
        '230': '230px',
        '225': '225px',
        '200': '200px',
        '600': '600px',
      },
      height: {
        '300': '300px',
      }
    },
    screens: {
      xxl: "1400px"
    },
  },
  plugins: [],
}

