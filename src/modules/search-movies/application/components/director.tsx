import { appOutputs } from "@/config/app-outputs"
import { useState, useEffect } from "react"
import { getMovieCredits } from "@/modules/search-movies/domain/search-movies.actions"

interface Props {
	movieId: number
}

export const Director = ({ movieId }: Props) => {
	const [director, setDirector] = useState<string>("")

	useEffect(() => {
		_getMovieCredits()
	}, [])

	const { searchMoviesOutput } = appOutputs

	const _getMovieCredits = async () => {
		try {
			const director: string[] = await getMovieCredits({
				searchMoviesOutput,
				movieId,
			})
			setDirector(director.join(", "))
		} catch (error: any) {
			console.error(error)
		}
	}

	return <p className="mb-6 text-gray-400">{director}</p>
}
