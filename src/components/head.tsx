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
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicons/apple-touch-icon.png"
			/>
			<link rel="shortcut icon" href="/favicons/favicon.ico" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicons/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicons/favicon-16x16.png"
			/>
			<meta name="apple-mobile-web-app-title" content="Mooovies" />
			<meta name="application-name" content="Mooovies" />
		</NextHead>
	)
}
