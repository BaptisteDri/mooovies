import type { NextPage } from "next"
import { Head } from "@/ui/components/shared/head"
import { SessionProvider } from "@/ui/components/shared/session-provider"
import { Layout } from "@/ui/components/shared/layout/layout"
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
