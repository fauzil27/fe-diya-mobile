/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#08244B",
        basicPage: "#F2E6DA",
        fieldColor: "#F8C300",
      },
      fontFamily: {
        montBold: ["Mont-Bold", "sans-serif"],
        montLight: ["Mont-Light", "sans-serif"],
      },
      textColor: {
        mainColor: "#08244B",
      },
    },
  },
  plugins: [],
};
