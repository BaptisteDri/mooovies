import { Movie as MovieDomain } from "@/modules/movies/domain/movies"

export type getMoviesDto = {
	userId: string
}

export interface MoviesOutput {
	getUserMovies({ userId }: { userId: string }): Promise<MovieDomain[]>
	searchMovies({ query }: { query: string }): Promise<MovieDomain>
}
