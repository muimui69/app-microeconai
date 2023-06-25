/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'c-guindo':'#B60000',
        'c-guindo-h':'#600010',
        'c-guindo-h1':'#40000B',
        'c-guindo-h2':'#200005',
        'c-negro':'#000000',
        'c-gris-o':'#333333',
        'c-gris-c':'#CCCCCC',
        'c-blanco':'#FFFFFF'
      }
    },
  },
  plugins: [],
}
