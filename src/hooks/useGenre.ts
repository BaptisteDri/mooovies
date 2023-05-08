type Genre = {
	id: number
	name: string
	icon: string
}

const genres: Genre[] = [
	{
		id: 28,
		name: "Action",
		icon: "💥",
	},
	{
		id: 12,
		name: "Adventure",
		icon: "🤠",
	},
	{
		id: 16,
		name: "Animation",
		icon: "🧸",
	},
	{
		id: 35,
		name: "Comedy",
		icon: "😂",
	},
	{
		id: 80,
		name: "Crime",
		icon: "🔪",
	},
	{
		id: 99,
		name: "Documentary",
		icon: "🌍",
	},
	{
		id: 18,
		name: "Drama",
		icon: "🎭",
	},
	{
		id: 10751,
		name: "Family",
		icon: "👨‍👨‍👧‍👦",
	},
	{
		id: 14,
		name: "Fantasy",
		icon: "🧝🏼‍♂️",
	},
	{
		id: 36,
		name: "History",
		icon: "👑",
	},
	{
		id: 27,
		name: "Horror",
		icon: "👻",
	},
	{
		id: 10402,
		name: "Music",
		icon: "🎶",
	},
	{
		id: 9648,
		name: "Mystery",
		icon: "🕵🏼",
	},
	{
		id: 10749,
		name: "Romance",
		icon: "💌",
	},
	{
		id: 878,
		name: "Science Fiction",
		icon: "🛸",
	},
	{
		id: 10770,
		name: "TV Movie",
		icon: "📺",
	},
	{
		id: 53,
		name: "Thriller",
		icon: "😱",
	},
	{
		id: 10752,
		name: "War",
		icon: "🪖",
	},
	{
		id: 37,
		name: "Western",
		icon: "🏜️",
	},
]

export const useGenreIcon = (genreId: number): string | undefined =>
	genres.find((genre) => genre.id === genreId)?.icon

export const useGenreName = (genreId: number): string | undefined =>
	genres.find((genre) => genre.id === genreId)?.name ?? ""
