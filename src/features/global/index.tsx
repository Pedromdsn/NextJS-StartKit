import { ThemeProvider } from "../theme/ThemeContext"

export const GlobalContext = ({ children }: WithChildren) => {
	return <ThemeProvider>{children}</ThemeProvider>
}
