module.exports = {
  purge: {
    enabled: false, // handled by gridsome-plugin-tailwindcss
  },
  theme: {
    extend: {
      colors: {
        // palette generated with https://javisperez.github.io/tailwindcolorshades/#/?Tolopea=2b0447&tv=1
        primary: {
          default: "#2b0447",
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#2b0447",
        },
      },
      rotate: {
        "-5": "-5deg",
        "5": "5deg",
      },
    },
  },
  variants: {},
  plugins: [],
};
