import { getDomElement } from './utils.js'

export const setCurrentLanguage = () => {
	const languageId = getLanguageId()
	const $radioLanguage = getDomElement(`#${languageId}`)
	const $switchLanguage = getDomElement('.switch-language')

	$radioLanguage.checked = true

	$switchLanguage.addEventListener('change', setLanguage)
}

const setLanguage = (e) => {
	const { target } = e

	localStorage.setItem('language', target.id)
}

const getLanguageId = () => {
	const id = localStorage.getItem('language')

	if (!id) {
		localStorage.setItem('language', 'en')

		return 'en'
	}

	return id
}
