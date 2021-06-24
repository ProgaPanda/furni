module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('assets/img/wall1.png')",
        foteuh: "url('assets/img/foteuh.png')",
      }),

      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
