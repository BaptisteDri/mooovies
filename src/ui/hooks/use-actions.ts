import { actions } from "@/config/actions"
import { dependencies } from "@/config/dependencies"

export const useActions = () => actions.withDependencies(dependencies)
