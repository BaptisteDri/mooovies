import Iso639Type from "iso-639-language"

export const useLanguageFullName = (iso: string) =>
	Iso639Type.getType(1).getNameByCodeFrench(iso)
