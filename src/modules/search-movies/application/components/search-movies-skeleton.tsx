export const SearchMoviesSkeleton = () => {
	return (
		<div className="animate-pulse w-full">
			<SearchMoviesSkeletonItem />
			<SearchMoviesSkeletonItem />
			<SearchMoviesSkeletonItem />
			<SearchMoviesSkeletonItem />
			<SearchMoviesSkeletonItem />
		</div>
	)
}

const SearchMoviesSkeletonItem = () => (
	<div className="flex justify-between py-4 border-b border-gray-200 dark:border-gray-800 last-of-type:border-none">
		<div className="flex w-full">
			<div className="flex items-center bg-gray-700 justify-center rounded-lg overflow-hidden h-40 sm:h-60 aspect-[27/40] mr-3 sm:mr-4 min-w-min">
				<svg
					className="w-10 h-10 text-gray-200 dark:text-gray-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 18"
				>
					<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
				</svg>
			</div>
			<div className="w-full">
				<div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-2"></div>
				<div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-full mb-3"></div>
				<div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
				<div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
				<div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
			</div>
		</div>
		<div className="ml-3 sm:ml-4 h-9 bg-gray-200 rounded-full dark:bg-gray-700 w-20 max-w-full mb-2"></div>
	</div>
)
