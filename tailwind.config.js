/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '11': '2.75rem',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    }
  },
 
  plugins: [],
  
}

