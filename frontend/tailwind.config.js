/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#8284FA",
        gray700: "#0D0D0D",
        gray400: "#333333",
        gray500: "#262626",
        gray100: "#F2F2F2",
        gray600: "#1A1A1A",
        gray300: "#808080",
        gray200: "#D9D9D9",
        PurpleDark: "#5E60CE",
        blue: "#4EA8DE",
        blueDark: "#1E6F9F",
        gray: "#808080",
      },
    },
  },
  plugins: [],
};
