/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {

      colors: {
        'color-botton': '#E09145',
        'color-icono': '#17181D',
      },

    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
