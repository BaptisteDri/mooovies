import type { NextPage } from "next"
import { Head } from "@/components/head"
import { SessionProvider } from "@/components/session-provider"
import { Layout } from "@/components/layout"
import { Settings } from "@/modules/settings/application/settings"

const SettingsPage: NextPage = () => {
	return (
		<>
			<Head />

			<SessionProvider>
				<Layout title="Paramètres">
					<Settings />
				</Layout>
			</SessionProvider>
		</>
	)
}

export default SettingsPage
