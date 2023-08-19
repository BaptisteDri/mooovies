import type { NextPage } from "next"
import { Head } from "@/ui/components/head"
import { SessionProvider } from "@/ui/components/session-provider"
import { Layout } from "@/ui/components/layout"
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
