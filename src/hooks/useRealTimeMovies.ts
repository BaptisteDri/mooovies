import { supabase } from "@/config/supabase"
import { mapMovieToDomainModel } from "@/modules/movies/domain/movies.mapper"
import { Movie } from "@/types/movie"

enum EVENTTYPES {
	UPDATE = "UPDATE",
	DELETE = "DELETE",
	INSERT = "INSERT",
}

export const useRealTimeMovies = (
	movies: Movie[],
	setMovies: (movies: Movie[]) => void
) => {
	supabase
		.channel("custom-all-channel")
		.on(
			"postgres_changes",
			{ event: "*", schema: "public", table: "films" },
			(payload) => {
				console.log("Change received!", payload)
				const newMovie: any = payload.new
				const oldMovie: any = payload.old

				if (payload.eventType === EVENTTYPES.UPDATE) {
					setMovies(
						movies.map((movie) =>
							movie.id === payload.new.id
								? mapMovieToDomainModel(newMovie)
								: movie
						)
					)
				}

				if (payload.eventType === EVENTTYPES.INSERT) {
					setMovies([...movies, mapMovieToDomainModel(newMovie)])
				}

				if (payload.eventType === EVENTTYPES.DELETE) {
					setMovies(
						movies.filter((movie) => movie.id !== oldMovie.id)
					)
				}
			}
		)
		.subscribe()
}
