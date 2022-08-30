import { ThemeProvider } from "../theme/ThemeContext"

interface GlobalContextProps {
	children: React.ReactNode
}

export const GlobalContext = ({ children }: GlobalContextProps) => {
	return <ThemeProvider>{children}</ThemeProvider>
}
