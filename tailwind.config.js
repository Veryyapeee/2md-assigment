module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      600: "600px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
