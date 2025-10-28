/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        htNight: "#0B132B",
        htGold: "#F0C75E",
        htSilver: "#E5E5E5"
      }
    }
  },
  plugins: []
}
