/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      backgroundImage: {
        dam: "url('/src/assets/amreli_dam.jpg')"
      }
    }
  },
  plugins: []
}
