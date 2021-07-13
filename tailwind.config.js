// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
