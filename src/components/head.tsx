import NextHead from "next/head"

export const Head = () => {
	return (
		<NextHead>
			<title>Mooovies - trackez vos films</title>
			<meta
				name="description"
				content="App started with nextjs supabase auth redux"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<link rel="manifest" href="/manifest.json" />
		</NextHead>
	)
}
