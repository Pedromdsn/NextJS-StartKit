import { createContext, useCallback, useEffect, useState } from "react"

export const ThemeContext = createContext<ThemeContextValue | null>(null)

const defaultTheme: Theme = "light"

export const ThemeProvider = ({ children }: WithChildren) => {
	const [theme, setTheme] = useState("light" as Theme)

	const setThemeWrapper = useCallback((theme: Theme) => {
		setTheme(theme)
		localStorage.setItem("theme", theme)
	}, [])

	const toggleTheme = useCallback(() => {
		setThemeWrapper(theme === "light" ? "dark" : "light")
	}, [theme])

	useEffect(() => {
		const themeInit = (): Theme => {
			const theme = localStorage.getItem("theme")
			if (theme) return theme as Theme
			if (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark"
			return defaultTheme
		}
		setTheme(themeInit())
	}, [])

	return (
		<ThemeContext.Provider value={{ theme, setTheme: setThemeWrapper, toggleTheme }}>
			<div data-theme={theme}>{children}</div>
		</ThemeContext.Provider>
	)
}
