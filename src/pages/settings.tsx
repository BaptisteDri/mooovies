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
				<div className="p-4 sm:p-6 h-full max-sm:h-[calc(100%-77px)] overflow-y-auto overflow-x-hidden scroll-smooth">
					<div className="mb-4 sm:mb-6">
						<Title>Paramètres</Title>
					</div>
					<Settings />
				</div>
			</SessionProvider>
		</>
	)
}

export default SettingsPage
