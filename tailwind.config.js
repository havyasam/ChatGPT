/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textgrey': 'rgb(47, 47, 47)', // Custom RGB color
        'sidegrey':'rgb(23, 23, 23)',
        'bodygrey':'rgb(33,33,33)',
        'chatgpt-gray': 'rgb(115, 121, 128)',
        'textclr':'rgb(183,183,183)',
        'txtclr':'rgb(180,180,180)',
        'tclr':'rgb(236,236,236)'

         // Example for secondary text color
      },
    },
  },
  plugins: [],
}