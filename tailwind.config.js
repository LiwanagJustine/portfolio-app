/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 20px -5px rgb(0 0 0 / 0.2)', 
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

