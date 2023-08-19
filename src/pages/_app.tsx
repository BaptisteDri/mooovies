import "react-toastify/dist/ReactToastify.css"
import "styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "@/config/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
})

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</QueryClientProvider>
	)
}

export default App
