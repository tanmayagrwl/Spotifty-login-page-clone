/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      reduce: {
        '1/2': '50%',
        '1/3': '33.33%',
        '1/4': '25%',
        '1/5': '20%',
        

      },
    },
  },
  plugins: [],
}
