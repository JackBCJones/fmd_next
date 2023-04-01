/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popp: ["Poppins", 'sans-serif']
      },
      colors: {

        background: {
          1: '#CDD7E0'
        },
        primary: {
          1: 'hsl(205, 86%, 17%)',
        2: 'hsl(205, 77%, 27%)',
        3: 'hsl(205, 72%, 37%)',
        4: 'hsl(205, 63%, 48%)',
        5: 'hsl(205, 78%, 60%)',
        6: 'hsl(205, 89%, 70%)',
        7: 'hsl(205, 90%, 76%)',
        8: 'hsl(205, 86%, 81%)',
        9: 'hsla(205, 90%, 76%, 0.303)',
        10: 'hsl(205, 100%, 96%)',
        },
        grey: {
          1: 'hsl(209, 61%, 16%)',
          2: 'hsl(211, 39%, 23%)',
          3: 'hsl(209, 34%, 30%)',
          4: 'hsl(209, 28%, 39%)',
          5: 'hsl(210, 22%, 49%)',
          6: 'hsl(209, 23%, 60%)',
          7: 'hsl(211, 27%, 70%)',
          8: 'hsl(210, 31%, 80%)',
          9: 'hsl(212, 10%, 74%)',
          10: 'hsl(210, 36%, 96%)',

        },
        
        white: '#fff',
        black: '#222',
      }
    },
  },
  plugins: [],
}

