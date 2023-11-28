/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "lemon-accent": "#D0DB58",
        "dark-green": "#364D31",
        "light-green": "#9DBE79",
        accent: "rgb(249, 242, 235)",
        "light-green-2": "#74A343",
        "accent-1": "rgba(255, 255,  255, 0.4)",
        "black-overlay": "rgba(0, 0, 0, 0.35)",
        "black-overlay-light": "rgba(0, 0, 0, 0.05)",
        "accent-white": "rgba( 255, 255, 255, 0.94)",
        "dark-green": "#04322F",
        dark: "rgba(0, 0, 0, 0.15)",
        "accent-2": "rgba(160, 149, 159, 0.1)",
        "carpet-green": "#74A343",
        "accent-green": "#284622",
        "accent-yellow": "#D0DB58",
        primary: "#FFFEF9",
        cream: "rgba(255, 254, 249, 0.97)",
        "black-overlay-2": "rgba(0, 0, 0, 0.5)",
        "accent-green-2": "#FAFAF5",
        "accent-blue": "rgb(24, 121, 185)",
      },

      // backgroundImage: {
      //   "card-image":
      //     "url(https://villagemarkt.com/cdn/shop/files/cllcy9htp00000fl0eqv53n9i.jpg?v=1697468867&width=750)",
      // },
      fontFamily: {
        cooper: "cooper-lt-bt-4",
      },
    },
  },
  plugins: [],
};
