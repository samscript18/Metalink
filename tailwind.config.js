/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        violetBlue: "hsla(262, 83%, 58%, 1)",
        violetBlue2: "hsla(263, 70%, 50%, 1)",
        oxfordBlue: "hsla(221, 33%, 15%, 1)",
        oxfordBlue2: "hsla(222, 47%, 11%, 1)",
        lightGray: "hsla(216, 12%, 84%, 0.1)",
        cadetGray: "hsla(215, 20%, 65%, 1)",
      },
    },
    screens: {
      xs: "300px",
      ss: "620px",
      sm: "768px",
      md: "1020px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
