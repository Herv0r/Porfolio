/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#171a21",
      secondary: "#66c0f4",
      tertiary: "#1b2838",
      "custom1": "#2a475e",
      "custom2": "#c7d5e0",
      "marin-transparent": 'rgba(27, 40, 56, 0.900)',
      "bmarin-transparent": 'rgba(42, 74, 94, 0.100)',
    },
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        fredoka: ['Fredoka'],
        nunito: ['Nunito'],
      },
    },
  },
  plugins: [],
}

