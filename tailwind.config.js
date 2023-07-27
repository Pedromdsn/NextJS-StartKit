/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				main: ["Roboto", "sans-serif"]
			}
		}
	},

	plugins: [require("tailwind-scrollbar")]
}
