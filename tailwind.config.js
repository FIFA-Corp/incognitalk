/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'grey-primary': '#303841',
      'grey-second': '#3A4750',
      'white-primary': '#FFFFFF',
      'white-second': '#EEEEEE',
      'primary': '#00ADB5'
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}