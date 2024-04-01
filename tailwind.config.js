/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
      "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
      extend: {
        colors: {
          'athloco' : '#FF5721',
          'coral' : '#FF855C',
          'bgcolor' : '#F6D7B0',
          'black1' : '#1C1C1C',
          'tan' : '#D1B796',
          'timberwolf' : '#D7CDCC',
          'amber' : '#F5BB00',
          'green' : '#499F68',
          'blue' : '#256EFF',
        },
        fontFamily: {
          'pop': ['"Poppins"', 'sans-serif'],
          'pathway': ['"Pathway Gothic One"', 'sans-serif'],
        },
      },
    },
    plugins: [
      require("flowbite/plugin"),
    ],
  }