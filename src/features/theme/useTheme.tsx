import { useEffect, useState } from "react"

export const useTheme = () => {
	const [theme, setTheme] = useState("light" as Theme)

	const themeInit = (): Theme => {
		const theme = localStorage.getItem("theme")
		if (theme) return theme as Theme
		if (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark"
		return "light"
	}

	const setThemePublic = (theme: Theme) => {
		setTheme(theme)
		localStorage.setItem("theme", theme)
	}

	const toggleTheme = () => {
		setThemePublic(theme === "light" ? "dark" : "light")
	}

	useEffect(() => {
		setTheme(themeInit())
	}, [])

	return { theme, setTheme: setThemePublic, toggleTheme }
}
