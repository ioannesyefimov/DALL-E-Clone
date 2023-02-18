/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        black: '#000000',
        navy: '#2E0249',
        navy_light: '#570A57',
        navy_lighter: '#A91079',
        purple: '#F806CC',
        orange: '#FFA500',
        "orange-100": '#fee5d2',
        "orange-200": '#fa6',
        "orange-300": "#fba563",
        "orange-700": '#100700'
        
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};