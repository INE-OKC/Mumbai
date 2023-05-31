/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans"],
      },
      colors: {
        "light-purple": "rgba(185, 147, 233, 1)",
        "button-color": "rgba(138, 1, 215, 1)",
        "dark-green": "rgba(21, 240, 150, 1)",
        "deep-purple": "rgba(50, 43, 52, 1)",
        "sidebar-color": "rgba(255, 255, 255, 0.2)",
        "search-color": "rgba(33, 35, 39, 0.7)",
        "search-text": "rgba(255, 255, 255, 0.2)",
        "dash-color": "rgba(33, 35, 39, 0.6)",
        "list-color": "rgba(189, 199, 195, 0.2)",
        "button-start": "rgba(149, 202, 214, 1)",
        "button-mid": "rgba(159, 154, 219, 1)",
        "button-end": "rgba(185, 147, 233, 1)",
        "stories-start": "rgba(249, 216, 43, 1)",
        "stories-end": "rgba(203, 100, 197, 1)",
        "blank-color": "rgba(20, 21, 23, 0.1)",
        "sol-first": "rgba(54, 62, 82, 1)",
        "sol-second": "rgba(43, 50, 66, 1)",
      },
      backgroundImage: {
        background: "url('../assets/images/red')",
      },
    },
  },
  plugins: [],
};
