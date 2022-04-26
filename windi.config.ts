import { defineConfig } from 'windicss/helpers'
/* import plugin from 'windicss/plugin'
console.log('plugin: ', plugin) */

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '450px',
        '2sm': '650px',
        med: '768px',
        lg: '950px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1600px',
        '4xl': '1800px',
      },
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
      },
      colors: {
        'bg-body': 'hsl(0, 18%, 96%)',
        blackish: 'hsl(0, 0%, 18%)',
        grey: 'hsl(0, 0%, 44%)',
        'mid-grey': 'hsl(0, 0%, 36%)',
        'light-grey': 'hsl(0, 0%, 87%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        accent: 'hsl(102, 35%, 54%)',
        reddish: 'hsl(359, 84%, 63%)',
        'red-bright': 'hsl(0, 72%, 62%)',
        bluey: 'hsl(206, 99%, 30%)',
      },
    },
  },

  plugins: [
    /* require('windicss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.empty-content': {
          content: "''",
        },
      }
      addUtilities(newUtilities, {
        variants: ['before', 'after'],
      })
    }), */
  ],
})
