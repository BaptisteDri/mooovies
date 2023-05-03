import { Movie as MovieDomain } from "@/modules/movies/domain/movie"

export type getMoviesDto = {
	userId: string
}

export interface MoviesOutput {
	getUserMovies({ userId }: { userId: string }): Promise<MovieDomain[]>
}
