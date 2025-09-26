/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "hs1(12, 88%, 59%)",
        brightRedLight: "hs1(12, 88%, 69%)",
        brightRedSupLight: "hs1(12, 88%, 95%)",
        darkBlue: "hs1(228, 39%, 23%)",
        darkGrayishBlue: "hs1(227, 12%, 61%)",
        veryDarkBlue: "hs1(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
