module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        bluegray_900: "#2c2b2b",
        gray_500: "#9d9d9d",
        gray_900: "#1d1d1d",
        bluegray_100: "#d9d9d9",
        deep_purple_600: "#5843ad",
        white_A700: "#ffffff",
        pink_400: "#d93570",
        purple_400: "#b835d9",
      },
      borderRadius: {
        radius20: "20px",
        radius30: "30px",
        radius40: "40px",
        radius95: "95px",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#5843ad,#b835d9,#d93570)",
        gradient1: "linear-gradient(225deg ,#1d1d1d,#2c2b2b)",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
