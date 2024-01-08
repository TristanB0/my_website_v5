/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [
		require("daisyui"),
		require('@tailwindcss/typography')
	],
	daisyui: {
		themes: ["light", "dark"]
	}
}
