/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientOpacity: {
        '40': 'rgba(0, 0, 255, 0.4)',
      }
    },
  },
  plugins: [require("daisyui")],
}