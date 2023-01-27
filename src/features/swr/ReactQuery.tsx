import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const ReactQuery = ({ children }: WithChildren) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export { ReactQuery }
