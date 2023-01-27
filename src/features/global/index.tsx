import { ReactQuery } from "../swr/ReactQuery"
import { ThemeProvider } from "../theme/useTheme"

const GlobalProvider = ({ children }: WithChildren) => {
	return (
		<ReactQuery>
			<ThemeProvider>{children}</ThemeProvider>
		</ReactQuery>
	)
}

export { GlobalProvider }
