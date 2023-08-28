export const isCharLetter = (char: string) => /^[a-zÀ-ÿ]$/i.test(char)

export const removeAccents = (str: string) =>
	str
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/đ/g, "d")
		.replace(/Đ/g, "D")
