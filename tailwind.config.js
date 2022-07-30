/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dblue: {
          100: 'hsl(209, 23%, 22%)',
          200: 'hsl(207, 26%, 17%)',
          300: 'hsl(200, 15%, 8%)'
        },
        mgray: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(0, 0%, 98%)',
          300: 'hsl(0, 0%, 52%)'
        }
      },
	  boxShadow: {
		'outer': 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;'
	  }
    },
  },
  plugins: [],
}
