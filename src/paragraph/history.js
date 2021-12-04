import { getDomElement } from '../utils.js'
import * as pages from './pages.js'

export const $paragraphBody = getDomElement('.paragraph__body')

export const updatePage = () => {
	const pageId = decodeURI(location.hash).slice(1)
	const currentPage = getPage(pageId)
	const scrolSetting = { top: 0, behavior: 'smooth' }

	window.scrollTo(scrolSetting)

	$paragraphBody.innerHTML = currentPage
}

const getPage = (id) => {
	if (id === 'dataTypes' || id === 'типыДанных') {
		return pages.dataTypes
	} else if (id === 'string' || id === 'строки') {
		return pages.string
	} else if (id === 'number' || id === "числа") {
		return pages.number
	} else {
		return pages.defaultParagraph
	}
}
