/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "bandPrimary": '#77037B',
        // "bandSecondary": '#210062',
        // "bandTernary": "#009FBD",
        // "bandFont": "#F9E2AF"
        "bandPrimary": '#003566',
        "bandSecondary": '#001d3d',
        "bandTernary": "#000814",
        "bandFont": "#F9E2AF",
        "bandOrange": "#ffc300",
        "bandYellow": "#ffd60a"
        // ...
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake'
    ],
  },
}

