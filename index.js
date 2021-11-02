import { $paragraphBody, updatePage } from './src/paragraph/history.js'
import { setCurrentLanguage } from './src/sidebar/language.js'
import { fillNav } from './src/sidebar/nav.js'
import { $burgerIcon, toggleShowSidebar, hideSidebar } from './src/sidebar/burger.js'

const start = () => {
	updatePage()
	setCurrentLanguage()
	fillNav()

	$paragraphBody.addEventListener('DOMNodeInserted', hideSidebar)
	$burgerIcon.addEventListener('click', toggleShowSidebar)
}

window.addEventListener('load', start)
window.addEventListener('hashchange', updatePage)
