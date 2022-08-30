/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Main: ["Roboto", "sans-serif"],
			},
		},
	},
	daisyui: {
		themes: [
			"light",
			"dark",
		],
	},
	plugins: [require("daisyui")],
}