/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SFProDisplayRegular: ["SF-Pro-Display-Regular", "SF-Pro-Display-Regular"],
        SFCompactDisplayRegular: ["SF-Compact-Display-Regular", "SF-Compact-Display-Regular"],
        SFProRoundedRegular: ["SF-Pro-Rounded-Regular", "SF-Pro-Rounded-Regular"],
        SFProTextBlack: ["SF-Pro-Text-Black", "SF-Pro-Text-Black"],
        SFProTextRegular: ["SF-Pro-Text-Regular", "SF-Pro-Text-Regular"],
        SFProTextSemibold: ["SF-Pro-Text-Semibold", "SF-Pro-Text-Semibold"],
        SFPro: ["SF-Pro", "SF-Pro"],
      },
      backgroundImage: {
        "trashsquare": "url('/src/assets/images/trash.square.svg')",
        "squareandpencil": "url('/src/assets/images/square.and.pencil.svg')",
      },
    },
  },
  plugins: [],
}
