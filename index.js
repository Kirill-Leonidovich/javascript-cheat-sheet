import { getDomElement } from './src/utils.js'
import { setCurrentLanguage } from './src/sidebar/language.js'
import { fillNav } from './src/sidebar/nav.js'
import { toggleShowSidebar } from './src/sidebar/burger.js'

window.addEventListener('load', () => {
	setCurrentLanguage()
	fillNav()

	const $burgerIcon = getDomElement('.burger-icon')
	$burgerIcon.addEventListener('click', toggleShowSidebar)
})
