const colors = require('tailwindcss/colors');

const primaryColors = JSON.parse(process.env.NEXT_PUBLIC_BRAND_COLOR_PALETTE_PRIMARY);
const secondaryColors = JSON.parse(process.env.NEXT_PUBLIC_BRAND_COLOR_PALETTE_SECONDARY);
const darkColors = JSON.parse(process.env.NEXT_PUBLIC_BRAND_COLOR_PALETTE_DARK);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: primaryColors,
        secondary: secondaryColors,
        success: colors.green,
        info: colors.cyan,
        danger: colors.red,
        warning: colors.orange,
        light: colors.white,
        dark: darkColors,
      },
    },
  },
  plugins: [],
};
