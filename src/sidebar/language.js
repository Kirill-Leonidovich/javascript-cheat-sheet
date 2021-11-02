import { getDomElement } from '../utils.js'
import { fillNav } from './nav.js'

export const setCurrentLanguage = () => {
	const languageId = getLanguageId()
	const $radioLanguage = getDomElement(`#${languageId}`)
	const $switchLanguage = getDomElement('.switch-language')

	$radioLanguage.checked = true

	$switchLanguage.addEventListener('change', overrideLanguage)
}

const overrideLanguage = (e) => {
	const { target } = e

	localStorage.setItem('language', target.id)
	
	fillNav()
}

const getLanguageId = () => {
	const id = localStorage.getItem('language')

	if (!id) {
		localStorage.setItem('language', 'en')

		return 'en'
	}

	return id
}
