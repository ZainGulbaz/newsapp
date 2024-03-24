/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#ecfeff',
      danger: "#bb2124",
      zinc:"#1f2937",
      gray: {
        50: '#f9fafb',
        700: "#94a3b8"
        // Add other shades of gray as needed
      },
      cyan: {
        400: "#22d3ee",
        800: "#155e75",
        500: "#06b6d4",
        600: "#0891b2"
      },
      teal: {
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488"
      },
      // Add other default colors as needed
      primary: '#000000de',
      secondary: '#f0f9ff'
    },
  },
  plugins: [],
}
