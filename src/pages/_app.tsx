import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "@/config/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Layout } from "@/ui/components/shared/layout/layout"
import { MoviesFiltersProvider } from "@/ui/hooks/contexts/use-movies-filters"
import { SearchMoviesFiltersProvider } from "@/ui/hooks/contexts/use-search-movies-filters"

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
				<MoviesFiltersProvider>
					<SearchMoviesFiltersProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</SearchMoviesFiltersProvider>
				</MoviesFiltersProvider>
			</Provider>
		</QueryClientProvider>
	)
}

export default App
