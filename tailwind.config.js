/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				Main: ["Roboto", "sans-serif"]
			}
		}
	},

	plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")]
}
