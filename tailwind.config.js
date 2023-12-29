/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      customGray:'#f0f1f1',
      customOrange:'#F97316',
      primary: "#434343",
      secondary: "#2E2E2E",
      white: "#F9F9F9",
    },
  },
  plugins: [],
}

