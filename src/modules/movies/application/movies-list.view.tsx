import { useState } from "react"
import { Movie } from "@/types/movie"
import { Alphabetical } from "./components/alphabetical"
import { Drawer } from "@/components/drawer"
import { DrawerContent } from "./components/drawer-content"
import { SearchBar } from "./components/search-bar"

interface Props {
	movies: Movie[]
}

export const MoviesListView = ({ movies }: Props) => {
	const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
		undefined
	)
	const [query, setQuery] = useState<string | undefined>(undefined)

	const handleOnQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
	}

	const filterMovies = (movies: Movie[], query: string): Movie[] => {
		const lowerCaseQuery = query.toLowerCase()

		return movies.filter((movie) => {
			const lowerCaseTitle = movie.title.toLowerCase()
			const lowerCaseOriginalTitle = movie.originalTitle.toLowerCase()
			const lowerCaseDirector = movie.director.toLowerCase()

			return (
				lowerCaseTitle.includes(lowerCaseQuery) ||
				lowerCaseOriginalTitle.includes(lowerCaseQuery) ||
				lowerCaseDirector.includes(lowerCaseQuery)
			)
		})
	}

	return (
		<>
			<SearchBar
				query={query ?? ""}
				handleOnQueryChange={handleOnQueryChange}
			/>
			<Alphabetical
				movies={query ? filterMovies(movies, query) : movies}
				setSelectedMovie={setSelectedMovie}
			/>

			<Drawer
				isOpen={selectedMovie !== undefined}
				onCloseDrawer={() => setSelectedMovie(undefined)}
			>
				{selectedMovie && <DrawerContent movie={selectedMovie} />}
			</Drawer>
		</>
	)
}
