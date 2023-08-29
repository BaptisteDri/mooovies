// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
	dest: "public",
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["image.tmdb.org"],
	},
	experimental: {
		scrollRestoration: true,
	},
})

module.exports = nextConfig
