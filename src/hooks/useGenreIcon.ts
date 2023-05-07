interface GenresIconsNames {
	[genre: string]: string
}

const genreIcons: GenresIconsNames = {
	Action: "icon-action",
	Adventure: "icon-adventure",
	Animation: "icon-animation",
	Biography: "icon-biography",
	Comedy: "icon-comedy",
	Crime: "icon-crime",
	Documentary: "icon-documentary",
	Drama: "icon-drama",
	Family: "icon-family",
	Fantasy: "icon-fantasy",
	"Film Noir": "icon-film-noir",
	History: "icon-history",
	Horror: "icon-horror",
	Music: "icon-music",
	Musical: "icon-musical",
	Mystery: "icon-mystery",
	Romance: "icon-romance",
	"Sci-Fi": "icon-sci-fi",
	Short: "icon-short",
	Sport: "icon-sport",
	Superhero: "icon-superhero",
	Thriller: "icon-thriller",
	War: "icon-war",
	Western: "icon-western",
}

export const useGenreIcon = (genre: string): string => genreIcons[genre]
