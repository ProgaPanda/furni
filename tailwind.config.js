module.exports = {
  mode: "",
  purge: ["/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('assets/img/wall1.png')",
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
