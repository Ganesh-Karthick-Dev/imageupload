/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js,tsx,ts}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'primary' : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

