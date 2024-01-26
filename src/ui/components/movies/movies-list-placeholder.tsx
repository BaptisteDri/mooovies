import { useRouter } from "next/router"
import { Icon } from "../shared/icon"
import { useSearchMoviesFilters } from "@/ui/hooks/contexts/use-search-movies-filters"
import { useMoviesFilters } from "@/ui/hooks/contexts/use-movies-filters"
import { Button } from "../shared/button"

export const MoviesListPlaceholder = () => {
	const { push } = useRouter()
	const { moviesFilters } = useMoviesFilters()
	const {
		searchMoviesFilters: { resultsType },
		setSearchMoviesFilters,
	} = useSearchMoviesFilters()

	const onAddMovie = async () => {
		if (moviesFilters?.filters?.title) {
			await setSearchMoviesFilters({
				resultsType,
				query: moviesFilters.filters.title,
			})
		}
		push("/add-movie")
	}

	return (
		<div className="text-white justify-center flex-1 mt-4 grid place-items-center">
			<div className="flex flex-col items-center mt-6">
				<div>🙈</div>
				<div className="text-lg px-6 text-center mb-10">
					Nous n'avons trouvé aucun film dans votre liste
				</div>
				<Button onClick={onAddMovie} role="link">
					Ajouter un film
					<Icon name="library_add" className="ml-2" />
				</Button>
			</div>
		</div>
	)
}
