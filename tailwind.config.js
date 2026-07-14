/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        volt: {
          purple: "#502379",
          dark: "#421C60",
          darkest: "#28113D",
          lime: "#D6FF1D",
          blue: "#82D0F4",
          orange: "#FDC220",
          green: "#1BBE6F",
          turquoise: "#72CAEF",
          pink: "#FA1E78",
        },
      },
      fontFamily: {
        sans: ['Ubuntu', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'volt-gradient': 'linear-gradient(180deg, #28113D 0%, #502370 100%)',
      },
    },
  },
  plugins: [],
};
