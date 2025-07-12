/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Roboto', 'sans-serif'],
        },
        fontSize: {
          'title': ['18px', {
            fontWeight: '700',
          }],
          'body': ['18px', {
            fontWeight: '400',
          }],
        },
      },
    },
    plugins: [],
  }