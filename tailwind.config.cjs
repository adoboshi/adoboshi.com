/** @type {import('tailwindcss').Config} */
module.exports = {
	content: {
    files: [
      "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin'), require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
