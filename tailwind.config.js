/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: {
        100: "#cbcbcb",
        200: "#A5A5A5",
        300: "#424242",
      },
      prim: {
        100: "#293c4b",
        200: "#001724",
        300: "#01080E",
      },
      sec: {
        100: "#ff745c",
        200: "#FF3131",
        300: "#a20e0f",
      },
      blue: "#597aff",
      orange: "#ff8f5c",
      green: "#59ff8b",
      red: "#ff597a",
    },
    extend: {
      boxShadow: {
        bs: "0px 4px 10px 0px black",
      },
    },
  },
  plugins: [],
};
