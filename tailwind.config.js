/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calibri: ["calibri"],
        calibriBold: ["calibriBold"],
        geo1: ["geo1"],
        geo2: ["geo2"],
      },
    },
  },
  plugins: [],
};
