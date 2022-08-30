import { useEffect, useState } from "react"

export const useTheme = () => {
	const [theme, setTheme] = useState("light" as Theme)

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
		localStorage.setItem("theme", theme === "light" ? "dark" : "light")
	}

	useEffect(() => {
		const theme = localStorage.getItem("theme")
		if (theme) setTheme(theme as Theme)
	}, [])

	useEffect(() => {
		localStorage.setItem("theme", theme)
	}, [theme])

	return { theme, setTheme, toggleTheme }
}
