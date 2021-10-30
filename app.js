import { getDomElement, doClassList } from './src/scripts/utils.js'
import {} from './src/scripts/navigation/getLinks.js'
import { $paragraphBody } from './src/scripts/paragraph/paragraph.js'

const $burgerIcon = getDomElement('.burger-icon')
const $sidebar = getDomElement('#sidebar')

$burgerIcon.addEventListener('click', () => {
	doClassList($burgerIcon, '_show-menu', 'toggle')
	doClassList($sidebar, '_show-menu', 'toggle')
})

$paragraphBody.addEventListener('DOMNodeInserted', () => {
	doClassList($burgerIcon, '_show-menu', 'remove')
	doClassList($sidebar, '_show-menu', 'remove')
})
