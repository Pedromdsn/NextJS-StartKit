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
			{
				light: {
					primary: "#3f9fff",
					secondary: "#c9e1ff",
					accent: "#53d17d",
					neutral: "#25242D",
					"base-100": "#fff",
					info: "#9AB8EF",
					success: "#42D7AA",
					warning: "#BA9803",
					error: "#F5142B",
				},
			},
			{
				dark: {
					primary: "#FF7AC6",
					secondary: "#BF95F9",
					accent: "#FFB86B",
					neutral: "#414558",
					"base-100": "#272935",
					info: "#8BE8FD",
					success: "#52FA7C",
					warning: "#F1FA89",
					error: "#FF5757",
				},
			},
		],
	},
	plugins: [require("daisyui"), require("@tailwindcss/forms"), require("tailwind-scrollbar")],
}
