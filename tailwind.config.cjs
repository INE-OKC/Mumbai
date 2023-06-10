module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
