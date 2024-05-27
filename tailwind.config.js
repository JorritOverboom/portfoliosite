/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'china': "url('./Pictures/jorritlandschap_high.jpg')",
        'bali': "url('./Pictures/bali_sunset.jpg')",
        'gradientToTop': 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))',
      },
      backgroundSize: {
        'day': 'auto 130%',
        'night': 'auto 165%',
      },
      fontFamily: {
        spaceGrotesk: ['Space Grotesk'],
      },
      colors: {
        customBlue: 'RGB(98,195,219)',
      }
    },
  },
  plugins: [],
}