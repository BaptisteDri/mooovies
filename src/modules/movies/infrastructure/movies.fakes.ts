import { Movie } from "../domain/movies"

export const movieFakes: Movie = {
	director: "Spike Lee",
	genre: "Drame Comedy",
	poster: "https://m.media-amazon.com/images/M/MV5BODA2MjU1NTI1MV5BMl5BanBnXkFtZTgwOTU4ODIwMjE@._V1_SX300.jpg",
	runtime: "120 minutes",
	title: "Do the Right Thing",
	year: "1989",
}

export const moviesFakes: Movie[] = [movieFakes, movieFakes, movieFakes]
