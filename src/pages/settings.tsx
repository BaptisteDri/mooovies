import type { NextPage } from "next"
import { Head } from "@/ui/components/shared/head"
import { SessionProvider } from "@/ui/components/shared/session-provider"
import { Settings } from "@/modules/settings/application/settings"
import { Title } from "@/ui/components/shared/title"

const SettingsPage: NextPage = () => {
	return (
		<>
			<Head />

			<SessionProvider>
				<div className="mb-4">
					<Title>Paramètres</Title>
				</div>
				<Settings />
			</SessionProvider>
		</>
	)
}

export default SettingsPage
