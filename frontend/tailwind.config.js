/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "purple": '#8284FA',
      "PurpleDark": "#5E60CE",
      "blue": "#4EA8DE",
      "blueDark": "#1E6F9F",
      "gray": "#808080",
  },
    extend: {},
  },
  plugins: [],
}