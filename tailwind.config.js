/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        familyBlue: {
          light: '#dbeafe',
          soft: '#cfe0fb',
          title: '#1e3a8a',
          button: '#1c4482',
          buttonHover: '#153364',
        },
        footerGrey: '#9ca3af',
        headerDark: '#121212',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
