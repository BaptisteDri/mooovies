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
		name: "Aventure",
		icon: "🤠",
	},
	{
		id: 16,
		name: "Animation",
		icon: "🧸",
	},
	{
		id: 35,
		name: "Comédie",
		icon: "😂",
	},
	{
		id: 80,
		name: "Crime",
		icon: "🔪",
	},
	{
		id: 99,
		name: "Documentaire",
		icon: "🌍",
	},
	{
		id: 18,
		name: "Drame",
		icon: "🎭",
	},
	{
		id: 10751,
		name: "Famille",
		icon: "👨‍👨‍👧‍👦",
	},
	{
		id: 14,
		name: "Fantastique",
		icon: "🧝🏼‍♂️",
	},
	{
		id: 36,
		name: "Historique",
		icon: "👑",
	},
	{
		id: 27,
		name: "Horreur",
		icon: "👻",
	},
	{
		id: 10402,
		name: "Musique",
		icon: "🎶",
	},
	{
		id: 9648,
		name: "Mistère",
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
		name: "Guerre",
		icon: "🪖",
	},
	{
		id: 37,
		name: "Western",
		icon: "🏜️",
	},
]

export const useGenre = (genreId?: number | string) => ({
	name: genres.find((genre) => genre.id == genreId)?.name ?? "",
	icon: genres.find((genre) => genre.id == genreId)?.icon ?? "",
	genres: genres,
})
