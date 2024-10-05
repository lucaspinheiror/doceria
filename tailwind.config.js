/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],             
        
      }, 
      backgroundImage: {
        "hero": "url('img/donut-hero.jpg')",
        'background-escuro': '#353FBA',
      },

    },
  },
  plugins: [],
}

