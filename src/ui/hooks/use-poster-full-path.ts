export const usePosterFullPath = (path: string) => {
	const basePath = `https://image.tmdb.org/t/p/original/${path}`

	return {
		originalPath: basePath,
		w92Path: `${basePath.replace("/original/", "/w92/")}`,
		w154Path: `${basePath.replace("/original/", "/w154/")}`,
		w185Path: `${basePath.replace("/original/", "/w185/")}`,
		w342Path: `${basePath.replace("/original/", "/w342/")}`,
		w500Path: `${basePath.replace("/original/", "/w500/")}`,
		w780Path: `${basePath.replace("/original/", "/w780/")}`,
	}
}
