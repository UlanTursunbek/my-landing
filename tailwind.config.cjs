/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        inFromBot: "appear ease-in-out",
      },
      keyframes: {
        inFromBot: {
          "0%": { transform: "translateY(80px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        inFromRight: {
          "0%": { transform: "translateX(280px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        inFromLeft: {
          "0%": { transform: "translateX(-280px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
