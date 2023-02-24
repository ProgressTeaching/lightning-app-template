const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-pt-aqua",
    "bg-pt-blue",
    "bg-pt-red",
    "bg-pt-yellow",
    "bg-pt-green",
    "bg-pt-green-light",
    "bg-pt-green-dark",
    "bg-pt-limeGreen",
    "bg-pt-gray",
    "bg-pt-gray-dark",
    "bg-pt-gray-dark2",
    "bg-pt-orange",
    "bg-pt-purple",
    "bg-pt-pink",

    "text-pt-aqua",
    "text-pt-blue",
    "text-pt-red",
    "text-pt-yellow",
    "text-pt-green",
    "text-pt-green-light",
    "text-pt-green-dark",
    "text-pt-limeGreen",
    "text-pt-gray",
    "text-pt-gray-dark",
    "text-pt-gray-dark2",
    "text-pt-orange",
    "text-pt-purple",
    "text-pt-pink",

    "sm:grid-cols-2",
    "sm:grid-cols-3",
    "sm:grid-cols-4",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pt: {
          aqua: {
            DEFAULT: "#17a2b8",
          },
          blue: {
            DEFAULT: "#1C84C6",
          },
          red: {
            DEFAULT: "#ed5565",
          },
          yellow: {
            DEFAULT: "#fdcb6e",
          },
          orange: {
            DEFAULT: "#fd7e14",
          },
          green: {
            DEFAULT: "#19b394",
            dark: "#15866f",
            light: "#1ab394",
          },
          limeGreen: {
            DEFAULT: "#5ab328",
          },
          grey: {
            DEFAULT: "#f4f6f9",
            dark: "#d6d8db",
            dark2: "#2F4050",
          },
          pink: {
            DEFAULT: "#db2777",
          },
          purple: {
            DEFAULT: "#4f46e5",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
