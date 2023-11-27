/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': '#fafafa',
        'background': '#050505',
        'primary': '#00b33e',
        'secondary': '#1a1a19',
        'accent': '#2eff46',
       },
       fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Poppins',
        body: 'Poppins',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}