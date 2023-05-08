interface GenresIconsNames {
	[genre: string]: string
}

const genreIcons: GenresIconsNames = {
	Action: "💥",
	Adventure: "🤠",
	Animation: "🧸",
	Biography: "📖",
	Comedy: "😂",
	Crime: "🔪",
	Documentary: "🌍",
	Drama: "🎭",
	Family: "👨‍👨‍👧‍👦",
	Fantasy: "🧝🏼‍♂️",
	"Film Noir": "📽️",
	History: "👑",
	Horror: "👻",
	Music: "🎶",
	Musical: "🎙️",
	Mystery: "🕵🏼",
	Romance: "💌",
	"Sci-Fi": "🛸",
	Short: "🎬",
	Sport: "🏅",
	"Super-Hero": "🦸🏼‍♂️",
	Thriller: "😱",
	War: "🪖",
	Western: "🏜️",
}

export const useGenreIcon = (genre: string): string => genreIcons[genre]
