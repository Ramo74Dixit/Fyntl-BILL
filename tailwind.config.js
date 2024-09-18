/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '210mm': '210mm',
      },
      height: {
        '297mm': '297mm',
      },
    },
  },
  plugins: [],
}
