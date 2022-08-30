import { createContext } from "react"
import { useTheme } from "./useTheme"

interface ThemeContextProps {
	theme: Theme
	setTheme: (theme: Theme) => void
	toggleTheme: () => void
}

interface DarkModeProviderProps {
	children: React.ReactNode
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: DarkModeProviderProps) => {
	const theme = useTheme()
	return (
		<ThemeContext.Provider value={theme}>
			<div data-theme={theme.theme}>{children}</div>
		</ThemeContext.Provider>
	)
}
