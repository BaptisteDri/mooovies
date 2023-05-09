import { Movie as InfraMovie } from "@/modules/movies/infrastructure/movies"

const movie1: InfraMovie = {
	id: 1,
	director: "Spike Lee",
	genre_ids: "",
	poster: "https://m.media-amazon.com/images/M/MV5BODA2MjU1NTI1MV5BMl5BanBnXkFtZTgwOTU4ODIwMjE@._V1_SX300.jpg",
	title: "Do the Right Thing",
	original_title: "Do the Right Thing",
	original_language: "en",
	year: "1989",
	is_seen: true,
	user_id: "",
}

export const moviesFakes: InfraMovie[] = [movie1, movie1, movie1]
