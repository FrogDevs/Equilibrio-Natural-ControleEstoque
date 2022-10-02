/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      store1: "url('store1.avif')",
      store2: "url('store2.avif')"
    }
  },
  plugins: []
}
