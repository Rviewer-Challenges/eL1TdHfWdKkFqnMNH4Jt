/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-red": "#FF0000",
        "color-white": "#ffffff",
        "color-black": "#000000",
        "color-blue": "#1c9bef",
        "color-grey": "#696969",
        "color-bluedark": "#0d3ef1",
        "color-borderheader": "#1b92e2",
        "color-hoverheader": "#1F1F1F",
        "color-borderwebsite": "#181a1b",
        "color-grey-light": "rgb(113, 118, 123)",
        "color-blueT": "oklch(31.77% 0.1 256.24 / 41.63%)",
        "color-notborder": "#6a6f72",
      },
    },
  },
  plugins: [],
};
