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
					"base-100": "#F5F5F5",
					info: "#9AB8EF",
					success: "#42D7AA",
					warning: "#BA9803",
					error: "#F5142B",
				},
			},
			{
				dark: {
					primary: "#4b77dd",
					secondary: "#0be897",
					accent: "#ed65b9",
					neutral: "#232B3E",
					"base-100": "#333",
					info: "#5E77C9",
					success: "#54DEC3",
					warning: "#F3D449",
					error: "#FC4B3B",
				},
			},
		],
	},
	plugins: [require("daisyui"), require("@tailwindcss/forms"), require("tailwind-scrollbar")],
}
