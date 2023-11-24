/** @type {import('tailwindcss').Config} */
// red for icons: #e85e56
// white for background and fonts light: #f4e9dc
// black for background and fonts dark: #494949
// new pallette colors for haikus
//
// --salmon: #F28E75ff;
// --english-violet: #474167ff;
// --gunmetal: #2A323Fff;
// --bright-pink-crayola: #F34868ff;
//
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#e85e56",
        light: "#f4e9dc",
        dark: "#494949",
        salmon: "#F28E75ff",
        violet: "#474167ff",
        gunmetal: "#2A323Fff",
        pink: "#F34868ff",
      },
    },
    screens: {
      xs: "200px"
    }
  },
  plugins: [],
};
