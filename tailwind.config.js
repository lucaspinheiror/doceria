/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],             
        
      }, 
      backgroundImage: {
        "hero": "url('/src/img/donut-hero.jpg')",
        'background-escuro': '#353FBA',
      },
      colors: {
        // 'my-font-escuro': '#263A8D',
        // 'my-font-claro': '#',
      },
    },
  },
  plugins: [],
}

