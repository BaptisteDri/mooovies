import { RootState } from "@/config/store"
import { CustomError } from "@/types/error"
import { Movie } from "@/types/movie"
import { RequestStatus } from "@/types/request-status"

export const selectMovies = ({ movies }: RootState): Movie[] | null =>
	movies.movies || null

export const selectMoviesError = ({ movies }: RootState): CustomError | null =>
	movies.getUserMoviesError || null

export const selectMoviesStatus = ({ movies }: RootState): RequestStatus =>
	movies.getUserMoviesStatus

export const selectAddMovieError = ({
	movies,
}: RootState): CustomError | null => movies.addMovieError || null

export const selectAddMovieStatus = ({ movies }: RootState): RequestStatus =>
	movies.addMovieStatus

export const selectDeleteMovieError = ({
	movies,
}: RootState): CustomError | null => movies.deleteMovieError || null

export const selectDeleteMovieStatus = ({ movies }: RootState): RequestStatus =>
	movies.deleteMovieStatus

export const selectToggleMovieIsSeenError = ({
	movies,
}: RootState): CustomError | null => movies.toggleMovieIsSeenError || null

export const selectToggleMovieIsSeenStatus = ({
	movies,
}: RootState): RequestStatus => movies.toggleMovieIsSeenStatus
