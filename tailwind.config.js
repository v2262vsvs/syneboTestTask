/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    'BrightBlue':'hsl(220, 98%, 61%)',
    'linear-gradient-from':'hsl(192, 100%, 67%)',
    'linear-gradient-to':'hsl(280, 87%, 65%)',


    "lighttheme":{
      VeryLightGray:'hsl(0, 0%, 98%)',
      VeryLightGrayishBlue:'hsl(236, 33%, 92%)',
      LightGrayishBlue:'hsl(233, 11%, 84%)',
      DarkGrayishBlue:'hsl(236, 9%, 61%)',
    },
    "darktheme":{
      VeryDarkBlue: 'hsl(235, 21%, 11%)',
      VeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
      LightGrayishBlue: 'hsl(234, 39%, 85%)',
      LightGrayishBlueHover: 'hsl(236, 33%, 92%)',
      DarkGrayishBlue: 'hsl(234, 11%, 52%)',
      //VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
      VeryDarkGrayishBlue: 'hsl(237, 14%, 26%)',
    },
    
  },
}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:colors,
      display: ["group-hover"],
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        josefin: ["Josefin Sans"],
      },
    },
    screens: {
      'xs' : '375px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    
  },
  
  plugins: [],
}
