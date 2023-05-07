import { Movie } from "../domain/movies"

const movie1: Movie = {
	director: "Spike Lee",
	genre: "Drame, Comedy",
	poster: "https://m.media-amazon.com/images/M/MV5BODA2MjU1NTI1MV5BMl5BanBnXkFtZTgwOTU4ODIwMjE@._V1_SX300.jpg",
	runtime: "120 min",
	title: "Do the Right Thing",
	year: "1989",
	is_seen: true,
}
const movie2: Movie = {
	director: "Baz Luhrmann",
	genre: "Drama, Romance",
	poster: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg",
	runtime: "143 min",
	title: "The Great Gatsby",
	year: "2013",
	is_seen: false,
}
const movie3: Movie = {
	director: "Wes Anderson",
	genre: "Adventure, Comedy, Crime",
	poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
	runtime: "99 min",
	title: "The Grand Budapest Hotel",
	year: "2014",
	is_seen: true,
}

export const movieFakes: Movie = movie1

export const moviesFakes: Movie[] = [movie1, movie2, movie3]
