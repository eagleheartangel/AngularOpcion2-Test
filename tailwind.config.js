/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Josefin: ["'Josefin Sans'", "sans-serif"],
      madi: ["'Ms Madi'", "cursive"],
      Alata: ["Alata", "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1792px",
      // => @media (min-width: 1792) { ... }

      "4xl": "2048px",
      // => @media (min-width: 2048) { ... }

      "5xl": "2304px",
      // => @media (min-width: 2048) { ... }

      "6xl": "2560px",
      // => @media (min-width: 2048) { ... }

      "7xl": "2816px",
      // => @media (min-width: 2048) { ... }
    },
    extend: {
      colors: {
        customD: {
          first: "#513252",
          second: "#7A4069",
          third: "#CA4E79",
          four: "#FFC18E",
        },
        customW: {
          first: "#0C356A",
          second: "#1581ED",
          third: "#FFC18E",
          four: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
