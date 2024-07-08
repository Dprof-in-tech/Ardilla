/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'purple-all': '0 15px 5rem  rgba(128, 90, 213, 0.5)'
      },
      backgroundImage: {
        'access-bg': "url('assets/accessbg.svg')",
        'interestbg': "url('assets/interestbg.svg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      },
      transitionProperty: {
        'height': 'height'
      },
      transform: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {
      transform: ['hover'],
      scale: ['hover'],
      opacity: ['hover'],
      transitionProperty: ['hover'],
    },
  },

  plugins: [],
}
