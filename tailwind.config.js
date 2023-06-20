/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bandPrimary": '#77037B',
        "bandSecondary": '#210062',
        "bandTernary": "#009FBD",
        "bandFont": "#F9E2AF"
        // ...
      },
    },
  },
  plugins: [require("daisyui")],
}

