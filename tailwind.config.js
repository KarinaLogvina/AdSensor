/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mob-s': '320px',
        'mob-m': '360px',
        'mob-l': '480px',
        'tab-s': '640px',
        'tab-m': '960px',
        'pc-xs': '1024px',
        'pc-s': '1440px',
        'pc-w': '1920px',
      },
      fontFamily: {
        'serif': 'Montserrat',
      },
      colors: {
        primary: {
          "700": "#010202",
          "600": "#1A1B1B"
        },
        additional: {
          "red": "#F14B4B",
          "green": "#73A011",
          "yellow": "#F1AF4B"
        }
      }
    },
  },
  plugins: [],
}

