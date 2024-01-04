/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#ff7a7a',
        'primary-green': '#38cc8c',
        'accent-blue': '#6055a5',
        'dark-blue': '#3e3c49',
        'gray-blue': '#b9b6d3'
      }
    },
  },
  plugins: [],
}

